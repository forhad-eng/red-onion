import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/logo2.png'
import '../../../Styles/Signup.css'

const SignUp = () => {
    const [agree, setAgree] = useState(false)
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [pass, setPass] = useState({ value: '', error: '' })
    const [conPass, setConPass] = useState({ value: '', error: '' })

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
        } else if (e.target.value.length < 8) {
            setConPass({ value: '', error: 'Password requires minimum 8 character' })
        } else {
            setConPass({ value: e.target.value, error: '' })
        }
    }

    const signUpHandler = e => {
        e.preventDefault()

        console.log('button enabled')

        if (pass !== conPass) {
            return
        }
    }

    return (
        <div>
            <form
                onSubmit={signUpHandler}
                className="sing-up w-2/3 md:w-1/3 mx-auto mb-24 md:mb-36 flex flex-col text-sm"
            >
                <img src={logo} alt="" />
                <input
                    onBlur={nameHandler}
                    className="bg-gray-100 block mb-3 p-3 rounded outline-none"
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <input
                    onBlur={emailHandler}
                    className="bg-gray-100 block mb-3 p-3 rounded outline-none"
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <input
                    onBlur={passHandler}
                    className="bg-gray-100 block mb-3 p-3 rounded outline-none"
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <input
                    onBlur={conPassHandler}
                    className="bg-gray-100 block mb-5 p-3 rounded outline-none"
                    type="password"
                    name="confirm-password"
                    placeholder="Confirm Password"
                />
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
        </div>
    )
}

export default SignUp
