import React, { useState } from 'react'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import toast, { Toaster } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../../Firebase/firebase.init'
import logo from '../../../images/logo2.png'
import '../../../Styles/Signup.css'
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner'

const SignUp = () => {
    const [agree, setAgree] = useState(false)
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [pass, setPass] = useState({ value: '', error: '' })
    const [conPass, setConPass] = useState({ value: '', error: '' })
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true
    })
    const [updateProfile] = useUpdateProfile(auth)
    const navigate = useNavigate()

    if (user) {
        navigate('/')
    }

    const nameHandler = e => {
        if (e.target.value === '') {
            setName({ value: '', error: 'Name field can not be empty' })
        } else {
            setName({ value: e.target.value, error: '' })
        }
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

    const conPassHandler = e => {
        if (e.target.value !== pass.value) {
            setConPass({ value: '', error: "Password doesn't match" })
        } else {
            setConPass({ value: e.target.value, error: '' })
        }
    }

    const signUpHandler = async e => {
        e.preventDefault()

        if (pass.value !== conPass.value) {
            return
        }

        if (email.value === '' || name.value === '' || pass.value === '' || conPass.value === '') {
            toast.error('Please fill-out all the field')
            return
        } else {
            await createUserWithEmailAndPassword(email.value, pass.value)
            await updateProfile({ displayName: name.value })
        }
    }

    return (
        <div>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <form
                    onSubmit={signUpHandler}
                    className="sing-up w-2/3 md:w-1/3 mx-auto mb-24 md:mb-36 flex flex-col text-sm"
                >
                    <img src={logo} alt="" />
                    <input
                        onBlur={nameHandler}
                        className={`bg-gray-100 block mb-3 p-3 rounded outline-none ${name.error && 'mb-1'}`}
                        type="text"
                        name="name"
                        placeholder="Name"
                    />
                    {name.error && <p className="text-red-600 mb-1">{name.error}</p>}
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
                    <input
                        onBlur={conPassHandler}
                        className={`bg-gray-100 block mb-5 p-3 rounded outline-none ${conPass.error && 'mb-1'}`}
                        type="password"
                        name="confirm-password"
                        placeholder="Confirm Password"
                    />
                    {conPass.error && <p className="text-red-600 mb-1">{conPass.error}</p>}
                    {error && <p className="text-red-600 mb-1">{error.message}</p>}
                    <div className="mb-2">
                        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">
                            Agree Terms &amp; Conditions
                        </label>
                    </div>
                    <input
                        disabled={!agree}
                        className={`bg-red-500 text-white block mb-3 p-3 rounded outline-none ${agree || 'bg-red-400'}`}
                        type="submit"
                        value="Sign up"
                    />
                    <p>
                        Already have an account?
                        <Link to="/login" className="ml-2 text-red-600">
                            Login
                        </Link>
                    </p>
                </form>
            )}
            <Toaster />
        </div>
    )
}

export default SignUp
