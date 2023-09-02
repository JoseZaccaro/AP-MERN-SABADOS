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
    console.log(movie);
    // console.log(Array(serie.seasons).fill('-'));

    return (
        <div className='bg-cover bg-top min-h-[85vh]' style={{ backgroundImage: `url("${movie.detailImage}")` }}>
            <div className='w-full min-h-[85vh] bg-gradient-to-b from-transparent to-black' >

                <div className='flex justify-between'>
                    <div className='flex gap-4 items-center'>
                        <img className='w-28' src="/assets/images/M.png" alt="logo" />
                        <h2 className='text-white text-3xl font-medium'>{movie.name}</h2>
                    </div>
                    <img onClick={() => navigate('/movies')} className='cursor-pointer w-8 h-8 mt-4 mr-4' src="https://static.vecteezy.com/system/resources/previews/021/815/794/original/cross-close-icon-free-png.png" alt="x" />
                </div>

                <div className='w-full px-4'>
                    {/* <select onChange={onHandleChange} value={temporada}>
                        {
                            Array(movie.seasons).fill('-').map((number, index) =>
                                (<option value={index + 1} key={index}>Temporada {index + 1}</option>)
                            )
                        }

                    </select> */}
                </div>
                <div className='w-100 min-h-[50vh] flex-1 items-center p-4 text-white flex gap-4 overflow-x-scroll ' >
                    {/* {
                        episodes?.map((episode) => (
                            <Card key={episode.id} episodeData={episode} />
                        ))
                    } */}

                </div>
            </div>
        </div>
    )

}

export default DetalleMovie