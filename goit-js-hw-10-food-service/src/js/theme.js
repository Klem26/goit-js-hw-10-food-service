const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchThemeRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.body;

bodyRef.classList.add(Theme.LIGHT);

switchThemeRef.addEventListener('change', onChangeTheme);
saveChangesDarkTheme();

function setLightTheme() {
  bodyRef.classList.replace( Theme.DARK, Theme.LIGHT)
}
function setDarkTheme() {
  bodyRef.classList.replace(  Theme.LIGHT, Theme.DARK)
}

function onChangeTheme() {
  if (switchThemeRef.checked) {
    setDarkTheme();
    localStorage.setItem('theme', Theme.DARK)
    return;
  }
  setLightTheme();
  localStorage.removeItem('theme');

}

function saveChangesDarkTheme() {
  const saveTheme = localStorage.getItem('theme');
  if (saveTheme) {
    switchThemeRef.checked = true;
    setDarkTheme()
  }
}