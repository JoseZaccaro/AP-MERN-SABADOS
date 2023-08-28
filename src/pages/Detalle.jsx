import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from './../components/Card';
import { useDispatch } from 'react-redux';
import seriesAction from '../store/actions/seriesAction';
import peliculasAction from '../store/actions/peliculasAction';


const Detalle = () => {
    // const [temporada, setTemporada] = useState('S01')
    const [stream, setStream] = useState({})
    const [capitulos, setCapitulos] = useState([])
    const dispatch = useDispatch()

    const { ultimaSerieVista } = seriesAction
    const { ultimaPeliculaVista } = peliculasAction

    const { id, seccion } = useParams()
    const isSerie = seccion === 'series'

    useEffect(() => {
        fetch(`http://localhost:3000/api/${seccion}/${id}`)
            .then(res => res.json())
            .then(data => {
                if (isSerie) {
                    setStream(data.serie)
                    setCapitulos(data.serie.capitulos)
                    dispatch(ultimaSerieVista(data.serie))
                } else {
                    setStream(data.pelicula)
                    dispatch(ultimaPeliculaVista(data.pelicula))
                }
            })

        // document.title = "Home"
    }, [])

    // console.log(serie);
    return (
        <main>
            <div className={`w-100 text-white ${isSerie ? 'min-h-[35vh]' : 'min-h-[75vh]'} p-4 flex gap-x-4 flex-col`}>


                <div className={`w-full  ${isSerie ? 'h-[60vh]' : 'h-[85vh] relative'}  bg-contain bg-no-repeat bg-center`} style={{ backgroundImage: `url("${stream.imagen_detalle || stream.imagen_portada}")` }}>
                    <div className='bg-[rgba(0,0,0,0.7)] w-full h-full flex justify-end flex-col rounded-lg'>
                        {
                            !isSerie &&
                            <div className={`w-full h-full absolute top-0 left-0 flex justify-center items-center `}>
                                <a href={stream?.video_url} target="_blank" rel="noopener noreferrer" className='z-10' draggable={false}>
                                    <img src="https://icon-library.com/images/video-playback-icon/video-playback-icon-12.jpg" alt="play" className='w-[200px] h-[200px]' draggable={false}/>
                                </a>
                            </div>
                        }
                        <div className={`w-full flex flex-col  ${isSerie ? 'p-10' : 'p-10 absolute top-4 left-4 h-full justify-between'}`}>
                            <h2 className='text-6xl font-bold mb-10 text-red-600 uppercase underline-offset-8 underline'>{stream.nombre}</h2>
                            <div className={`w-full flex flex-col ${!isSerie && 'mb-16'}`}>
                                <p className='text-lg mb-2 text-gray-400'>{stream.genero && stream.genero[0]}</p>
                                <p className='text-xl w-96 text-[#ccc]'>{stream.descripcion}</p>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
            {
                isSerie &&
                <div className='w-100 text-white min-h-[35vh] p-4 flex gap-x-4 overflow-x-scroll'>
                    {
                        capitulos.map(episode => <Card data={episode} key={episode._id} />)
                    }

                </div>}
        </main>
    )
}

export default Detalle