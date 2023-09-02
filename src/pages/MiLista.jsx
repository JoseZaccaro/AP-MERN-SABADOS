import React from 'react'
import CardPS from '../components/CardPS'
import { useSelector } from 'react-redux'

const MiLista = () => {
    const favoritos = useSelector(store => store.favReducer.favoritos)
    return (
        <div className='flex flex-col items-center'>
            <div className='w-full min-h-[50vh]  flex gap-2 p-4'>

                {
                    favoritos.map(favorito => <CardPS key={favorito.nombre} data={favorito} />)
                }

            </div>
        </div>
    )
}

export default MiLista