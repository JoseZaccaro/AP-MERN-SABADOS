import React, { useEffect, useRef, useState } from 'react'
import CardPS from '../components/CardPS'
import { BsSearchHeart } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import seriesAction from '../store/actions/seriesAction';

const Series = () => {

    const inputRef = useRef()
    const { ultimasSeries, series } = useSelector((store) => store.series)
    
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(seriesAction.obtenerSeries())
        // document.title = 'Series'
    }, [])

    console.log(ultimasSeries);

    function handleSearch(event) {
        const valor = inputRef.current.value
        // console.log(event.key);

        if (event?.key === "Enter" || event.type === 'click') {
            dispatch(seriesAction.filtrar(valor))
        } else if (valor === '') {
            dispatch(seriesAction.filtrar(valor))
        }
        if (event?.key === "Escape") {
            inputRef.current.value = ''
            dispatch(seriesAction.filtrar(''))
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