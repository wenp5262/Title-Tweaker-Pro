const typeEl = document.getElementById("type");
const patternEl = document.getElementById("pattern");
const titleEl = document.getElementById("title");
const addBtn = document.getElementById("add");
const iconEl = document.getElementById("icon");

(async () => {
    const { rules } = await chrome.storage.sync.get("rules");
    const rows = (rules || []).map((r, i) => `
    <tr>
      <td>${r.type}</td>
      <td>${r.pattern}</td>
      <td>${r.title}</td>
      <td>${r.icon || ""}</td>
      <td><button data-index="${i}" class="layui-btn layui-btn-xs layui-btn-danger del">删除</button></td>
    </tr>
  `).join("");
    document.getElementById("table-body").innerHTML = rows;

    document.querySelectorAll(".del").forEach(btn => {
        btn.addEventListener("click", async e => {
            const idx = parseInt(e.target.dataset.index);
            const { rules } = await chrome.storage.sync.get("rules");
            rules.splice(idx, 1);
            await chrome.storage.sync.set({ rules });
            location.reload(); // 重新加载刷新表格
        });
    });
})();

// ✅ 动态修改提示
typeEl.addEventListener("change", () => {
    if (typeEl.value === "regex") {
        patternEl.placeholder = "示例：^https?:\\/\\/www\\.qidian\\.com\\/chapter\\/\\d+";
    } else {
        patternEl.placeholder = "示例：https://www.qidian.com/chapter/*";
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
    if (!pattern || !title) return alert("标题和链接必填");

    const rules = await getRules();
    rules.push({type, pattern, title, icon});
    await setRules(rules);

    patternEl.value = "";
    titleEl.value = "";
    iconEl.value = "";
});
