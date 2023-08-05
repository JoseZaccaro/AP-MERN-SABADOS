import React from 'react'

const LogInDropdown = ({ login, setLogin }) => {
    const handleClick = () => {
        setLogin(!login)
    }
    return (
        <div onClick={handleClick} className='cursor-pointer sm:hidden absolute right-2 top-10 flex text-white font-medium text-lg flex-col gap-4 bg-black p-2 border border-gray-400 rounded-md'>
            <img src="https://www.computerhope.com/jargon/g/guest-user.png" alt="" className='w-8 h-8' />
        </div>
    )
}

export default LogInDropdown