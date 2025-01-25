import React from 'react'
import { TfiDashboard } from "react-icons/tfi";
import { AiOutlineStock } from "react-icons/ai";
import { GiProfit } from "react-icons/gi";
import { CiFlag1 } from "react-icons/ci";
import data from './../assets/data.json'


const DashBoard = () => {
    return (
        <>
            <div className='space-y-5'>
                <div className='flex space-x-2'>
                    <div className='text-lg p-2 text-white bg-blue-500 rounded-lg'><TfiDashboard /></div>
                    <h1>Dashboard</h1>
                </div>
                <div className='grid grid-cols-3 gap-2'>
                    <div className='bg-purple-700 rounded-md p-4 text-white space-y-4'>
                        <div>
                            <AiOutlineStock />
                        </div>
                        <p>Stock toTal</p>
                        <p>$1500000</p>
                        <p>Increased by 50%</p>
                    </div>
                    <div className='bg-blue-700 rounded-md p-4 text-white space-y-4'>
                        <div>
                            <GiProfit />
                        </div>
                        <p>Total Profit</p>
                        <p>$25000</p>
                        <p>Increased by 30%</p>
                    </div>
                    <div className='bg-orange-700 rounded-md p-4 text-white space-y-4'>
                        <div>
                            <CiFlag1 />
                        </div>
                        <p>Unique Visitor</p>
                        <p>2500000</p>
                        <p>Increased by 80%</p>
                    </div>
                </div>
                {/* //table */}
                <div>
                    <h1>Standard Table Design</h1>
                    <div className="p-4 space-y-2">
                        {/* Grid for Headers */}
                        <div className="grid grid-cols-5 gap-6 font-semibold text-lg mb-4">
                            <div className="text-center">Name</div>
                            <div className="text-center">Email</div>
                            <div className="text-center">User Type</div>
                            <div className="text-center">Joined Date</div>
                            <div className="text-center">Status</div>


                        </div>
                        <hr class="border-t-2 border-gray-300" />
                        {/* Grid for User Data */}
                        <div className="grid grid-cols-5 gap-6">
                            {data.map((user, index) => (
                                <React.Fragment key={index}>
                                    <div className="text-center">{user.name}</div>
                                    <div className="text-center">{user.email}</div>
                                    <div className="text-center">{user.usertype}</div>
                                    <div className="text-center">{user.joined_date}</div>
                                    <div className="text-center">
                                        <span
                                            className={`${user.status === 'accepted' ? 'text-green-600' : 'text-yellow-600'
                                                }`}
                                        >
                                            {user.status}
                                        </span>
                                    </div>


                                </React.Fragment>

                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard
