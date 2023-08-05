import React from 'react'
import Nav from './Nav';
import { LINKSNAVBAR } from '../utils/enum';


const Footer = () => {
    return (
        <div>
            <Nav links={LINKSNAVBAR} />
        </div>
    )
}

export default Footer