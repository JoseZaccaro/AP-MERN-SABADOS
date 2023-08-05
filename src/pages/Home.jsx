import React, { useEffect, useState } from 'react';

const Home = () => {
    const [guns, setGuns] = useState([])
    // Montado
    useEffect(() => {
        fetch('https://valorant-api.com/v1/weapons')
            .then((result) => result.json())
            .then(info => setGuns(info.data))
            .catch((err) => {
                console.log(err)
            });
        console.log('Me monte')

    }, [])

    // Actualizacion
    useEffect(() => {

    })

    // console.log(guns);

    useEffect(() => {
        console.log('Me actualice')
    }, [guns])


    // Demontado
    useEffect(() => {

        return () => {
            console.log('Me desmonte')
        }
    }, [])


    return (
        <div>
            {
                guns.map(gun => <img src={gun.displayIcon} key={gun.uuid} />)
            }
        </div>
    )
}

export default Home