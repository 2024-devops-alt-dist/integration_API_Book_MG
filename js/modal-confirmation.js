    // // Fonction modal confirmation réservation
    const modal = document.getElementById('confirmationModal');
    const btnValider = document.getElementById('validerPanier');
    const spanClose = document.querySelector('.close');
    const body = document.querySelector('body');
    
    // vérifier que la modal est masquée au chargement de la page
    window.onload = function() {
        modal.style.display = 'none';
    };
    
    btnValider.addEventListener('click', function() {
        modal.style.display = 'flex'; 
        body.classList.add('no-scroll');
    });