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

formButton.onclick = print;
clearButton.onclick = clear;
loginButton.onclick = login;

resultsBlock.classList.add('hidden');
clearButton.classList.add('hidden');
resultsHalf.classList.add('hidden');
interactiveHalf.classList.add('hidden')

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);

}

function login() {
  event.preventDefault();
  loginPage.style.display = "none";
  resultsHalf.classList.remove('hidden');
  interactiveHalf.classList.remove('hidden')
  pageTitle.innerText = `What's for Dinner, ${nameInput.value}?`
}

function print() {
  event.preventDefault();
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
  event.preventDefault();
  resultsBlock.classList.add('hidden');
  clearButton.classList.add('hidden');
  clipArt.classList.remove('hidden');
  clearSelection();
}

function clearSelection() {
  selectMain.checked = false;
  selectDessert.checked = false;
  selectMeal.checked = false;
  selectSide.checked = false;
}
