import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { signin } from '../store/actions/favActions';
import { useNavigate } from 'react-router';

const SignIn = () => {

    const username = useRef()
    const password = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSignIn = async () => {
        dispatch(signin({
            username: username.current.value,
            password: password.current.value,
        }))
        navigate('/')
    }

    return (
        <div className='w-full flex justify-center items-center h-[80vh]'>
            <div className="form">
                <div className="title">Welcome again</div>
                <div className="subtitle">Sign in!</div>

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
                <button className="submit" type="text" onClick={handleSignIn}>Sign in</button>
            </div>
        </div>

    )
}

export default SignIn