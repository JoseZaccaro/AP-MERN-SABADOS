import React, { useEffect, useState } from 'react'
import CardSerie from '../components/CardSerie'

const Series = () => {
    const [series, setSeries] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/series')
            .then(res => res.json())
            .then(data => setSeries(data.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='w-full h-screen flex gap-2 items-start'>
            {
                series.map(serie => (
                    <CardSerie data={serie} key={serie.name} />
                ))
            }

        </div>
    )
}

export default Series