import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import WhyChooseUs from '../../Pages/Home/WhyChooseUs/WhyChooseUs'
import '../../Styles/Home.css'

const Home = () => {
    return (
        <div>
            <div className="home-banner">
                <p className="text-2xl md:text-5xl text-center pt-28 md:pt-36 mb-5">Best food is awaiting you</p>
                <div className="w-3/4 md:w-1/2 mx-auto flex justify-center items-center relative">
                    <input
                        className="rounded-full outline-none py-1 px-8 md:mr-16 md:py-2 md:pl-5 md:pr-32"
                        type="text"
                        placeholder="Search food items"
                    />
                    <button className="text-sm text-white outline-none bg-red-500 px-5 py-1 md:py-2 rounded-full absolute right-0 md:right-[40px] lg:right-[90px] xl:right-[140px]">
                        Search
                    </button>
                </div>
            </div>

            <div className="flex justify-center gap-6 my-14 font-bold">
                <NavLink
                    to="breakfast"
                    className={({ isActive }) => (isActive ? 'text-red-500 border-b-2 border-red-700' : '')}
                >
                    Breakfast
                </NavLink>
                <NavLink
                    to="lunch"
                    className={({ isActive }) => (isActive ? 'text-red-500 border-b-2 border-red-700' : '')}
                >
                    Lunch
                </NavLink>
                <NavLink
                    to="dinner"
                    className={({ isActive }) => (isActive ? 'text-red-500 border-b-2 border-red-700' : '')}
                >
                    Dinner
                </NavLink>
            </div>
            <Outlet />
            <button className="text-sm text-white outline-none bg-red-500 px-5 py-1 md:py-2 rounded block mx-auto mb-5">
                Checkout your food
            </button>
            <WhyChooseUs />
        </div>
    )
}

export default Home
