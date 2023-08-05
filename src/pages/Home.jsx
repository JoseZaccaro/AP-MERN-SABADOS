import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Card from '../components/Card';

const Home = () => {
  const [temporada, setTemporada] = useState('Temporada 1')
  const [episodes, setEpisodes] = useState([])
  const onHandleChange = (e) => {
    // Two way binding
    // console.log(e.target)
    setTemporada(e.target.value)
  }

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode?page=1')
      .then(res => res.json())
      .then(info => setEpisodes(info.results))
      .catch(err => console.error(err))
    }, [])
    console.log(episodes);


  return (
    <>
      <div className='flex justify-between'>
        <img className='w-72' src="https://vectorlogo4u.com/wp-content/uploads/2020/11/Rick-and-Morty-Logo-Vector-01.png" alt="logo" />
        <img className='w-8 h-8 mt-4 mr-4' src="https://static.vecteezy.com/system/resources/previews/021/815/794/original/cross-close-icon-free-png.png" alt="x" />
      </div>
      <div>
        <select onChange={onHandleChange} value={temporada}>
          {/* <option value="" selected></option> */}
          <option value="Temporada 1">Temporada 1</option>
          <option value="Temporada 2">Temporada 2</option>
          <option value="Temporada 3">Temporada 3</option>
          <option value="Temporada 4">Temporada 4</option>
          <option value="Temporada 5">Temporada 5</option>
          <option value="Temporada 6">Temporada 6</option>
          <option value="Temporada 7">Temporada 7</option>
        </select>

      </div>
      <div className='w-100 min-h-[40vh] p-4 text-white flex gap-4 justify-around overflow-hidden'>
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
    </>
  )
}

export default Home