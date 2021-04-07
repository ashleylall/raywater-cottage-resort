
// Menu toggle

let menuButton = document.querySelector(`.button-menu`);
let menuIcon = document.querySelector(`.menu`);
let nav = document.querySelector(`.nav`);
var menuOpened = Boolean(false);

// Toggle menu open/close
menuButton.addEventListener('click', function(event) {
    console.log(`clicked`);

    nav.classList.toggle(`menu__opened`);
    // menuOpened = true;
    // switchMenuIcon();

})




