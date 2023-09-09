import React, { useEffect, useRef, useState } from 'react'
import CardSerie from '../components/CardSerie'
import { Form } from 'react-bootstrap';
import { FaSearchengin } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import filtroAction from '../store/actions/filtroAction';
// useSelector useDispatch
const MyList = () => {

    const favs = useSelector(store => store.favs.favorites)
    // useEffect(() => {

    // }, [])
    return (
        <>
            <div className='w-full h-screen flex gap-2 items-start'>


                {
                    favs?.map(serie => (
                        <CardSerie data={{ ...serie, to: '/detalle/' + serie.name.toLowerCase() }} key={serie._id} />
                    ))
                }

            </div>
        </>

    )
}

export default MyList