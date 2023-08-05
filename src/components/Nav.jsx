import React from 'react'
import Imagen from '../assets/react.svg'
import Anchor from './Anchor';

// const arrayDeImagenes = [
// './assets/images/M.jpg',
// './assets/react2.svg',
// './assets/react3.svg',
// ]

const Nav = ({links}) => {
    
    return (
        <div className='w-full h-16 flex justify-between bg-black px-4'>
            <img className='h-16' src='./assets/images/M.jpg' alt="logo" />
            <nav className='flex gap-4 h-full items-center'>

                {
                    links.map(link => <Anchor text={link.text} key={link.id} href={link.href} className={link.color} />)
                }

            </nav>
        </div>
    )
}

export default Nav