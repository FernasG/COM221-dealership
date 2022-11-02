const axiosConfig = {
    baseURL: 'http://dealership/'
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
    const sectionTitle = document.querySelector('main>section#container>div#section-title>div.title>h2');

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

const createVehicle = (async () => {
    const modelForm = document.querySelector('div.model>div.model-body>div.model-form');

    if (!modelForm) return null;

    const inputBoxes = modelForm.querySelectorAll('div.input-box');

    const vehicleRequest = { type: null, model: null, price: null, manufacturer: null, manufacturing_date: null };

    const inputTags = ['input', 'select'];

    let warnings = false;

    for (const inputBox of inputBoxes) {
        const inputTag = inputTags.find((tag) => {
            const HTMLTag = inputBox.querySelector(tag);
            return HTMLTag ? true : false;
        });

        if (!inputTag) continue;

        const HTMLTag = inputBox.querySelector(inputTag);

        const { name, value, required } = HTMLTag;

        if (required && !value) {
            HTMLTag.classList.add('warning');
            warnings = true;
            continue
        }

        vehicleRequest[name] = value;
    }

    if (warnings) return null;

    const createPromise = await axios.post('vehicles', vehicleRequest, axiosConfig).catch(err => err);

    if (createPromise.status === 200) document.location.reload();
});

const toggleModelVisibility = ((before, after) => {
    const model = document.querySelector('div.model');
    const overlay = document.querySelector('div#overlay');

    if (!model || !overlay) return null;

    model.classList.replace(before, after);
    overlay.classList.replace(before, after);
});

const showModel = (() => {
    toggleModelVisibility('hide', 'show');
});

const closeModal = (() => {
    toggleModelVisibility('show', 'hide');
});

(() => {
    const viewName = getViewName();

    selectMenuItem(viewName);
    setSectionTitle(viewName);
})();