import React from 'react'
import { FaRocketchat } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import profImage from './../assets/image1.jpg'

const Header = () => {
    return (
        <>
            <div className='flex justify-between h-[10vh] p-5'>
                <div className='w-[15vw] flex justify-center'>
                    <h1 className='text-2xl text-blue-500 font-bold'>Bluebox</h1>
                </div>
                <div className='flex justify-between space-x-3 '>
                    <input type='search' className='w-[70vw] rounded-md border-2 pl-3' placeholder='search here' />
                    <div className='flex space-x-2 '>
                        <img src={profImage} className='rounded-full w-10' alt='profileImage' />
                        <span>Akash</span>
                    </div>
                    <div className='text-xl'>
                        <FaRocketchat />
                    </div>
                    <div className='text-xl'>
                        <IoIosNotifications />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
