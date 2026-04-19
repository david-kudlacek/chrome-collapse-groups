async function collapseTabGroup(group) {
  // 'group' is just a copy of the data.
  // https://developer.chrome.com/docs/extensions/reference/api/tabGroups
  // To change the actual group, we call update():
  
  const updatedGroup = {};

  if (group.collapsed == false) {
    updatedGroup.collapsed = true;
  }

  await chrome.tabGroups.update(group.id, updatedGroup);
}

chrome.tabGroups.onCreated.addListener((group) => {
  collapseTabGroup(group);
});

