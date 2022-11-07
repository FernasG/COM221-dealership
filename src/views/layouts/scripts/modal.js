const toggleModalVisibility = ((before, after) => {
    const modal = document.querySelector(`div.modal.${before}`);
    const overlay = document.querySelector('div#overlay');

    if (!modal || !overlay) return null;

    modal.classList.replace(before, after);
    overlay.classList.replace(before, after);
});

const showModal = (() => {
    toggleModalVisibility('hide', 'show');
});

const closeModal = (() => {
    toggleModalVisibility('show', 'hide');
});

const getFormData = ((formContent = {}, regexClean = null) => {
    const modalForm = document.querySelector('div.modal.show>div.modal-body>div.modal-form');

    if (!modalForm) return null;

    const inputBoxes = modalForm.querySelectorAll('div.input-box');

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

        formContent[name] = regexClean ? value.replace(regexClean, '') : value;
    }

    if ('undefined' in formContent) delete formContent.undefined;

    return warnings ? null : formContent;
});

const createModalHeader = ((title) => {
    const modalHeader = document.createElement('div')
    modalHeader.classList.add('modal-header');

    const modalTitle = document.createElement('div');
    modalTitle.classList.add('modal-title');

    const titleH3 = document.createElement('h3');
    titleH3.textContent = title;

    modalTitle.appendChild(titleH3);

    const modalControls = document.createElement('div');
    modalControls.classList.add('modal-controls');

    const button = document.createElement('button');
    button.classList.add('center');
    button.setAttribute('onclick', 'closeModal()');

    const i = document.createElement('i');
    i.classList.add('fa-solid', 'fa-xmark');

    button.appendChild(i);
    modalControls.append(button);

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(modalControls);

    return modalHeader;
});

const createModalBody = ((content) => {
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    const modalForm = document.createElement('div');
    modalForm.classList.add('modal-form');

    for (const inputArray of content) {
        const formLine = document.createElement('div');
        formLine.classList.add('form-line');

        inputArray.forEach((inputParams) => {
            const inputBox = document.createElement('div');
            inputBox.classList.add('input-box');

            const { label: labelText, field, type, required, disabled, value } = inputParams;

            if (labelText) {
                const label = document.createElement('label');
                label.textContent = `${labelText}: `;
                label.setAttribute('for', field);
                inputBox.appendChild(label);
            }

            if (type === 'select') {
                const { selectOptions } = inputParams;

                const select = document.createElement('select');
                selectOptions.forEach((selectOption) => {
                    const { value, text } = selectOption;
                    const option = document.createElement('option');
                    option.setAttribute('value', value);
                    option.textContent = text;

                    select.appendChild(option);
                });

                select.setAttribute('name', field);
                select.setAttribute('id', field);
                if (required) select.setAttribute('required', '');
                if (disabled) select.setAttribute('disabled', '');

                inputBox.appendChild(select);
            } else {
                const input = document.createElement('input');
                
                input.setAttribute('type', type);
                input.setAttribute('name', field);
                input.setAttribute('id', field);
                if (required) input.setAttribute('required', '');
                if (disabled) input.setAttribute('disabled', '');
                if (value) input.setAttribute('value', value);

                inputBox.appendChild(input);
            }

            formLine.appendChild(inputBox);
        });

        modalForm.appendChild(formLine);
    }

    modalBody.appendChild(modalForm);

    return modalBody;
});

const createModalFooter = ((saveFunction) => {
    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');

    const modalButtons = document.createElement('div');
    modalButtons.classList.add('modal-buttons');

    const buttonSave = document.createElement('button');
    buttonSave.textContent = 'Save';
    buttonSave.classList.add('save');
    buttonSave.setAttribute('onclick', saveFunction);

    const buttonCancel = document.createElement('button');
    buttonCancel.textContent = 'Cancel';
    buttonCancel.classList.add('cancel');
    buttonCancel.setAttribute('onclick', 'closeModal()');

    modalButtons.appendChild(buttonSave);
    modalButtons.appendChild(buttonCancel);

    modalFooter.appendChild(modalButtons);

    return modalFooter;
});

const createModal = ((modalParams) => {
    const modal = document.createElement('div');
    modal.classList.add('modal', 'show');

    const { title, content, saveFunction } = modalParams;

    const modalHeader = createModalHeader(title);
    modal.appendChild(modalHeader);

    const modalBody = createModalBody(content);
    modal.appendChild(modalBody);

    const modalFooter = createModalFooter(saveFunction);
    modal.appendChild(modalFooter);

    return modal;
});