document.addEventListener("DOMContentLoaded", () => {
    if (window.layui) {
        layui.use(["form"], function () {
            layui.form.render();
        });
    }
});

document.getElementById("open").addEventListener("click", () => {
    chrome.runtime.openOptionsPage();
});
const lang = getCurrentLanguage();
const dict = messages[lang] || messages.en;

document.getElementById("add").addEventListener("click", async () => {
    const title = document.getElementById("title").value.trim();
    const icon = document.getElementById("icon").value.trim();
    if (title == undefined || !title.trim() || title.length == 0) {
        return alert(dict.requiredTitlePattern);
    }
    // 需要 "tabs" 权限来 query 当前激活标签
    chrome.tabs.query({active: true, currentWindow: true}, async tabs => {
        const currentTab = tabs[0];
        if (currentTab) {
            // 生成一个简单的 match 规则：协议 + 主机 + 路径前缀
            const pattern = currentTab.url;
            const {rules = []} = await chrome.storage.sync.get("rules");
            if (icon != undefined && title.trim().length > 0) {
                rules.push({type: "match", pattern, title, icon});
            } else {
                rules.push({type: "match", pattern, title});
            }
            await chrome.storage.sync.set({rules});
            // 小提示
            alert(dict.addedSuccessfully);
            chrome.tabs.reload(tabs.id);
        }
    });
});
document.addEventListener("DOMContentLoaded", async () => {
    await applyI18n();
});