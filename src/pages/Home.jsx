import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const Home = () => {
  const [temporada, setTemporada] = useState('Temporada 1')
  const onHandleChange = (e) => {
    // Two way binding
    setTemporada(e.target.value)
  }

  return (
    <main>
      <div className='flex justify-between'>
        <img className='w-72' src="https://vectorlogo4u.com/wp-content/uploads/2020/11/Rick-and-Morty-Logo-Vector-01.png" alt="logo" />
        <img className='w-8 h-8 mt-4 mr-4' src="https://static.vecteezy.com/system/resources/previews/021/815/794/original/cross-close-icon-free-png.png" alt="x" />
      </div>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            Temporadas
          </Dropdown.Toggle>

          <Dropdown.Menu as={'select'} onChange={onHandleChange} value={temporada}>
            <Dropdown.Item as={'option'} value={'Temporada 1'} >Temporada 1</Dropdown.Item>
            <Dropdown.Item as={'option'} value={'Temporada 2'} >Temporada 2</Dropdown.Item>
            <Dropdown.Item as={'option'} value={'Temporada 3'} >Temporada 3</Dropdown.Item>
            <Dropdown.Item as={'option'} value={'Temporada 4'} >Temporada 4</Dropdown.Item>
            <Dropdown.Item as={'option'} value={'Temporada 5'} >Temporada 5</Dropdown.Item>
            <Dropdown.Item as={'option'} value={'Temporada 6'} >Temporada 6</Dropdown.Item>
            <Dropdown.Item as={'option'} value={'Temporada 7'} >Temporada 7</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className='w-100 bg-red-300 h-[25vh]'>
        <div className='w-64 flex h-2/3 bg-[url("https://rickandmortyapi.com/api/character/avatar/1.jpeg")] items-start'>
          <h1 className='text-4xl text-white'>1</h1>
        </div>
        <div className='w-64 flex'>
          <h2>Capitulo 1</h2>
          <small> 50 min</small>
        </div>
        <div className='w-64 flex h-fit'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur magnam consequatur eligendi natus voluptatem corrupti voluptatum omnis incidunt quos impedit, vero autem maxime. Libero velit corrupti, praesentium iusto alias iure?</p>
        </div>
      </div>
    </main>
  )
}

export default Home