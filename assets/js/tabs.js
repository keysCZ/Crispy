// import { createCard } from "../js/script.js";
// $(document).ready(function() {
//     // Cacher tous les contenus d'onglets sauf le premier
//     $('.tab-content').not(':first').hide();
  
//     // Gérer le clic sur les liens d'onglet
//     $('.tab-header').click(function(e) {
//       e.preventDefault();
  
//       // Masquer tous les contenus d'onglets
//       $('.tab-content').hide();
  
//       // Afficher le contenu d'onglet correspondant à l'attribut href
//       $($(this).attr('href')).show();
//     });
//   });
// Sélectionnez tous les boutons d'onglet
const tabButtons = document.querySelectorAll('.tab-button');
$('.tab-content').hide().filter('.active').show();
// Attachez un gestionnaire d'événements à chaque bouton d'onglet
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Désélectionnez tous les boutons d'onglet
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Masquez tous les contenus d'onglets
        const tabContents = document.querySelectorAll('.tab-content');
        console.log(tabContents);

        tabContents.forEach(content => {
            content.classList.remove('active');
            content.style.display = "none"; 
        });

        // Activez le bouton d'onglet cliqué
        button.classList.add('active');

        // Affichez le contenu de l'onglet correspondant
        const tabId = button.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);
        tabContent.classList.add('active');
        tabContent.style.display = "block";
    });
});

//   // Fonction pour changer d'onglet et afficher la barre de chargement
// function changeTab(tabId) {
//     // Affiche la barre de chargement
//     document.querySelector('.loader').style.display = 'block';

//     // Masque tous les contenus d'onglets
//     const tabContents = document.querySelectorAll('.tab-content');
//     tabContents.forEach(content => {
//         content.style.display = 'none';
//     });

//     // Simule une requête AJAX pour charger le contenu du fichier JSON
//     fetch('../assets/json/' + tabId + '.json')
//         .then(response => response.json())
//         .then(data => {
//             // Génère le contenu HTML à partir du fichier JSON
//             const tabContent = document.getElementById(tabId);
//             data.forEach(cardData => {
//                 const card = createCard(cardData);
//                 tabContent.appendChild(card);
//                 })
            
//             // Masque la barre de chargement une fois le contenu généré
//             document.querySelector('.loader').style.display = 'none';

//             // Affiche le contenu de l'onglet sélectionné
//             tabContent.style.display = 'block';
//             })
//         .catch(error => {
//             console.error('Une erreur s\'est produite lors du chargement du fichier JSON :', error);
//         });
// }
// var tab1b = document.getElementById('tab1b');
// var tab2b = document.getElementById('tab2b');
// var tab3b = document.getElementById('tab3b');
// tab1b.onclick = function(){changeTab('tab1')};
// tab2b.onclick = function(){changeTab('tab2')};
// tab3b.onclick = function(){changeTab('tab3')};