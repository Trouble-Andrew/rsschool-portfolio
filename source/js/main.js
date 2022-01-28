// import {ieFix} from './utils/ie-fix';
// import {polyfillObjectFit} from './utils/polyfill-object-fit';
import initMenu from './modules/init-menu';
import initPortfolio from './modules/init-portfolio';
import preloadImages from './modules/preload-images';
import initTranslate from './modules/init-translate';
import wavesBtn from './modules/init-waves';
import initSwitch from './modules/switch-theme';
import changeClassActive from './utils/change-class-active';
import {iosVhFix} from './utils/ios-vh-fix';

// import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  // только если ie11
  // ieFix();
  // https://github.com/fregante/object-fit-images
  // polyfillObjectFit();

  initSwitch();
  iosVhFix();


  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    // initModals();
    initMenu();
    initPortfolio();
    preloadImages();
    changeClassActive();
    initTranslate();
    wavesBtn();

//     console.log(
//     `Смена изображений в секции portfolio: 25
// Перевод страницы на два языка: 25
// Переключение светлой и тёмной темы: 25
// Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы: 5
// Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике : 5
// Total: 85
// `
//     );
  });
});

// ---------------------------------

// используйте .closest(el)

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// привязывайте js не на бэм, а на data-cookie

// выносим все в data-attr - url до пинов карты, настройки автопрокрутки, url к json и т.д.
