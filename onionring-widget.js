// onionring.js is made up of four files - onionring-widget.js (this one!), onionring-index.js, onionring-variables.js and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-WIDGET ===
//this file contains the code which builds the widget shown on each page in the ring. ctrl+f 'EDIT THIS' if you're looking to change the actual html of the widget

var tag = document.getElementById(ringID); //find the widget on the page

thisSite = window.location.href; //get the url of the site we're currently on
thisIndex = null;
shuffleWithSeed(sites, getDailySeed()) 

// go through the site list to see if this site is on it and find its position
for (i = 0; i < sites.length; i++) {
  if (thisSite.startsWith(sites[i])) { //we use startswith so this will match any subdirectory, users can put the widget on multiple pages
    thisIndex = i;
    break; //when we've found the site, we don't need to search any more, so stop the loop
  }
}

// We want the site array to be shuffled once every day, but be consistent for that day
function getDailySeed() { 
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to midnight
  return today.getTime(); // Use timestamp as seed
}

function shuffleWithSeed(array, seed) {
  // Simple seeded PRNG (not cryptographically secure)
  function mulberry32(a) {
    return function() {
      let t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
  }

  const rng  = mulberry32(seed);

  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function randomSite() {
  otherSites = sites.slice(); //create a copy of the sites list
  otherSites.splice(thisIndex, 1); //remove the current site so we don't just land on it again
  randomIndex = Math.floor(Math.random() * otherSites.length);
  location.href = otherSites[randomIndex];
}

//if we didn't find the site in the list, the widget displays a warning instead
if (thisIndex == null) {
  tag.insertAdjacentHTML('afterbegin', `
<table>
  <tr>
    <td>This site isn't part of the ${ringName} webring yet. You should talk to the manager to have your site added to the list!</td>
  </tr>
</table>
  `);
}
else {
  //find the 'next' and 'previous' sites in the ring. this code looks complex
  //because it's using a shorthand version of an if-else statement to make sure
  //the first and last sites in the ring join together correctly
  previousIndex = (thisIndex-1 < 0) ? sites.length-1 : thisIndex-1;
  nextIndex = (thisIndex+1 >= sites.length) ? 0 : thisIndex+1;

  indexText = ""
  //if you've chosen to include an index, this builds the link to that
  if (useIndex) {
    indexText = `<a href='${indexPage}'>index</a> | `;
  }

  randomText = ""
  //if you've chosen to include a random button, this builds the link that does that
  if (useRandom) {
    randomText = `<a href='javascript:void(0)' onclick='randomSite()'>random</a> | `;
  }

  //this is the code that displays the widget - EDIT THIS if you want to change the structure
  tag.insertAdjacentHTML('afterbegin', `
  <table>
    <tr>
      <td class='webring-prev'><a href='${sites[previousIndex]}'>← previous</a></td>
      <td class='webring-info'>This site is part of the ${ringName} webring</br>
      <span class='webring-links'>
        ${randomText}
        ${indexText}
        <a href='https://github.com/randyau/datawebring/'>what is this?</a></span></td>
      <td class='webring-next'><a href='${sites[nextIndex]}'>next →</a></td>
    </tr>
  </table>
  `);

}
