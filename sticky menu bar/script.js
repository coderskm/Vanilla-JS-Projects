let navBar = document.getElementById('menu-bar');
addEventListener('scroll', () => {
    if (window.scrollY >= 240) {
        navBar.classList.add(`sticky-bar`)
    } else {
        navBar.classList.remove(`sticky-bar`);
        
    }
});