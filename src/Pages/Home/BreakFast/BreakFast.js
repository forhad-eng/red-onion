import useFoods from '../../../hooks/useFood'
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner'
import Food from '../Food/Food'

const BreakFast = () => {
    const [foods] = useFoods()

    return (
        <>
            {foods.length === 0 ? (
                <LoadingSpinner />
            ) : (
                <div className="grid md:grid-cols-3 mb-10 px-14 gap-y-10 gap-x-16">
                    {foods.slice(0, 6).map(food => (
                        <Food key={food.id} food={food} />
                    ))}
                </div>
            )}
        </>
    )
}

export default BreakFast
