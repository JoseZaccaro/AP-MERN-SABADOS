import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPS from '../components/CardPS'
import { BsSearchHeart } from 'react-icons/bs'
// import { useSelector } from 'react-redux';

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([])
  const [peliculasAux, setPeliculasAux] = useState([])
  const inputRef = useRef()
  const { ultimasPeliculas } = useSelector((store) => store.peliculas)

  useEffect(() => {
    fetch('http://localhost:3000/api/peliculas')
      .then(res => res.json())
      .then(data => {
        setPeliculas(data.peliculas)
        setPeliculasAux(data.peliculas)
      })
      .catch(err => console.log(err))

    // document.title = 'Peliculas'
  }, [])

  function handleSearch(event) {
    const valor = inputRef.current.value.toLowerCase().trim()
    // console.log(event.key);
    if (event?.key === "Enter" || event.type === 'click') {

      const filtro = (pelicula) => pelicula.nombre.toLowerCase().trim().startsWith(valor)

      const peliculasFiltradas = peliculasAux.filter(filtro)

      setPeliculas(peliculasFiltradas)
    } else if (valor === '') {
      setPeliculas(peliculasAux)
    }
    if (event?.key === "Escape") {
      inputRef.current.value = ''
      setPeliculas(peliculasAux)

    }
  }



  return (
    <div className='flex flex-col items-center'>
      <label className='flex items-center gap-x-4 w-[25%]'>
        <BsSearchHeart color='#ddd' size={32} className='cursor-pointer' onClick={handleSearch} />
        <input onKeyUp={handleSearch} ref={inputRef} type="text" className='flex-1 outline-none p-2 my-4 bg-transparent text-white border-b border-white' placeholder='Buscar...' />
      </label>
      <div className='w-full min-h-[50vh]  flex gap-2 p-4'>

        {
          peliculas.map(peli => <CardPS key={peli.nombre} data={peli} />)
        }

      </div>
      <h2 className='text-white text-2xl'>Ultimo visto</h2>
      <div className='w-full min-h-[50vh] flex gap-2 p-4'>

        {
          ultimasPeliculas?.map(peli => <CardPS data={peli} key={peli._id} />)
        }

      </div>
    </div>
  )
}

export default Peliculas