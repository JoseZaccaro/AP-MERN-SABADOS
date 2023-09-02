import React, { useEffect, useRef, useState } from 'react'
import CardSerie from '../components/CardSerie'
import { Form } from 'react-bootstrap';
import { FaSearchengin } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import filtroAction from '../store/actions/filtroAction';
// useSelector useDispatch
const Series = () => {

    const [generos, setGeneros] = useState([])
    const inputRef = useRef()
    const [checks, setChecks] = useState([])

    const dispatch = useDispatch()

    const { series, allSeries } = useSelector(store => store.filtro)

    console.log(series);
    useEffect(() => {
        // fetch('http://localhost:3000/api/series')
        //     .then(res => res.json())
        //     .then(data => {
        //         if (allSeries.length === 0) {
        //             dispatch(filtroAction.obtenerSeries(data.data))
        //         }
        //     })
        //     .catch(err => console.log(err))
        dispatch(filtroAction.obtenerSeries())
            .then(action => {
                // console.log(action)
                const data = action.payload
                const generosNoRepetidos = [...new Set(data.map(serie => serie.genre))]
                setGeneros(generosNoRepetidos)
            })
    }, [])



    function handleSearch(params) {
        console.log(params)
        console.log(inputRef.current.value);
        const value = inputRef.current.value.toLowerCase().trim()

        return value;

    }

    function handleGenres(params) {
        if (!params) {
            return checks
        }
        const value = params.target.value
        const { checked } = params.target
        const newChecks = []
        if (checked) {
            newChecks.push(...checks, value)
        } else {
            newChecks.push(...checks.filter(genero => genero !== value))
        }
        setChecks(newChecks)
        return newChecks
    }

    function crossFilter() {
        const inputValue = handleSearch()
        const checksChecked = handleGenres()
        // setSeries(filtered)
        dispatch(filtroAction.filtrar(
            { search: inputValue, checks: checksChecked }
        ))
    }

    return (
        <>
            <form className='flex w-full flex-col items-center gap-4 py-4' onSubmit={(e) => e.preventDefault()}>

                <label className='w-1/2 text-white flex gap-2 items-center'>
                    <FaSearchengin onClick={crossFilter} size={64} color='#D55' className='cursor-pointer' />
                    <input ref={inputRef} type="text" name='name' className='w-full bg-transparent border-b border-white outline-none px-2 pb-1' placeholder='Buscar...' />
                </label>
                <fieldset className='w-full px-4 flex gap-8'>
                    {
                        generos.map(genero => <Form.Check
                            onChange={handleGenres}
                            key={genero}
                            className='flex gap-3 items-center text-white'
                            type="switch"
                            value={genero}
                            name="genero"
                            label={genero}
                        />)
                    }
                </fieldset>


                {/* <label className='w-1/2 text-white flex gap-2 items-center'>
                    <input type="checkbox" name='genero' value={'valor x'} className='bg-transparent border-b border-white outline-none p-2' placeholder='Buscar...' />
                    valor X
                </label> */}
            </form>
            <div className='w-full h-screen flex gap-2 items-start'>


                {
                    series.map(serie => (
                        <CardSerie data={{ ...serie, to: '/detalle/' + serie.name.toLowerCase() }} key={serie._id} />
                    ))
                }

            </div>
        </>

    )
}

export default Series