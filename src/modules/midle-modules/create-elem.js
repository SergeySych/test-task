function createElem ( {str, type}, selector ) {
    const elem = document.querySelector(selector);

    elem.classList.remove('common', 'numbers', 'palindrom');
    elem.innerHTML = str;
    elem.classList.add(type);
}

module.exports = createElem;