/**
 * Permet d'ajouter des id unique au bouton de couleur!
 */
function addId() {
    const allCouleurs = document.querySelector('.text__couleur__box').children;

    for (let i = 0; i < allCouleurs.length; i++) {
        allCouleurs[i].setAttribute("id", `img${i + 1}`);
    }
}

// Ajoute les id
addId();

/**
 * Permet de changer l'image par rapport a la couleur !
 */
function changeImg(id) {
    const img = document.querySelector('#changeImg');

    img.setAttribute('src', `/assets/images/${id}.jpg`);
}

/**
 * Permet d'ouvrir une box pour remercier le client
 */
function openOverlay(text) {
    const message = document.querySelector('#message');

    document.querySelector('.overlay').style.display = "flex";
    message.textContent = text;

}

/**
 * Permet de fermer L'overlay
 */
function closeOverlay() {
    document.querySelector('.overlay').style.display = "none";
}

/**
 * Permet de fermer le menu en pour les format tablet et telephone
 */
function menu() {
    const text = document.querySelector('.text');
    const menu = document.querySelector('.menu');
    const iconEli = document.querySelector('.menu__icon-1');
    const iconArrow = document.querySelector('.fa-arrow-circle-down');

    if (menu.style.display == 'block') {
        text.style.width = '20px';
        iconArrow.style.display = 'none';
        iconEli.style.display = 'inline';
        menu.style.display = "none";
    } else {
        text.style.width = '300px';
        iconArrow.style.display = 'inline';
        iconEli.style.display = 'none';
        menu.style.display = "block";
    }
}

