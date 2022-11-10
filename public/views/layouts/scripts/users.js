const createUser = (async () => {
    let userRequest = { name: null, email: null, cpf: null, birthdate: null };

    userRequest = getFormData(userRequest);

    if (!userRequest) return null;

    const createPromise = await axios.post('users', userRequest, axiosConfig).catch(err => err);

    if (createPromise.status === 201) document.location.reload();
});