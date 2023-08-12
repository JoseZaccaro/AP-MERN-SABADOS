import React from 'react'

const Card = ({ data }) => {
    return (
        <div>
            <div className='w-64  h-64 bg-cover  bg-center' style={{backgroundImage:`url("${data.imagen_portada}")`}}>
                <div className='bg-[rgba(0,0,0,0.3)] w-full h-full flex items-end' >
                    <h1 className='text-4xl text-white'>{data.id}</h1>
                </div>
            </div>
            <div className='w-64 flex justify-between items-end'>
                <h2 className='text-lg font-bold'>{data.nombre}</h2>
                <small className='text-md font-bold'> {data.anio}</small>
            </div>
            <div className='w-64 flex h-fit text-md text-justify leading-4'>
                {/* <p>{data?.genero[0]}</p> */}
                <p>{data.descripcion}</p>
            </div>
        </div>
    )
}

export default Card