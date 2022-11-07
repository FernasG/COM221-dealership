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

    if (!stockItem) return null;

    const { id, quantity, vehicle: { manufacturer, model } } = stockItem;

    document.querySelector('div#overlay').classList.replace('hide', 'show');
    document.querySelector('main').appendChild(createModal({
        title: 'Update Stock Item', saveFunction: 'updateStockItem()',
        content: [
            [
                { label: 'Vehicle', field: 'vehicle', type: 'select', required: true, disabled: true, selectOptions: [{ value: null, text: `${manufacturer} ${model}` }] },
                { label: 'Quantity', field: 'quantity', type: 'number', required: true, value: quantity },
                { field: 'stockItemId', type: 'hidden', disabled: true, value: id }
            ]
        ]
    }));

    console.log();
});