const linkedin = "https://www.linkedin.com/search/results/people/";
const google = "https://www.google.com/search?";

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(linkedin) || tab.url.startsWith(google)) {
    // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // Next state will always be the opposite
    const nextState = prevState === 'in' ? '' : 'in'

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['scripts/content.js']
    });
  }
});