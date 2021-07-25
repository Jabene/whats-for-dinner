var clipArt = document.querySelector('.clip-art');
var resultsBlock = document.querySelector('.results-div');
var resultsHalf = document.querySelector('.results-square');
var interactiveHalf = document.querySelector('.interactive-square');

var loginButton = document.querySelector('#login-button');
var clearButton = document.querySelector('#clear-button');
var formButton = document.querySelector('.form-button');
var selectSide = document.querySelector('#side');
var selectMain = document.querySelector('#main-dish');
var selectDessert = document.querySelector('#dessert');
var selectMeal = document.querySelector('#entire-meal');
var results = document.querySelector('.results');
var loginPage = document.querySelector('#login');
var nameInput = document.querySelector('#name');
var pageTitle = document.querySelector('#page-title');

var sides = ["Miso Glazed Carrots","Coleslaw","Garden Salad","Crispy Potatoes","Sweet Potato Tots","Coconut Rice","Caeser Salad","Shrimp Summer Rolls","Garlic Butter Mushrooms","Hush Puppies"];
var mains = ["Spaghetti and Meatballs","Pineapple Chicken","Shakshuka","Thai Yellow Curry","Bibimbap","Chicken Parmesean","Butternut Squash Soup"," BBQ Chicken Burgers","Ramen","Empanadas","Chicken Fried Rice","Sheet Pan Fajitas","Margarita Pizza"];
var desserts = ["Apple Pie","Lemon Meringue Pie","Black Forest Cake","Banana Bread","Peach Cobbler","Cheesecake","Funfetti Cake","Baklava","Flan","Macaroons","Chocolate Cupcakes","Pavlova","Pumpkin Pie","Key Lime Pie","Tart Tatin","Croissants","Eclairs"];
// ^ IMO, basically anything that you aren't adding an `onclick` event to should not be 'harvested' and declared globally ^

formButton.onclick = print;
clearButton.onclick = clear;
loginButton.onclick = login;

// v Why not just have these things start with the hidden class in the HTML?
resultsBlock.classList.add('hidden');
clearButton.classList.add('hidden');
resultsHalf.classList.add('hidden');
interactiveHalf.classList.add('hidden')

// v Why not have this return the random item, instead of just returning a random number representing the position of a random item?
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);

}

// v nice descriptive function name
function login() {
  event.preventDefault();
  // I think that, unless you have a good reason not to, you should do the same thing in the same way.
  // Why set `element.style.display = 'none'` when you have a hidden class already?
  loginPage.style.display = "none";
  // "resultsHalf" while exactly correct now, would need to be updated if you ever changed the layout decisions you made.
  // For this reason, I don't think this naming is very robust, and therefore not very good.
  // I think just `results` or even `resultsPane`, while less immediately descriptive, is less prone to needing to be changed so is better.
  resultsHalf.classList.remove('hidden');
  // ^ same as above
  interactiveHalf.classList.remove('hidden')
  pageTitle.innerText = `What's for Dinner, ${nameInput.value}?`
}

// v bad descriptive function name. I should be able to tell vaguely what the function is printing without reading the code.
// For example, am I logging something to console? Am I printing a title to the top of the page? To the title of the browser tab?
// Am I literally sending a print order to a physical printer? Very ambiguous
function print() {
  event.preventDefault();
  // Nested if-statements are nice to avoid whenever possible. 
  // An easy way to avoid it here is to reverse this logic and set it as a guard statement.
  // i.e. 
  // ```
  //  if (selectSide.checked || selectMain.checked || selectDessert.checked || selectMeal.checked) {
  //    return
  //  }
  // ```
  // This logically does the same thing, but now you only have to deal with 1 if-statement at a time. 
  // I think most peopel will agree this is MUCH easier to reason about
  if (selectSide.checked || selectMain.checked || selectDessert.checked || selectMeal.checked) {
    resultsBlock.classList.remove('hidden');
    clearButton.classList.remove('hidden');
    clipArt.classList.add('hidden');
    if (selectSide.checked) {
      results.innerText = sides[getRandomIndex(sides)];
    } else if (selectMain.checked) {
      results.innerText = mains[getRandomIndex(mains)];
    }else if (selectDessert.checked) {
      results.innerText = desserts[getRandomIndex(desserts)];
    } else if (selectMeal.checked) {
      results.innerText = `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`;
    }
  }
}

function clear() {
  // While `event` is registered globally, it also is passed in as a parameter. 
  // I think it's a little more clear to receive as a parameter and then reference it
  // i.e.
  // ```
  //  function clear( event ) {
  //    event.preventDefault
  //  ...
  // }
  
  event.preventDefault();
  resultsBlock.classList.add('hidden');
  clearButton.classList.add('hidden');
  clipArt.classList.remove('hidden');
  clearSelection();
}

// v I like this.
function clearSelection() {
  selectMain.checked = false;
  selectDessert.checked = false;
  selectMeal.checked = false;
  selectSide.checked = false;
}
