import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../App'
import logo from '../../../images/logo2.png'
import '../../../Styles/Header.css'

const Header = () => {
    const { cart } = useContext(CartContext)
    let quantity = 0

    for (const item of cart) {
        quantity += item?.quantity
    }

    return (
        <nav className="flex justify-between p-3 md:py-6 md:px-24">
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
            <div className="flex items-center gap-3 md:gap-5">
                <span>🛒{quantity}</span>
                <button className="text-sm font-semibold outline-none tracking-wide">Login</button>
                <button className="text-sm text-white outline-none bg-red-500 px-5 py-1 md:py-2 rounded-full">
                    Sign up
                </button>
            </div>
        </nav>
    )
}

export default Header
