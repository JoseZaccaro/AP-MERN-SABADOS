import React from 'react'
import { Link } from 'react-router-dom';

const CardPS = ({ data }) => {
    console.log(data);
    return (
        <Link to={'/detalle/' + data.nombre}>
            <div className={`w-[15rem] h-[30rem] bg-white bg-cover bg-center cursor-pointer`} style={{ backgroundImage: `url(${data.imagen_portada})` }}>
                <img src="./assets/images/M.png" alt="M" className='w-16 h-16' />
            </div>
        </Link>
    )
}

export default CardPS