import i18Obj from './translate';

const initTranslate = () => {
  const allElements = document.querySelectorAll('[data-i18]');
  const translateControls = document.querySelectorAll('.language-switcher__button');


  if (!allElements) {
    return;
  }

  const getSavedLang = () => {
    return localStorage.getItem('language');
  };

  const saveLang = (lang) => {
    localStorage.setItem('language', lang);
  };

  const activateLangButton = (lang) => {
    for (const currentControl of translateControls) {
      if (currentControl.dataset.lang === lang) {
        currentControl.classList.add('is-active');
      } else {
        currentControl.classList.remove('is-active');
      }
    }
  };

  const getTranslate = (lang) => {
    saveLang(lang);
    for (const currentElement of allElements) {
      if (currentElement.placeholder) {
        currentElement.placeholder = i18Obj[lang][currentElement.dataset.i18];
        currentElement.textContent = '';
      } else if (currentElement.value) {
        currentElement.value = i18Obj[lang][currentElement.dataset.i18];
      } else {
        currentElement.textContent = i18Obj[lang][currentElement.dataset.i18];
      }
    }
  };

  for (const currentControl of translateControls) {
    currentControl.addEventListener('click', () => {
      getTranslate(currentControl.dataset.lang);
    });
  }

  const currentLang = getSavedLang();

  if (currentLang === null) {
    return;
  } else {
    getTranslate(currentLang);
    activateLangButton(currentLang);
  }
};

export default initTranslate;
