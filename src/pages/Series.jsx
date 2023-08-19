import React, { useEffect, useState } from 'react'
import CardPS from '../components/CardPS'

const Series = () => {
    const [series, setSeries] = useState([])


    useEffect(() => {
        fetch('http://localhost:3000/api/series')
            .then(res => res.json())
            .then(data => {
                setSeries(data.series)
                // setCapitulos
            })
            .catch(err => console.log(err))

        // document.title = 'Series'
    }, [])

    return (
        <div className='w-full min-h-screen flex gap-2 p-4'>
            {
                series.map(peli => <CardPS key={peli.nombre} data={peli} />)
            }

        </div>
    )
}

export default Series