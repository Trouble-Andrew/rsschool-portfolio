const changeClassActive = () => {
  const allElements = document.querySelectorAll('[data-class-active]');

  if (!allElements) {
    return;
  }

  function activate(event) {
    if (Array.from(event.target.classList).length === 0) {
      return;
    }

    const targetClassList = Array.from(event.target.classList).map((cls) => `.${cls}`).filter((cls) => cls !== '.is-active').join('');
    const similarElements = document.querySelectorAll(targetClassList);

    for (const element of similarElements) {
      element.classList.remove('is-active');
    }
    event.target.classList.add('is-active');
  }

  for (const element of allElements) {
    element.addEventListener('click', activate);
  }
};

export default changeClassActive;
