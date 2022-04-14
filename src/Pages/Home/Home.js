import React from 'react'
import '../../Styles/Home.css'

const Home = () => {
    return (
        <div className="home-banner">
            <p className="text-2xl md:text-5xl text-center pt-28 md:pt-36 mb-5">Best food is awaiting you</p>
            <div className="w-full md:w-1/2 mx-auto flex justify-center items-center relative">
                <input
                    className="rounded-full outline-none py-1 pl-4 mr-12 md:mr-16 md:py-2 md:pl-5 md:pr-32"
                    type="text"
                    placeholder="Search food items"
                />
                <button className="text-sm text-white  bg-red-500 px-5 py-1 md:py-2 rounded-full absolute right-28 md:right-[140px]">
                    Search
                </button>
            </div>
        </div>
    )
}

export default Home
