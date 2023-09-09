import React, { useState } from 'react'
import ReactLogo from '../assets/react.svg'
import Button from 'react-bootstrap/Button';
import Nav from '../components/Nav';
import { LINKSHOME, LINKSLOG } from '../utils/enums';
import LogInDropdown from './../components/LogInDropdown';
import { Outlet } from 'react-router-dom';


const MainLayout = ({ children }) => {
    const [menu, setMenu] = useState(false)
    const [login, setLogin] = useState(false)
    return (
        <div className='w-100 h-[10vh] bg-black relative'>
            <header className='w-100 h-100 d-flex justify-content-between align-items-center '>
                <div className='d-flex align-items-center h-1/2 overflow-hidden'>
                    <img src="/assets/images/M.jpg" alt="" className='w-32 cursor-pointer' onClick={() => setMenu((prev) => !prev)} />
                    <h1 className='hidden sm:block text-7xl translate-y-2 text-white uppercase -translate-x-8 font-[bebas-new]'> indflix </h1>

                    <Nav className='sm:flex gap-4 text-white font-medium text-lg hidden' links={LINKSHOME} />
                    {
                        menu && (
                            <Nav className='sm:hidden absolute left-20 top-[7.9rem] flex text-white font-medium text-lg flex-col gap-4 bg-black p-4 border border-gray-400 rounded-md' links={LINKSHOME} />
                        )
                    }
                </div>
                {/* <Button onClick={() => setMenu((prev) => !prev)} variant="primary" className='sm:hidden -translate-x-20 flex text-white font-medium text-lg flex-col gap-4 bg-black'>
                    {
                        !menu ?
                            "Ⓜ️"
                            : "❌"
                    }
                </Button> */}
                <LogInDropdown setLogin={setLogin} login={login} />
                {
                    login && (
                        <Nav className='sm:hidden absolute right-0 top-24 flex text-white font-medium text-lg flex-col gap-4 bg-black p-4 border border-gray-400 rounded-md' links={LINKSLOG} />
                    )
                }
            </header>

            <div className='bg-[#0D1117] min-h-[90vh] w-100'>
                {/* {
                    children
                } */}
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout