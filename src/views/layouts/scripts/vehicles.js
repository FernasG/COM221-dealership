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

    if (createPromise.status === 201) document.location.reload();
});