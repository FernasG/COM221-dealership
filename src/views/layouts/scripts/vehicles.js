const deleteVehicle = (async (vehicleId) => {
    const deletePromise = await axios.delete(`vehicles/${vehicleId}`, axiosConfig).catch(err => err);

    if (deletePromise.status !== 200) return null;

    const card = document.querySelector(`div.card#vehicleId${vehicleId}`);

    if (!card) return null;

    card.remove();
});

const createVehicle = (async () => {
    let vehicleRequest = { type: null, model: null, price: null, manufacturer: null, manufacturing_date: null };

    vehicleRequest = getFormData(vehicleRequest);

    if (!vehicleRequest) return null;

    const createPromise = await axios.post('vehicles', vehicleRequest, axiosConfig).catch(err => err);

    if (createPromise.status === 201) document.location.reload();
});