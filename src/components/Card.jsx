import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import seriesAction from '../store/actions/seriesAction'

const Card = ({ data }) => {
    const [modal, setModal] = useState(false)
    useEffect(() => {
        document.body.style.overflow = modal ? 'hidden' : 'initial'
    }, [modal])

    const handleView = () => {
        setModal(!modal)
    }

    return (
        <>
            <div onClick={handleView}>
                <div className='w-64  h-64 bg-cover  bg-center' style={{ backgroundImage: `url("${data.imagen_portada || data.imagen_detalle}")` }}>
                    <div className='bg-[rgba(0,0,0,0.3)] w-full h-full flex items-end' >
                        <h1 className='text-4xl text-white'>{data.id}</h1>
                    </div>
                </div>
                <div className='w-64 flex justify-between items-end'>
                    <h2 className='text-lg font-bold'>{data.nombre}</h2>
                    <small className='text-md font-bold'> {data.duracion && data.duracion + "min."}</small>
                </div>
                <div className='w-64 flex h-fit text-md text-justify leading-4'>
                    {/* <p>{data?.genero[0]}</p> */}
                    <p>{data.descripcion}</p>
                </div>
            </div>
            {
                modal && <div className='flex justify-center items-center absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.2)]'>
                    <img onClick={() => setModal(!modal)} className='w-8 h-8 mt-4 mr-4 fixed top-10 right-10' src="https://static.vecteezy.com/system/resources/previews/021/815/794/original/cross-close-icon-free-png.png" alt="x" />
                    <iframe
                        className=''
                        width="1024"
                        height="720"
                        src={data.url}
                        type="video/mp4"
                        autoPlay
                    ></iframe>

                </div>
            }
        </>
    )
}

export default Card