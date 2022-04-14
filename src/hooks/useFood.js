import { useEffect, useState } from 'react'

const useFood = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch(
            'https://raw.githubusercontent.com/forhad-eng/red-onion-data/main/data.json?token=GHSAT0AAAAAABTDMAXFG6ZLOHEM6EEWSYJ4YSYVATA'
        )
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return [foods, setFoods]
}

export default useFood
