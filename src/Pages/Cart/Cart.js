import React, { useContext } from 'react'
import { CartContext } from '../../App'
import CartItem from './CartItem'

const Cart = () => {
    const { cart } = useContext(CartContext)

    let subTotal = 0
    for (const food of cart) {
        subTotal += food.price * food.quantity
    }

    return (
        <div className="grid md:grid-cols-2 gap-10 md:px-28 md:pb-28 pt-14 mx-auto">
            <div className="text-sm flex flex-col items-center md:items-start">
                <p className="border-b-2 border-gray-300 mb-6 w-2/3 text-xl pb-2">Edit Delivery Details</p>
                <input
                    className="bg-gray-100 block mb-3 p-2 w-2/3 rounded outline-none"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                />
                <input
                    className="bg-gray-100 block mb-3 p-2 w-2/3 rounded outline-none"
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                />
                <input
                    className="bg-gray-100 block mb-3 p-2 w-2/3 rounded outline-none"
                    type="text"
                    name="address"
                    placeholder="Your Address"
                />
                <input
                    className="bg-gray-100 block mb-3 p-2 w-2/3 rounded outline-none"
                    type="text"
                    name="flat"
                    placeholder="Your Flat/Floor No"
                />
                <input
                    className="bg-gray-100 block mb-3 p-3 w-2/3 rounded outline-none"
                    type="text"
                    name="instruction"
                    placeholder="Add Instruction For Delivery Man"
                />
                <button className="text-sm text-white outline-none bg-red-500 w-2/3 px-5 py-1 md:py-3 rounded">
                    Save &amp; Continue
                </button>
            </div>

            {cart.length === 0 ? (
                <p className="h-fit text-center text-xl pb-2 border-b-2 border-gray-300 mx-24 md:mx-32">
                    Cart is Empty😕
                </p>
            ) : (
                <div>
                    <p className="text-center text-xl pb-2 border-b-2 border-gray-300 mx-24 md:mx-32 mb-5">
                        Review your cart
                    </p>
                    <div className="grid grid-cols-1 gap-3 px-10 mx-auto">
                        {cart.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    <div className="px-14 py-10 mx-auto flex justify-between leading-7 text-sm font-semibold">
                        <div>
                            <p>SubTotal • {cart.length} items </p>
                            <p>Tax </p>
                            <p>Delivery fee</p>
                            <p>Total</p>
                        </div>
                        <div className="text-[15px]">
                            <p>${subTotal.toFixed(2)}</p>
                            <p>${(subTotal * 0.15).toFixed(2)}</p>
                            <p>free</p>
                            <p>${(subTotal + subTotal * 0.15).toFixed(2)}</p>
                        </div>
                    </div>
                    <button className="text-sm text-white outline-none bg-red-500 w-2/3 block mx-auto px-10 py-1 md:py-3 rounded">
                        Place Order
                    </button>
                </div>
            )}
        </div>
    )
}

export default Cart
