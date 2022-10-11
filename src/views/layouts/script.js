const axiosConfig = {
    baseURL: 'http://localhost:3000'
};

const getViewName = (() => {
    return document.location.pathname.replace('/', '');
});

const selectMenuItem = ((viewName) => {
    const element = document.querySelector(`ul#nav-menu>li#${viewName}`);

    if (!element) return null;

    element.classList.add('nav-item-selected');
});

const setSectionTitle = ((viewName) => {
    const sectionTitle = document.querySelector(`main>section#container>div#section-title>h2`);

    if (!sectionTitle) return null;

    const title = viewName.charAt(0).toUpperCase() + viewName.slice(1);

    sectionTitle.innerHTML = title;
});

const deleteVehicle = (async (vehicleId) => {
    const deletePromise = await axios.delete(`vehicles/${vehicleId}`, axiosConfig).catch(err => err);

    if (deletePromise.status !== 200) return null;

    const card = document.querySelector(`div.card#vehicleId${vehicleId}`);

    if (!card) return null;

    card.remove();
});

(() => {
    const viewName = getViewName();

    selectMenuItem(viewName);
    setSectionTitle(viewName);
})();