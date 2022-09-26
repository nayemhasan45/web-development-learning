const addItem = () => {
    const item = document.getElementById('key').value;
    const value = document.getElementById('value').value;
    setCart(item, value);
}

const setCart = (item, value) => {
    const shoppingCart = getStoredCart();
    shoppingCart[item] = value;
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

const getStoredCart = () => {
    const storedCart = localStorage.getItem('shoppingCart');
    let shoppingCart = {};
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
