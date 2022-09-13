const localstorage = () => {
    const getId = document.getElementById('storage-id');
    const id = getId.value;
    const getValue = document.getElementById('storage-value');
    const value = getValue.value;
    if (id && value) {
        localStorage.setItem(id, value);
    }
    getId.value = '';
    getValue.value = '';

}