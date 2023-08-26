import React, { useEffect, useRef, useState } from 'react'
import CardPS from '../components/CardPS'
import { BsSearchHeart } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Series = () => {
    const [series, setSeries] = useState([])
    const [seriesAux, setSeriesAux] = useState([])
    const inputRef = useRef()
    const { ultimasSeries } = useSelector((store) => store.series)

    useEffect(() => {
        fetch('http://localhost:3000/api/series')
            .then(res => res.json())
            .then(data => {
                setSeries(data.series)
                setSeriesAux(data.series)
            })
            .catch(err => console.log(err))

        // document.title = 'Series'
    }, [])

    function handleSearch(event) {
        const valor = inputRef.current.value.toLowerCase().trim()
        // console.log(event.key);
        if (event?.key === "Enter" || event.type === 'click') {

            const filtro = (serie) => serie.nombre.toLowerCase().trim().startsWith(valor)

            const seriesFiltradas = seriesAux.filter(filtro)

            setSeries(seriesFiltradas)
        } else if (valor === '') {
            setSeries(seriesAux)
        }
        if (event?.key === "Escape") {
            inputRef.current.value = ''
            setSeries(seriesAux)

        }
    }



    return (
        <div className='flex flex-col items-center'>
            <label className='flex items-center gap-x-4 w-[25%]'>
                <BsSearchHeart color='#ddd' size={32} className='cursor-pointer' onClick={handleSearch} />
                <input onKeyUp={handleSearch} ref={inputRef} type="text" className='flex-1 outline-none p-2 my-4 bg-transparent text-white border-b border-white' placeholder='Buscar...' />
            </label>
            <div className='w-full min-h-[50vh]  flex gap-2 p-4'>

                {
                    series.map(peli => <CardPS key={peli.nombre} data={peli} />)
                }

            </div>
            <h2 className='text-white text-2xl'>Ultimo visto</h2>
            <div className='w-full min-h-[50vh] flex gap-2 p-4'>

                {
                    ultimasSeries.map(peli => <CardPS data={peli} key={peli._id} />)
                }

            </div>
        </div>
    )
}

export default Series