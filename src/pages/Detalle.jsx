import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from './../components/Card';
import { useDispatch } from 'react-redux';
import seriesAction from '../store/actions/seriesAction';

const Detalle = () => {
    // const [temporada, setTemporada] = useState('S01')
    const [serie, setSerie] = useState({})
    const [capitulos, setCapitulos] = useState([])
    const dispatch = useDispatch()

    const { ultimaSerieVista } = seriesAction

    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3000/api/series/` + id)
            .then(res => res.json())
            .then(data => {
                setSerie(data.serie)
                setCapitulos(data.serie.capitulos)
                dispatch(ultimaSerieVista(data.serie))

            })

        // document.title = "Home"
    }, [])

    // console.log(serie);

    return (
        <main>
            {/* <div className='flex justify-between'>
                <img className='w-72' src="https://vectorlogo4u.com/wp-content/uploads/2020/11/Rick-and-Morty-Logo-Vector-01.png" alt="logo" />
                <img className='w-8 h-8 mt-4 mr-4' src="https://static.vecteezy.com/system/resources/previews/021/815/794/original/cross-close-icon-free-png.png" alt="x" />
            </div> */}

            <div className='w-100 text-white min-h-[35vh] p-4 flex gap-x-4 flex-col'>


                <div className='w-full  h-[60vh] bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url("${serie.imagen_portada || serie.imagen_detalle}")` }}>
                    <div className='bg-[rgba(0,0,0,0.7)] w-full h-full flex justify-end flex-col rounded-lg'>
                        <div className='w-full flex flex-col p-10'>
                            <h2 className='text-6xl font-bold mb-10 text-red-600 uppercase underline-offset-8 underline'>{serie.nombre}</h2>
                            <p className='text-lg mb-2 text-gray-400'>{serie.genero && serie.genero[0]}</p>
                            <p className='text-xl w-96 text-[#ccc]'>{serie.descripcion}</p>
                        </div>
                    </div>
                </div>




            </div>
            <div className='w-100 text-white min-h-[35vh] p-4 flex gap-x-4 overflow-x-scroll'>
                {
                    capitulos.map(episode => <Card data={episode} key={episode._id} />)
                }

            </div>
        </main>
    )
}

export default Detalle