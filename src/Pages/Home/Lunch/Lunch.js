import React from 'react'
import useFoods from '../../../hooks/useFood'
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner'
import Food from '../Food/Food'

const Lunch = () => {
    const [foods] = useFoods()
    return (
        <>
            {foods.length === 0 ? (
                <LoadingSpinner />
            ) : (
                <div className="grid md:grid-cols-3 mb-10 px-14 gap-y-10 gap-x-16">
                    {foods.slice(6, 12).map(food => (
                        <Food key={food.id} food={food} />
                    ))}
                </div>
            )}
        </>
    )
}

export default Lunch
