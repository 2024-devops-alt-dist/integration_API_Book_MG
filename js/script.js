function toggleMenu() {
    const menuContainer = document.getElementById('menuContainer');

    if (menuContainer.style.display === 'block') {
        menuContainer.style.display = 'none'; 
    } else {
        menuContainer.style.display = 'block';
    }
}

// Fonction pour fermer le menu si un clic est détecté en dehors
function closeMenu(event) {
    const menuContainer = document.getElementById('menuContainer');
    const menuBurger = document.getElementById('menuBurger');

    if (!menuContainer.contains(event.target) && !menuBurger.contains(event.target)) {
        menuContainer.style.display = 'none'; 
    }
}

document.addEventListener('click', closeMenu);

// Fonction pour mettre un like ou l'enlever
const heartIcon = document.getElementById('heart-icon');

// Vérifier si l'élément existe avant d'ajouter l'événement
if (heartIcon) {
    heartIcon.addEventListener('click', function() {
        if (heartIcon.src.includes('coeur-vide.svg')) {
            // Si l'image est "coeur-vide", change pour "coeur-plein"
            heartIcon.src = 'assets/icons/utils/coeur-plein.svg';
            heartIcon.alt = 'coeur plein'; // Met à jour le texte alternatif
        } else {
            // Sinon, change pour "coeur-vide"
            heartIcon.src = 'assets/icons/utils/coeur-vide.svg';
            heartIcon.alt = 'coeur vide'; // Met à jour le texte alternatif
        }
    });
}

// Sélectionner les éléments nécessaires
const pastTab = document.querySelector('.past');
const ongoingTab = document.querySelector('.ongoing');
const pastBooking = document.querySelector('.past-booking');
const ongoingBooking = document.querySelector('.ongoing-booking');

// Gestion du clic sur "passées"
pastTab.addEventListener('click', () => {
    if (!pastTab.classList.contains('active-status')) {
        pastTab.classList.add('active-status');
        pastTab.classList.remove('inactive-status');
        ongoingTab.classList.add('inactive-status');
        ongoingTab.classList.remove('active-status');

        // Afficher "passées" et cacher "en cours"
        pastBooking.classList.remove('d-none');
        ongoingBooking.classList.add('d-none');
    }
});

// Gestion du clic sur "en cours"
ongoingTab.addEventListener('click', () => {
    if (!ongoingTab.classList.contains('active-status')) {
        ongoingTab.classList.add('active-status');
        ongoingTab.classList.remove('inactive-status');
        pastTab.classList.add('inactive-status');
        pastTab.classList.remove('active-status');

        // Afficher "en cours" et cacher "passées"
        ongoingBooking.classList.remove('d-none');
        pastBooking.classList.add('d-none');
    }
});
