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
