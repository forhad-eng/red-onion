import { useEffect, useState } from 'react'
import { getCart } from '../utilities/fakedb'

const useCart = foods => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const newCart = []
        const storedCart = getCart()
        for (const id in storedCart) {
            const food = foods.find(item => item.id === +id)
            if (food) {
                food.quantity = storedCart[id]
                newCart.push(food)
            }
        }
        setCart(newCart)
    }, [foods])

    return { cart, setCart }
}

export default useCart
