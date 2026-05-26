async function loadRules() {
    const {rules} = await chrome.storage.sync.get("rules");
    return Array.isArray(rules) ? rules : [];
}

function matchByPattern(url, rule) {
    if (rule.type === "match") {
        if (rule.pattern === "<all_urls>") return true;

        // 1) 先把正则特殊字符转义（注意：不包含 *）
        let escaped = rule.pattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
        // 2) 再把所有 * 换成 .*
        escaped = escaped.replace(/\*/g, ".*");

        //（可选）如果你会用到 "*://", "*.example.com" 之类，再做一些语法糖处理：
        // escaped = escaped.replace(/^\\\*:\\\/\\\//, "https?:\\/\\/"); // *:// -> https?://
        // escaped = escaped.replace(/^(https?:\\\/\\\/)\\\*\\\./, "$1([\\w-]+\\.)?"); // *.example.com -> ([\w-]+\.)?example.com

        const re = new RegExp("^" + escaped + "$");
        return re.test(url);
    } else if (rule.type === "regex") {
        try {
            return new RegExp(rule.pattern).test(url);
        } catch {
            return false;
        }
    }
    return false;
}


async function applyTitleIfMatched() {
    const rules = await loadRules();
    const url = location.href;
    const hit = rules.find(r => matchByPattern(url, r));
    if (!hit) return;

    // 1) 标题
    if (hit.title && document.title !== hit.title) {
        document.title = hit.title;
    }

    // 2) Favicon（若配置了）
    if (hit.icon) {
        setFavicon(hit.icon);
    }
}

// 将页面 favicon 统一替换为指定 URL
function setFavicon(iconUrl) {
    // 移除现有的各种 icon link
    document.querySelectorAll('link[rel~="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]').forEach(el => el.remove());

    // 标准 32x32
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = iconUrl;
    document.head.appendChild(link);

    // 兼容某些站点（可选再加一个 shortcut）
    const link2 = document.createElement("link");
    link2.rel = "shortcut icon";
    link2.href = iconUrl;
    document.head.appendChild(link2);
}

// 处理首次/刷新
applyTitleIfMatched();

// 处理 SPA 场景：URL 变化或站点改 title
(function watchSpaAndTitle() {
    const rawPushState = history.pushState;
    const rawReplaceState = history.replaceState;

    function onUrlChange() {
        applyTitleIfMatched();
    }

    history.pushState = function (...args) {
        const r = rawPushState.apply(this, args);
        onUrlChange();
        return r;
    };
    history.replaceState = function (...args) {
        const r = rawReplaceState.apply(this, args);
        onUrlChange();
        return r;
    };
    window.addEventListener("popstate", onUrlChange);

    // 如果站点脚本不断改 title，强制改回匹配后的标题
    const obs = new MutationObserver(async () => {
        const rules = await loadRules();
        const hit = rules.find(r => matchByPattern(location.href, r));
        if (!hit) return;

        if (hit.title && document.title !== hit.title) {
            document.title = hit.title;
        }
        if (hit.icon) {
            const hasIcon = !!document.querySelector('link[rel~="icon"], link[rel="shortcut icon"]');
            if (!hasIcon) setFavicon(hit.icon);
        }
    });

    // 观察 <title> 或 <head>
    const titleEl = document.querySelector("title");
    if (titleEl) {
        obs.observe(titleEl, {childList: true});
    } else {
        obs.observe(document.head, {childList: true, subtree: true});
    }
})();
