import { TrashIcon } from '@heroicons/react/solid'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../App'
import '../../Styles/CartItem.css'
import { addToCart, removeItem } from '../../utilities/fakedb'

const CartItem = ({ item }) => {
    const { name, img, price, quantity, id } = item
    const [updateQuantity, setUpdateQuantity] = useState({ value: quantity, id: '' })
    const productId = updateQuantity.id

    const { cart, setCart } = useContext(CartContext)

    useEffect(() => {
        const newCart = [...cart]
        const targetItem = cart.find(item => item.id === productId)
        const indexNo = cart.indexOf(targetItem)
        if (targetItem) {
            targetItem.quantity = updateQuantity.value
            newCart[indexNo] = targetItem
            setCart(newCart)
            addToCart(targetItem.id, targetItem.quantity)
        }
    }, [updateQuantity])

    const itemRemoveHandler = productID => {
        const rest = cart.filter(item => item.id !== productID)
        setCart(rest)
        removeItem(productID)
    }

    return (
        <div className="grid md:grid-cols-2 gap-5 md:gap-0 px-6 p-3 bg-gray-100 rounded-2xl">
            <div className="cart-item flex justify-around">
                <img height={'30'} src={img} alt="" />
                <div>
                    <p className="text-sm font-semibold">{name.slice(0, 13)}</p>
                    <p className="text-lg text-red-600 font-bold">${price}</p>
                    <p className="text-sm text-gray-500">Delivery free</p>
                </div>
            </div>
            <div className="md:ml-auto flex justify-center items-center gap-6 md:gap-4">
                <button
                    className="outline-none mr-1 text-2xl"
                    onClick={() => {
                        quantity > 1 && setUpdateQuantity({ value: updateQuantity.value - 1, id: id })
                    }}
                >
                    -
                </button>
                <p className="bg-white p-2 rounded-lg text-sm font-semibold">{updateQuantity.value}</p>
                <button
                    className="outline-none ml-1 text-2xl"
                    onClick={() => setUpdateQuantity({ value: updateQuantity.value + 1, id: id })}
                >
                    +
                </button>
                <button onClick={() => itemRemoveHandler(id)} className="bg-red-300 p-2 rounded-full outline-none">
                    <TrashIcon className="h-5 w-5 text-red-600" />
                </button>
            </div>
        </div>
    )
}

export default CartItem
