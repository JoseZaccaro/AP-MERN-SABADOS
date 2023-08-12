import React, { useEffect, useState } from 'react'

const Card = ({ episodeData }) => {
    const [pj, setPj] = useState({})
    useEffect(() => {
        fetch(episodeData.characters[episodeData.id])
            .then((res) => res.json())
            .then((res) => setPj(res))
            .catch((err) => console.log(err))
    }, [])

    console.log(pj);
    return (
        <div className='min-w-[20rem] cursor-pointer'>
            <div className={`w-full mb-2 h-[20vh] bg-cover`} style={{ backgroundImage: `url('${pj.image}')` }}>
                <div className='w-full h-full bg-[rgba(0,0,0,0.4)] flex items-end'>
                    <h1 className='text-4xl text-white'>{episodeData.id}</h1>
                </div>
            </div>
            <div className='w-full flex justify-between items-end mb-1'>
                <h2 className='font-medium text-lg'>{episodeData.name}</h2>
                <small className='font-medium text-md'> {(Math.random() * 100).toFixed(0)} min</small>
            </div>
            <div className='w-full flex h-fit text-justify leading-4'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur magnam consequatur eligendi natus voluptatem corrupti voluptatum omnis incidunt quos impedit, vero autem maxime. Libero velit corrupti, praesentium iusto alias iure?</p>
            </div>
        </div>
    )
}

export default Card