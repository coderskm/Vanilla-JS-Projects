let btn = document.getElementById('btn');

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

btn.addEventListener('click', () => {
    if (localStorage.getItem(`theme`) === 'dark-theme') {
        setTheme('light-theme');
    } else {
        setTheme("dark-theme");
    }

})