import React from 'react'

const Food = ({ food }) => {
    const { name, img, price, description } = food
    return (
        <div className="text-center p-5 hover:shadow-lg hover:border-[1px] hover:rounded-xl">
            <img className="w-1/2 mx-auto mb-4" src={img} alt="" />
            <p className="font-bold mb-1">{name}</p>
            <p className="text-gray-500 mb-1">{description}</p>
            <p className="text-lg font-bold">Price: ${price}</p>
        </div>
    )
}

export default Food
