import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/logo2.png'
import '../../../Styles/Signup.css'

const Login = () => {
    return (
        <div className="sing-up w-2/3 md:w-1/3 mx-auto mb-24 md:mb-36 flex flex-col text-sm">
            <img src={logo} alt="" />
            <input
                className="bg-gray-100 block mb-3 p-3 rounded outline-none"
                type="email"
                name="email"
                placeholder="Email"
            />
            <input
                className="bg-gray-100 block mb-5 p-3 rounded outline-none"
                type="password"
                name="password"
                placeholder="Password"
            />
            <input className="bg-red-500 text-white block mb-3 p-3 rounded outline-none" type="submit" value="Login" />
            <p>
                New to red onion?
                <Link to="/signup" className="ml-2 text-red-600">
                    Create an account
                </Link>
            </p>
        </div>
    )
}

export default Login
