import React, { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import toast, { Toaster } from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../../Firebase/firebase.init'
import logo from '../../../images/logo2.png'
import '../../../Styles/Signup.css'
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner'

const Login = () => {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [pass, setPass] = useState({ value: '', error: '' })
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    if (user) {
        navigate(from, { replace: true })
    }

    const emailHandler = e => {
        if (/\S+@\S+\.\S+/.test(e.target.value)) {
            setEmail({ value: e.target.value, error: '' })
        } else {
            setEmail({ value: '', error: 'invalid email' })
        }
    }

    const passHandler = e => {
        if (e.target.value.length < 8) {
            setPass({ value: '', error: 'Password requires minimum 8 character' })
        } else {
            setPass({ value: e.target.value, error: '' })
        }
    }

    const loginHandler = e => {
        e.preventDefault()

        if (email.value === '' || pass.value === '') {
            toast.error('fill-out all the field', { id: 'loginErr' })
            return
        } else {
            signInWithEmailAndPassword(email.value, pass.value)
        }
    }

    return (
        <div>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <form
                    onSubmit={loginHandler}
                    className="sing-up w-2/3 md:w-1/3 mx-auto mb-24 md:mb-36 flex flex-col text-sm"
                >
                    <img src={logo} alt="" />
                    <input
                        onBlur={emailHandler}
                        className={`bg-gray-100 block mb-3 p-3 rounded outline-none ${email.error && 'mb-1'}`}
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    {email.error && <p className="text-red-600 mb-1">{email.error}</p>}
                    <input
                        onBlur={passHandler}
                        className={`bg-gray-100 block mb-3 p-3 rounded outline-none ${pass.error && 'mb-1'}`}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    {pass.error && <p className="text-red-600 mb-1">{pass.error}</p>}
                    {error && <p className="text-red-600 mb-1">{error.message}</p>}
                    <input
                        className="bg-red-500 text-white block mb-3 p-3 rounded outline-none"
                        type="submit"
                        value="Login"
                    />
                    <p>
                        New to red onion?
                        <Link to="/signup" className="ml-2 text-red-600">
                            Create an account
                        </Link>
                    </p>
                </form>
            )}
            <Toaster />
        </div>
    )
}

export default Login
