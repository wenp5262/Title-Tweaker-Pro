const typeEl = document.getElementById("type");
const patternEl = document.getElementById("pattern");
const titleEl = document.getElementById("title");
const addBtn = document.getElementById("add");
const iconEl = document.getElementById("icon");
const lang = getCurrentLanguage();
const dict = messages[lang] || messages.en;
(async () => {
    const {rules} = await chrome.storage.sync.get("rules");
    const rows = (rules || []).map((r, i) => `
  <tr>
    <td>${r.type}</td>
    <td>${r.pattern}</td>
    <td>${r.title}</td>
    <td>${r.icon || ""}</td>
    <td>
      <button class="layui-btn layui-btn-danger layui-btn-sm del" data-index="${i}">
        ${dict.delete}
      </button>
    </td>
  </tr>
`).join("");

    document.getElementById("table-body").innerHTML = rows;

    document.querySelectorAll(".del").forEach(btn => {
        btn.addEventListener("click", async e => {
            const idx = parseInt(e.target.dataset.index);
            const {rules} = await chrome.storage.sync.get("rules");
            rules.splice(idx, 1);
            await chrome.storage.sync.set({rules});
            location.reload(); // 重新加载刷新表格
        });
    });
})();

// ✅ 动态修改提示
typeEl.addEventListener("change", () => {
    if (typeEl.value === "regex") {
        patternEl.placeholder = dict.patternPlaceholderRegex;
    } else {
        patternEl.placeholder = dict.patternPlaceholderMatch;
    }
});

async function getRules() {
    const {rules} = await chrome.storage.sync.get("rules");
    return Array.isArray(rules) ? rules : [];
}

async function setRules(rules) {
    await chrome.storage.sync.set({rules});
}

addBtn.addEventListener("click", async () => {
    const type = typeEl.value;
    const pattern = patternEl.value.trim();
    const title = titleEl.value.trim();
    const icon = (iconEl.value || "").trim();
    if (!pattern || !title) return alert(dict.requiredTitlePattern);

    const rules = await getRules();
    rules.push({type, pattern, title, icon});
    await setRules(rules);

    patternEl.value = "";
    titleEl.value = "";
    iconEl.value = "";
    location.reload(); // 重新加载刷新表格
});

document.addEventListener("DOMContentLoaded", async () => {
    await applyI18n();
});