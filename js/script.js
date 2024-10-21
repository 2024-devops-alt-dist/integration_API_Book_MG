function toggleProfileMenu() {
    document.getElementById('profileMenu').classList.toggle('show-menu');
}

// Fermer le menu si on clique ailleurs
window.addEventListener('click', function(event) {
    const profileMenu = document.getElementById('profileMenu');
    if (!event.target.closest('.icon-profil-nav')) {
        profileMenu.classList.remove('show-menu');
    }
});

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


