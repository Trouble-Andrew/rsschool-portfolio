const wrapper = document.querySelector('.wrapper');
const themeSwitcher = document.querySelector('[data-current-theme]');
let lightStyles;
let darkStyles;

try {
  lightStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]');
  darkStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');
}

catch {

}

const applyDarkTheme = () => {
  [...lightStyles].forEach((link) => {
    link.media = 'not all';
  });
  [...darkStyles].forEach((link) => {
    link.media = 'all';
  });

  wrapper.classList.remove('wrapper--light');
  wrapper.classList.add('wrapper--dark');
};

const applyLightTheme = () => {
  [...lightStyles].forEach((link) => {
    link.media = 'all';
  });
  [...darkStyles].forEach((link) => {
    link.media = 'not all';
  });

  wrapper.classList.remove('wrapper--dark');
  wrapper.classList.add('wrapper--light');
};

const getSavedScheme = () => {
  return localStorage.getItem('color-scheme');
}

const saveScheme = (scheme) => {
  localStorage.setItem('color-scheme', scheme);
}

const applyTheme = (scheme) => {
  scheme === 'light' ? applyLightTheme() : '';
  scheme === 'dark' ? applyDarkTheme() : '';
  themeSwitcher.dataset.currentTheme = scheme;
};

const switchTheme = (event) => {
  let theme = event.target.closest(('[data-theme]')).dataset.theme;
  themeSwitcher.dataset.currentTheme = theme;
  saveScheme(theme);
  applyTheme(theme);
};


const initSwitch = () => {
  const header = document.querySelector('header');
  const savedScheme = getSavedScheme();

  savedScheme === null ? applyTheme('dark') : applyTheme(savedScheme);

  themeSwitcher.addEventListener('click', switchTheme);
};


export default initSwitch;
