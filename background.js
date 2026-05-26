chrome.runtime.onInstalled.addListener(async () => {
  const { rules } = await chrome.storage.sync.get("rules");
  if (!rules) {
    await chrome.storage.sync.set({ rules: [
        { type: "match", pattern: "https://www.google.com//*", title: "Google" }
      ]});
  }
});
