import React from 'react'
import Nav from './../components/Nav';
import Footer from '../components/Footer';
import { LINKSNAVBAR } from '../utils/enum';

const MainLayout = ({ children }) => {
    // console.log(children);
    return (
        <div className='w-full min-h-screen flex flex-col'>
            <Nav links={LINKSNAVBAR} />
            <main className='w-full flex-1'>
                {
                    children
                }
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout