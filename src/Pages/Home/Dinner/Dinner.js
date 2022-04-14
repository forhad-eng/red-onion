import React from 'react'
import useFoods from '../../../hooks/useFood'
import Food from '../Food/Food'

const Dinner = () => {
    const [foods] = useFoods()
    return (
        <div className="grid md:grid-cols-3 mb-10 px-14 gap-y-10 gap-x-16">
            {foods.slice(0, 6).map(food => (
                <Food key={food.id} food={food} />
            ))}
        </div>
    )
}

export default Dinner
