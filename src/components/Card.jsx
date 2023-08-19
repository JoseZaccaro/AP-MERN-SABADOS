import React, { useEffect, useState } from 'react'

const Card = ({ episodeData }) => {
    const [modal, setModal] = useState(false)
    useEffect(() => {
        document.body.style.overflow = modal ? 'hidden' : 'initial'
    }, [modal])

    // console.log(pj);
    return (
        <>
            <div className='min-w-[20rem] cursor-pointer' onClick={() => setModal(!modal)}>
                <div className={`w-full mb-2 h-[20vh] bg-cover`} style={{ backgroundImage: `url('${episodeData.coverImage}')` }}>
                    <div className='w-full h-full bg-[rgba(0,0,0,0.4)] flex items-end'>
                        <h1 className='text-4xl text-white'>{episodeData.chapter}</h1>
                    </div>
                </div>
                <div className='w-full flex justify-between items-end mb-1'>
                    <h2 className='font-medium text-lg'>{episodeData.name} - Season {episodeData.season}</h2>
                    <small className='font-medium text-md'> {episodeData.duration} min</small>
                </div>
                <div className='w-full flex h-fit text-justify leading-4'>
                    <p>{episodeData.description}</p>
                </div>
            </div>
            {
                modal && <div className='absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center'>
                    <img onClick={() => setModal(!modal)} className='cursor-pointer w-8 h-8 mt-4 mr-4 fixed top-4 right-4' src="https://static.vecteezy.com/system/resources/previews/021/815/794/original/cross-close-icon-free-png.png" alt="x" />
                    <iframe src={episodeData.url} width={1024} height={768}></iframe>
                </div>}
        </>
    )
}

export default Card