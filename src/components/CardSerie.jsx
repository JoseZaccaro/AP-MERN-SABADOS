import React from 'react'
import { Link } from 'react-router-dom'

const CardSerie = ({ data }) => {
    return (
        <Link to={data.to}>
            <div key={data.name} className='w-[15rem] h-[30rem] flex p-1 items-start bg-cover bg-center' style={{ backgroundImage: `url("${data.coverImage}")` }}>
                <img src="./assets/images/M.png" alt="M" className='w-16 h-16' />
            </div>
        </Link>
    )
}

export default CardSerie