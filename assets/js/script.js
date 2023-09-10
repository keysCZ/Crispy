'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * MOBILE NAV
 */

const navbar = document.querySelector("[data-navbar]");
const navbarTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const togglerNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElements(navbarTogglers, "click", togglerNav);

const closeNav = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElements(navbarLinks, "click", closeNav);




/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
  backTopBtn.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

// Fonction pour créer une carte à partir des données JSON
function createCard(cardData) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';

  const cardImageDiv = document.createElement('div');
  cardImageDiv.className = 'card-image';
  const cardImage = document.createElement('img');
  cardImage.src = cardData.imageUrl;
  cardImageDiv.appendChild(cardImage);

  const cardTextDiv = document.createElement('div');
  cardTextDiv.className = 'card-text';
  const cardMealType = document.createElement('p');
  cardMealType.className = 'card-meal-type';
  cardMealType.textContent = cardData.mealType;
  const cardTitle = document.createElement('h2');
  cardTitle.className = 'card-title';
  cardTitle.textContent = cardData.title;
  const cardBody = document.createElement('p');
  cardBody.className = 'card-body';
  cardBody.textContent = cardData.body;
  cardTextDiv.appendChild(cardMealType);
  cardTextDiv.appendChild(cardTitle);
  cardTextDiv.appendChild(cardBody);

  const cardPriceDiv = document.createElement('div');
  cardPriceDiv.className = 'card-price';
  cardPriceDiv.textContent = cardData.price;

  cardDiv.appendChild(cardImageDiv);
  cardDiv.appendChild(cardTextDiv);
  cardDiv.appendChild(cardPriceDiv);

  return cardDiv;
}
