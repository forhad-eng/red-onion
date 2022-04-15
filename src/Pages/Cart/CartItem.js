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
            addToCart(targetItem.id, targetItem.quantity)
            newCart[indexNo] = targetItem
            setCart(newCart)
        }
    }, [updateQuantity])

    const itemRemoveHandler = productID => {
        const rest = cart.filter(item => item.id !== productID)
        setCart(rest)
        removeItem(productID)
    }

    return (
        <div className="grid grid-cols-2 px-6 p-3 bg-gray-100 rounded-2xl">
            <div className="cart-item flex justify-around">
                <img height={'30'} src={img} alt="" />
                <div>
                    <p className="text-sm font-semibold">{name.slice(0, 13)}</p>
                    <p className="text-lg text-red-600 font-bold">${price}</p>
                    <p className="text-sm text-gray-500">Delivery free</p>
                </div>
            </div>
            <div className="ml-auto flex items-center gap-5">
                <button
                    className="outline-none mr-2 text-2xl"
                    onClick={() => {
                        quantity > 1 && setUpdateQuantity({ value: updateQuantity.value - 1, id: id })
                    }}
                >
                    -
                </button>
                <p>{updateQuantity.value}</p>
                <button
                    className="outline-none ml-2 text-2xl"
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
