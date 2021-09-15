/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

  /***
 * generate a random RGB Value
 * 
 ***/
 const getRandomRGBValue = () => Math.floor(Math.random() * 256);
 let previousQuoteIndex = -1 // stores the index value of the last quote to avoid repeat quote.



/***
 * Takes a string representing a css selector as an argument, returns a new random background color for this element when called.
 * example use : changeElementBackgroundColor('body')
 ***/

function changeElementBackgroundColor(element) {
 
  const randomRgbValue = `rgb(${getRandomRGBValue()}, ${getRandomRGBValue()}, ${getRandomRGBValue()} )`;
  const newColorElement = document.querySelector(element);
  return newColorElement.style.backgroundColor = randomRgbValue;

}

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'He wormed his way through the thicket towards the forest.', 
    source: 'William Golding', citation: 'Lord of the Flies', 
    year: '1954', tags: ["literature", "english", "nobel prize"]
  },
  {
    quote: 'La conscience littéraire verbale (et d\'une maniète plus large, idéologiquement verbale) des auteurs était complexe.', 
    source: 'Mikhaïl Bakhtine', 
    citation: 'Esthétique et théorie du roman', 
    year: '1987', 
    tags : ["study", "russian", "literary analysis"]
  },
  {
    quote: 'Le concept de corporatisme est souvent connoté négativement, en France ou ailleurs[...]', 
    source: 'Yohann Aucante' , 
    citation: 'Les démocraties scandinaves', 
    year: '2013', 
    tags : ["study", "political science", "scandinavia"]
},
  {
    quote: 'Certains de nos clercs sont plongés dans l\'erreur et pensent bien agir et contribuer à l\'amélioration de la foi en critiquant le roi[...]',
    source: 'Anonyme',
    citation: 'Discours contre les évèques',
    year: 'vers 1280',
    tags : ["historical", "scandinavia", "political science"]
  },
  {
    quote: 'Lord  Felmet was one of Nature\'s gloater. He was good at it.', 
    source: 'Terry Prachett', 
    citation: 'Wyrd Sisters', 
    year: '1980', 
    tags : ["literature", "english", "fantasy"]
  }
];


/***
 * `getRandomQuote` function
 * returns a JavaScript object with the quote, source, citation, year and tags proprieties.
 * quote, source, citation and year are strings, tags is an array.
***/
function getRandomQuote() {
  let randomQuoteIndex = Math.floor(Math.random() * quotes.length)
  while (randomQuoteIndex === previousQuoteIndex ){
    randomQuoteIndex = Math.floor(Math.random() * quotes.length)


  }
  previousQuoteIndex = randomQuoteIndex
  return quotes[randomQuoteIndex] 

}


/***
 * `printQuote` function
 * inserts an HTML string containing a quote object. checks if the quote object has citation, year and tags propriety.
 * Changes the background color of the quote block.
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source} `;
  if (randomQuote.citation){
    html += `<span class="citation"> ${randomQuote.citation} </span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year"> ${randomQuote.year} </span>`
  }
  if (randomQuote.tags){
    html += `<br><span class="tag-container">tags: `
    for (let i = 0; i < randomQuote.tags.length; i++) {
      
      html +=`<span class="tags">${randomQuote.tags[i]}</span>`

    }
    html +="</span>"
  }
  changeElementBackgroundColor('body')
  html += "</p>"
  
  clearInterval(timer)
  timer = setInterval(printQuote, 5000)
  document.getElementById('quote-box').innerHTML = html
}

let timer = setInterval(printQuote, 5000)
printQuote()

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
