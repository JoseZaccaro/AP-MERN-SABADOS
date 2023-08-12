import React, { useEffect, useState } from 'react'
import CardPS from '../components/CardPS'

const Series = () => {
    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/peliculas')
            .then(res => res.json())
            .then(data => setPeliculas(data.peliculas))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='w-full min-h-screen flex gap-2 p-4'>
            {
                peliculas.map(peli => <CardPS key={peli.nombre} data={peli} />)
            }

        </div>
    )
}

export default Series