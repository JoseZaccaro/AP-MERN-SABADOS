import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useNavigate, useParams } from 'react-router'

const Detalle = () => {
    const [temporada, setTemporada] = useState('S01')
    const [episodes, setEpisodes] = useState([])
    const [serie, setSerie] = useState({})
    const navigate = useNavigate()
    const { name } = useParams()

    const onHandleChange = (e) => {
        // Two way binding
        // console.log(e.target)
        setTemporada(e.target.value)
    }

    useEffect(() => {

        fetch('https://rickandmortyapi.com/api/episode?episode=' + temporada)
            .then(res => res.json())
            .then(info => setEpisodes(info.results))
            .catch(err => console.error(err))

    }, [temporada])

    useEffect(() => {

        fetch('http://localhost:3000/api/series/' + name)
            .then(res => res.json())
            .then(info => setSerie(info.data))
            .catch(err => console.error(err))
    }, [])

    console.log(name);


    return (
        <div className='bg-cover bg-top min-h-[85vh]' style={{ backgroundImage: `url("${serie.detailImage}")` }}>
            <div className='w-full min-h-[85vh] bg-gradient-to-b from-transparent to-black' >

                <div className='flex justify-between'>
                    <img className='w-28' src="/assets/images/M.png" alt="logo" />
                    <img onClick={() => navigate('/series')} className='cursor-pointer w-8 h-8 mt-4 mr-4' src="https://static.vecteezy.com/system/resources/previews/021/815/794/original/cross-close-icon-free-png.png" alt="x" />
                </div>

                <div className='w-full px-4'>
                    <select onChange={onHandleChange} value={temporada}>
                        <option value="S01">Temporada 1</option>
                        <option value="S02">Temporada 2</option>
                        <option value="S03">Temporada 3</option>
                        <option value="S04">Temporada 4</option>
                        <option value="S05">Temporada 5</option>

                    </select>
                </div>
                <div className='w-100 min-h-[50vh] flex-1 items-center p-4 text-white flex gap-4 overflow-x-scroll ' >
                    {
                        episodes.map((episode) => (
                            <Card key={episode.id} episodeData={episode} />
                        ))
                    }
                    {/* <Card />
        <Card />
        <Card />
    <Card /> */}
                </div>
            </div>
        </div>
    )

}

export default Detalle