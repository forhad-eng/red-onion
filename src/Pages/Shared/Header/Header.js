import React from 'react'
import logo from '../../../images/logo2.png'
import '../../../Styles/Header.css'

const Header = () => {
    return (
        <nav className="flex justify-between p-3 md:py-6 md:px-24">
            <img src={logo} alt="" />
            <div className="flex items-center gap-3 md:gap-5">
                <span>🛒</span>
                <p className="text-sm font-semibold tracking-wide">Login</p>
                <button className="text-sm text-white  bg-red-500 px-5 py-1 md:py-2 rounded-full">Sign up</button>
            </div>
        </nav>
    )
}

export default Header
