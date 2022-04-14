import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/logo.png'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className="mt-10 px-14 py-10 bg-[#222412]">
            <div className="grid md:grid-cols-2 gap-5 mt-5">
                <img width="150px" src={logo} alt="" />
                <div className="grid md:grid-cols-2 gap-y-5 text-white text-sm leading-7 ">
                    <div className="flex flex-col">
                        <Link to="/">About Online Food</Link>
                        <Link to="/">Read Our Blog</Link>
                        <Link to="/">Sign up to Deliver</Link>
                        <Link to="/">Add your restaurant</Link>
                    </div>
                    <div className="flex flex-col">
                        <Link to="/">Get Help</Link>
                        <Link to="/">Read FAQs</Link>
                        <Link to="/">View all cities</Link>
                        <Link to="/">Restaurant near me</Link>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 mt-10 md:mt-24">
                <p className="text-center md:text-left">
                    <small className="text-gray-400">Copyright &copy; {year} RED ONION</small>
                </p>
                <div className="flex justify-center gap-8 text-sm text-white">
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Terms of Use</Link>
                    <Link to="/">Pricing</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
