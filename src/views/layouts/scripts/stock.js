const createStockItem = (async () => {
    const regexClean = new RegExp(/^(vehicleId)/gm);
    let stockRequest = { vehicleId: null, quantity: null };

    stockRequest = getFormData(stockRequest, regexClean);

    if (!stockRequest) return null;

    const createPromise = await axios.post('stock', stockRequest, axiosConfig).catch(err => err);

    if (createPromise.status === 201) document.location.reload();
});

const updateStockItem = (async (stockItemId) => {
    console.log(stockItemId);
});

const deleteStockItem = (async (stockItemId) => {
    const deletePromise = await axios.delete(`stock/${stockItemId}`, axiosConfig).catch(err => err);

    if (deletePromise.status !== 200) return null;

    const card = document.querySelector(`div.card#stockItemId${stockItemId}`);

    if (!card) return null;

    card.remove();
});

const showUpdateStockItemModal = (async (stockItemId) => {
    const findPromise = await axios.get(`stock/${stockItemId}`, axiosConfig).catch(err => err);

    if (findPromise.status !== 200) return null;

    const { data: { stockItem } } = findPromise;

    document.querySelector('div#overlay').classList.replace('hide', 'show');
    document.querySelector('main').appendChild(createModal({ title: 'Salve', content: [], saveFunction: 'updateStockItem()' }));

    console.log();
});