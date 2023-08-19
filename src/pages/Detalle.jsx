import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './../components/Card';

const Detalle = () => {
    // const [temporada, setTemporada] = useState('S01')
    const [serie, setSerie] = useState({})
    const [capitulos, setCapitulos] = useState([])
    // const onHandleChange = (e) => {
    //     // Two way binding
    //     setTemporada(e.target.value)
    // }
    // console.log(temporada);
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3000/api/series/` + id)
            .then(res => res.json())
            .then(data => {
                setSerie(data.serie)
                setCapitulos(data.serie.capitulos)
            })

        // document.title = "Home"
    }, [])
    console.log(serie);
    return (
        <main>
            {/* <div className='flex justify-between'>
                <img className='w-72' src="https://vectorlogo4u.com/wp-content/uploads/2020/11/Rick-and-Morty-Logo-Vector-01.png" alt="logo" />
                <img className='w-8 h-8 mt-4 mr-4' src="https://static.vecteezy.com/system/resources/previews/021/815/794/original/cross-close-icon-free-png.png" alt="x" />
            </div> */}
            <div>

            </div>
            <div className='w-100 text-white min-h-[35vh] p-4 flex gap-x-4'>
                {/* {
                    episodes.map(episode => <Card data={episode} key={episode.id} />)
                } */}
                <Card data={serie} />

            </div>
            <div className='w-100 text-white min-h-[35vh] p-4 flex gap-x-4 overflow-x-scroll'>
                {
                    capitulos.map(episode => <Card data={episode} key={episode.id} />)
                }

            </div>
        </main>
    )
}

export default Detalle