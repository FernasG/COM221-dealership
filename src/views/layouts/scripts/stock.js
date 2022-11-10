const createStockItem = (async () => {
    const regexClean = new RegExp(/^(vehicleId)/gm);
    let stockRequest = { vehicleId: null, quantity: null, users: null };

    stockRequest = getFormData(stockRequest, regexClean);

    if (!stockRequest) return null;

    const createPromise = await axios.post('stock', stockRequest, axiosConfig).catch(err => err);

    if (createPromise.status === 201) document.location.reload();
});

const updateStockItem = (async (stockItemId) => {
    let stockRequest = { stockItemId: null, quantity: null, users: null };

    stockRequest = getFormData(stockRequest);

    const updatePromise = await axios.patch('stock', stockRequest, axiosConfig).catch(err => err);

    if (updatePromise.status === 200) document.location.reload();
});

const deleteStockItem = (async (stockItemId) => {
    const deletePromise = await axios.delete(`stock/${stockItemId}`, axiosConfig).catch(err => err);

    if (deletePromise.status !== 200) return null;

    const card = document.querySelector(`div.card#stockItemId${stockItemId}`);

    if (!card) return null;

    card.remove();
});

const createCheckboxItems = ((usersWishlist, users) => {
    const checkedUsersIds = usersWishlist.map(user => user.id);
    const checkboxItems = [];

    for (const user of users) {
        const { id, name } = user;
        const checked = checkedUsersIds.includes(id);
        const checkboxItem = { value: id, label: name, checked };

        checkboxItems.push(checkboxItem);
    }

    return checkboxItems;
});

const showUpdateStockItemModal = (async (stockItemId) => {
    const findStock = await axios.get(`stock/${stockItemId}`, axiosConfig).catch(err => err);
    const listUsers = await axios.get('users', { params: { type: 'json' } }, axiosConfig).catch(err => err);

    if (findStock.status !== 200 || listUsers.status !== 200) return null;

    const { data: { stockItem } } = findStock;

    if (!stockItem) return null;

    const { data: { users } } = listUsers;

    const { id, quantity, vehicle: { manufacturer, model }, usersWishlist } = stockItem;

    document.querySelector('div#overlay').classList.replace('hide', 'show');

    const checkboxItems = createCheckboxItems(usersWishlist, users);

    const modal = createModal({
        title: 'Update Stock Item', saveFunction: 'updateStockItem()',
        content: [
            [
                { label: 'Vehicle', type: 'select', disabled: true, selectOptions: [{ value: null, text: `${manufacturer} ${model}` }] },
                { label: 'Quantity', field: 'quantity', type: 'number', required: true, value: quantity },
                { field: 'id', type: 'hidden', disabled: true, value: id }
            ],
            [
                { label: 'Wishlist', type: 'checkbox', field: 'users', prefix: 'userIdUpdate', checkboxItems }
            ]
        ]
    });

    document.querySelector('main').appendChild(modal);
});