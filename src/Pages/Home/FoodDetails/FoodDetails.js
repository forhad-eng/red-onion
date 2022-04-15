import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../../App'
import useFood from '../../../hooks/useFood'
import { addToCart } from '../../../utilities/fakedb'
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner'

const FoodDetails = () => {
    const [quantity, setQuantity] = useState(1)
    const [foods] = useFood()
    const { id } = useParams()
    const { cart, setCart } = useContext(CartContext)
    const rest = cart.filter(item => item.id !== +id)
    let selected = foods.find(food => food.id === +id)

    // useEffect(() => {
    //     if (selected) {
    //         selected.quantity = increase
    //         const rest = cart.filter(item => item.id !== +id)
    //         addToCart(selected?.id, increase)
    //         setCart([...rest, selected])
    //     }
    // }, [increase])

    const addToCartHandler = () => {
        let targetItem = {}
        targetItem = cart.find(item => item.id === +id)
        if (targetItem) {
            targetItem.quantity += quantity
            addToCart(targetItem.id, targetItem.quantity)
            setCart([...rest, targetItem])
        } else {
            selected.quantity = quantity
            addToCart(selected?.id, quantity)
            setCart([...rest, selected])
        }
    }

    return (
        <>
            {foods.length === 0 ? (
                <LoadingSpinner />
            ) : (
                <div className="grid md:grid-cols-2 items-center px-10 md:px-24">
                    <div className="leading-10 mx-auto">
                        <p className="text-3xl font-semibold tracking-wide">{selected?.name}</p>
                        <p>{selected?.description}</p>
                        <div className="flex items-center gap-5 mb-3">
                            <p className="text-4xl inline-block">${selected?.price * quantity}</p>{' '}
                            <span className="shadow-lg rounded-full border-[1px] px-6">
                                <button
                                    className="outline-none mr-2"
                                    onClick={() => {
                                        quantity > 1 && setQuantity(quantity - 1)
                                    }}
                                >
                                    -
                                </button>
                                {quantity}
                                <button className="outline-none ml-2" onClick={() => setQuantity(quantity + 1)}>
                                    +
                                </button>
                            </span>
                        </div>
                        <button
                            onClick={addToCartHandler}
                            className="text-sm text-white outline-none bg-red-500 px-5 py-2 block rounded-full mb-5"
                        >
                            🛒<span className="ml-2">Add</span>
                        </button>
                    </div>
                    <img className="w-9/12 mx-auto" src={selected?.img} alt="" />
                </div>
            )}
        </>
    )
}

export default FoodDetails
