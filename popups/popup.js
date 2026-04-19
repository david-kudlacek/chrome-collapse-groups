const toggle = document.getElementById('status-toggle');

chrome.storage.sync.get("isEnabled", (data) => {
  toggle.checked = data.isEnabled ?? true;
});

toggle.addEventListener('change', () => {
  const newState = toggle.checked;
  chrome.storage.sync.set({ "isEnabled": newState });
});

