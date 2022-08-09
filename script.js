function injectScript(){
  let arrayOfLinks = [];

  function openLinksInNewTab(linkToOpen){
    return window.open(linkToOpen, "_blank");
  }
  
    for (let i = 1; i <= 10; i++)  {
    let link = document.querySelector(`#main > div > div > div.ph0.pv2.artdeco-card.mb2 > ul > li:nth-child(${i}) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div > div.t-roman.t-sans > div > span.entity-result__title-line.entity-result__title-line--2-lines > span > a`).getAttribute("href");
console.log(link);
    arrayOfLinks.push(link);
    openLinksInNewTab(link);
  
  }
  console.log(arrayOfLinks);
}

function visitProfiles() {

// This function inserts our autoSearch function into the page's code

  // This selects the focused tab for the operation and passes the autoSearch function
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
  chrome.scripting.executeScript({target: {tabId: tabs[0].id}, function: injectScript})
  })
  
  // This closes the extension pop-up to select the website search bar
  window.close();

}


document.getElementById("cta").addEventListener("click", visitProfiles);