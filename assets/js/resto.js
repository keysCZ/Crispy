import { createCard } from "script.js";

window.addEventListener('load', () => {
    // Charger le fichier JSON
    fetch('assets/json/restaurant.json')
    .then(response => response.json())
    .then(data => {
        // Créer une carte pour chaque objet dans le fichier JSON
        const cardContainer = document.getElementById('card-container'); 
        // Assurez-vous d'avoir un élément avec l'ID "card-container" dans votre HTML pour ajouter les cartes
        data.forEach(cardData => {
        const card = createCard(cardData);
        cardContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Une erreur s\'est produite lors du chargement du fichier JSON :', error);
    });
// Masquez la barre de chargement en ajoutant la classe "loaded"
document.body.classList.add('loaded');
});