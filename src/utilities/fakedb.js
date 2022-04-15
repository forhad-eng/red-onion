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

const removeItem = productID => {
    let storedCart = JSON.parse(localStorage.getItem('onion-cart'))
    if (productID in storedCart) {
        delete storedCart[productID]
        localStorage.setItem('onion-cart', JSON.stringify(storedCart))
    }
}

export { addToCart, getCart, removeItem }
