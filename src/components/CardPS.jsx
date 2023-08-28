import React from 'react'
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardPS = ({ data }) => {
    // console.log(data);
    if (!data) {
        return null
    }
    const isSerie = !!data.capitulos
    return (
        <Link to={isSerie ? '/series/detalle/' + data._id : '/peliculas/detalle/' + data._id}>
            <div className={`w-[15rem] h-[30rem] bg-white bg-cover bg-center cursor-pointer`} style={{ backgroundImage: `url(${data.imagen_portada || data.imagen_detalle})` }}>
                <img src="./assets/images/M.png" alt="M" className='w-16 h-16' />
            </div>
        </Link>
    )
}

export default CardPS