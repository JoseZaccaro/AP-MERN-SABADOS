import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useNavigate, useParams } from 'react-router'

const DetalleMovie = () => {
    // const [temporada, setTemporada] = useState(1)
    // const [episodes, setEpisodes] = useState([])
    const [movie, setMovie] = useState({})
    const navigate = useNavigate()
    const { name } = useParams()

    // const onHandleChange = (e) => {
    //     // Two way binding
    //     // console.log(e.target)
    //     setTemporada(e.target.value)
    // }

    // useEffect(() => {
    //     if (movie._id) {
    //         fetch('http://localhost:3000/api/series/chapters/' + movie._id + '?season=' + temporada)
    //             .then(res => res.json())
    //             .then(info => setEpisodes(info.data))
    //             .catch(err => console.error(err))
    //     }

    // }, [movie, temporada])

    useEffect(() => {
        fetch('http://localhost:3000/api/movies/' + name)
            .then(res => res.json())
            .then(info => {
                setMovie(info.data)
                // setEpisodes(info.data.chapters)
            })
            .catch(err => console.error(err))

    }, [])

    // console.log(episodes);
    console.log(movie)
    // console.log(Array(serie.seasons).fill('-'));

    return (
        <div className={`w-100 text-white min-h-[75vh] p-4 flex gap-x-4 flex-col`}>


            <div className={`w-full h-[85vh] relative bg-contain bg-no-repeat bg-center`} style={{ backgroundImage: `url("${movie.detailImage || movie.coverImage}")` }}>
                <div className='bg-[rgba(0,0,0,0.7)] w-full h-full flex justify-end flex-col rounded-lg'>
                    <div className={`w-full flex flex-col p-10 absolute top-4 left-4 h-full justify-between`}>
                        <h2 className='text-6xl font-bold mb-10 text-red-600 uppercase underline-offset-8 underline'>{movie.nombre}</h2>
                        <div className={`w-full flex flex-col`}>
                            <p className='text-lg mb-2 text-gray-400'>{movie.genre}</p>
                            <p className='text-xl w-96 text-[#ccc]'>{movie.description}</p>
                        </div>
                    </div>
                </div>
                <div className={`w-full h-full absolute top-0 left-0 flex justify-center items-center `}>
                    <a href={movie?.url} target="_blank" rel="noopener noreferrer" className='z-10' draggable={false}>
                        <img src="https://icon-library.com/images/video-playback-icon/video-playback-icon-12.jpg" alt="play" className='w-[200px] h-[200px]' draggable={false} />
                    </a>
                </div>
            </div>

            <div className='w-100 min-h-[50vh] flex-1 items-center p-4 text-white flex gap-4 overflow-x-scroll ' >

            </div>
        </div>
    )

}

export default DetalleMovie