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
