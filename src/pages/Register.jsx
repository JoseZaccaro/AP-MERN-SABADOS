import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../store/actions/favActions';
import { useNavigate } from 'react-router';

const Register = () => {
    const username = useRef()
    const password = useRef()
    const name = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleRegister = async () => {
        dispatch(register({
            username: username.current.value,
            password: password.current.value,
            name: name.current.value    
        }))
        navigate('/signin')
    }

    return (
        <div className='w-full flex justify-center items-center h-[80vh]'>
            <div className="form">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's create your account!</div>

                <div className="input-container ic1">
                    <input ref={username} placeholder="" type="text" className="input" id="firstname" />
                    <div className="cut"></div>
                    <label className="iLabel" htmlFor="firstname">Username</label>
                </div>

                <div className="input-container ic2">
                    <input ref={password} placeholder="" type="text" className="input" id="lastname" />
                    <div className="cut"></div>
                    <label className="iLabel" htmlFor="lastname">Password</label>
                </div>
                <div className="input-container ic2">
                    <input ref={name} placeholder="" type="text" className="input" id="email" />
                    <div className="cut cut-short"></div>
                    <label className="iLabel" htmlFor="email">Name</label>
                </div>
                <button className="submit" type="text" onClick={handleRegister}>Sign up</button>
            </div>
        </div>

    )
}

export default Register