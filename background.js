chrome.runtime.onInstalled.addListener(async () => {
  const { rules } = await chrome.storage.sync.get("rules");
  if (!rules) {
    await chrome.storage.sync.set({ rules: [
        { type: "match", pattern: "https://www.qidian.com/chapter/*", title: "起点 - 章节统一标题" }
      ]});
  }
});
