function openLinksInNewTab(linkToOpen){
    setTimeout(() => {
        return window.open(linkToOpen, "_blank");
      }, 1000*(Math.floor(Math.random() * Math.floor(Math.random() * 18)))+1050);
  }




let arrayOfLinks = [];
for (let i = 1; i <= 10; i++)  {
    // let link = document.querySelector(`#main > div > div > div.ph0.pv2.artdeco-card.mb2 > ul > li:nth-child(${i}) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div > div.t-roman.t-sans > div > span.entity-result__title-line.entity-result__title-line--2-lines > span > a`).getAttribute("href");
 let link = document.querySelector(`#rso > div:nth-child(${i}) > div > div > div.Z26q7c.UK95Uc.jGGQ5e > div > a`);
        arrayOfLinks.push(link)
 
        openLinksInNewTab(link);
    };
console.log(arrayOfLinks)