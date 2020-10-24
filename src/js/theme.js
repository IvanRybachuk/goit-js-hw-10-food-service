
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};


const themeSwitch = document.querySelector("#theme-switch-toggle");
const body = document.body;
body.className = localStorage.getItem("theme") || Theme.LIGHT;
body.className === Theme.DARK ? themeSwitch.checked = true : '';
themeSwitch.addEventListener('change', changeHandler);

function changeHandler(e) {
    if (body.className === Theme.LIGHT) {
        body.className = Theme.DARK;
        localStorage.setItem("theme", Theme.DARK);
    } else {
        body.className = Theme.LIGHT;
        localStorage.setItem("theme", Theme.LIGHT);
    }
};