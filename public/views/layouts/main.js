const axiosConfig = { baseURL: 'http://dealership/' };

const getViewName = (() => {
    return document.location.pathname.replace('/', '');
});

const selectMenuItem = ((viewName) => {
    const element = document.querySelector(`ul#nav-menu>li#${viewName}`);

    if (!element) return null;

    element.classList.add('nav-item-selected');
});

const setSectionTitle = ((viewName) => {
    const sectionTitle = document.querySelector('main>section#container>div#section-title>div.title>h2');

    if (!sectionTitle) return null;

    const title = viewName.charAt(0).toUpperCase() + viewName.slice(1);

    sectionTitle.innerHTML = title;
});

const applyCurrencyMask = (() => {
    const inputCurrency = document.querySelector('input.currency');

    if (!inputCurrency) return null;

    inputCurrency.addEventListener('keyup', (event) => {
        const { value } = inputCurrency;

        const formattedValue = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    });
});

(() => {
    const viewName = getViewName();

    selectMenuItem(viewName);
    setSectionTitle(viewName);

    applyCurrencyMask();
})();