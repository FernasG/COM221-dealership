(() => {
    const item = document.location.pathname.replace('/', '');
    const element = document.querySelector(`ul#list>li#${item}`);
    element.classList.add('list-item-selected');
})();