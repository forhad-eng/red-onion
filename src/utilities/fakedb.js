const addToCart = (productID, quantity) => {
    let storedCart = {}
    const cart = localStorage.getItem('onion-cart')
    if (cart) {
        storedCart = JSON.parse(cart)
        storedCart[productID] = quantity
    } else {
        storedCart[productID] = quantity
    }
    localStorage.setItem('onion-cart', JSON.stringify(storedCart))
}

const getCart = () => {
    let storedCart = {}
    const cart = localStorage.getItem('onion-cart')
    if (cart) {
        storedCart = JSON.parse(cart)
    }
    return storedCart
}

export { addToCart, getCart }
