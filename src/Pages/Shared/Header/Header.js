import { ShoppingCartIcon } from '@heroicons/react/solid'
import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../App'
import { auth } from '../../../Firebase/firebase.init'
import logo from '../../../images/logo2.png'
import '../../../Styles/Header.css'

const Header = () => {
    const [user] = useAuthState(auth)
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
                <Link to="/cart">
                    <div className="cart-box">
                        <ShoppingCartIcon className="h-6 w-6" />
                        <span className="cart-counter">{quantity}</span>
                    </div>
                </Link>
                {user ? (
                    <button onClick={() => signOut(auth)} className="text-sm font-semibold outline-none tracking-wide">
                        <span className="mr-3">{user.displayName}</span> Logout
                    </button>
                ) : (
                    <>
                        <Link to="/login">
                            <button className="text-sm font-semibold outline-none tracking-wide">Login</button>
                        </Link>

                        <Link to="/signup">
                            <button className="text-sm text-white outline-none bg-red-500 px-5 py-1 md:py-2 rounded-full">
                                Sign up
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Header
