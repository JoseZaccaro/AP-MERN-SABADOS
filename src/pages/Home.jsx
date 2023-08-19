import React, { useEffect, useState } from 'react';
import CardRM from '../components/CardRM';

const Home = () => {
  const [temporada, setTemporada] = useState('S01')
  const [episodes, setEpisodes] = useState([])

  const onHandleChange = (e) => {
    // Two way binding
    setTemporada(e.target.value)
  }
  // console.log(temporada);


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode?episode=${temporada}`)
      .then(res => res.json())
      .then(data => setEpisodes(data.results))

    // document.title = "Home"
  }, [temporada])


  return (
    <main>
      <div className='flex justify-between'>
        <img className='w-72' src="https://vectorlogo4u.com/wp-content/uploads/2020/11/Rick-and-Morty-Logo-Vector-01.png" alt="logo" />
        <img className='w-8 h-8 mt-4 mr-4' src="https://static.vecteezy.com/system/resources/previews/021/815/794/original/cross-close-icon-free-png.png" alt="x" />
      </div>
      <div>
        {/* <Dropdown> */}
        {/* <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Temporadas
          </Dropdown.Toggle> */}

        <select onChange={onHandleChange} value={temporada}>
          <option value={'S01'} >Temporada 1</option>
          <option value={'S02'} >Temporada 2</option>
          <option value={'S03'} >Temporada 3</option>
          <option value={'S04'} >Temporada 4</option>
          <option value={'S05'} >Temporada 5</option>
        </select>
        {/* </Dropdown> */}
      </div>
      <div className='w-100 text-white min-h-[35vh] p-4 flex gap-x-4 overflow-x-scroll'>
        {
          episodes.map(episode => <CardRM data={episode} key={episode.id} />)
        }

      </div>
    </main>
  )
}

export default Home