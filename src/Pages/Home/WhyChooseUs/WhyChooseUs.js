import React from 'react'
import { Link } from 'react-router-dom'
import waiter from '../../../images/adult-blur-blurred-background-687824.png'
import deliveryMan from '../../../images/architecture-building-city-2047397.png'
import chef from '../../../images/chef-cook-food-33614.png'
import alertLogo from '../../../images/icons/Group 1133.png'
import deliveryLogo from '../../../images/icons/Group 204.png'
import carLogo from '../../../images/icons/Group 245.png'

const chooseUs = [
    {
        id: 1,
        category: 'Fast Delivery',
        des: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit',
        img: waiter,
        logo: deliveryLogo
    },
    {
        id: 1,
        category: 'A Good Auto Responder',
        des: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit',
        img: chef,
        logo: alertLogo
    },
    {
        id: 1,
        category: 'Home Delivery',
        des: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit',
        img: deliveryMan,
        logo: carLogo
    }
]

const WhyChooseUs = () => {
    return (
        <div className="px-14 pt-5">
            <p className="text-center md:text-left text-3xl mb-5">Why you choose us</p>
            <p className="text-center md:text-left text-sm mb-7">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit <br /> Vitae inventore aliquam ex a dicta vero
                itaque iusto.
            </p>
            <div className="grid md:grid-cols-3 gap-x-10 gap-y-3">
                {chooseUs.map(item => {
                    const { category, des, img, logo } = item
                    return (
                        <div>
                            <img src={img} alt="" />
                            <div className="flex gap-3 p-6">
                                <img style={{ height: '40px' }} src={logo} alt="" />
                                <div>
                                    <p className="font-bold">{category}</p>
                                    <p className="text-sm text-gray-400 mb-3">{des}</p>
                                    <Link to="/" className="text-blue-700 font-bold">
                                        See More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WhyChooseUs
