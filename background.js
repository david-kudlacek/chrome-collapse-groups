// https://developer.chrome.com/docs/extensions/reference/api/tabGroups

async function collapseTabGroup(group) {
  // 'group' is just a copy of the data.
  // To change the actual group, we call update():
  
  const data = await chrome.storage.sync.get({ "isEnabled": true });
  const updatedGroup = {};

  if (data.isEnabled) {
    updatedGroup.collapsed = true;
  } else {
    updatedGroup.collapsed = false;
  }

  await chrome.tabGroups.update(group.id, updatedGroup);
}

chrome.tabGroups.onCreated.addListener((group) => {
  collapseTabGroup(group);
});

