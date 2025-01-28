import React from 'react'

import data from './../assets/data.json'

const DashBoard = () => {
    return (
        <>
            <div className='p-5'>
                {/* //table */}
                <div>
                    <h1 className='font-bold text-xl pl-5'>Job History</h1>
                    <div className="p-4 pt-10 space-y-2">
                        {/* Grid for Headers */}
                        <div className="grid grid-cols-6 gap-6 font-semibold text-md mb-4">
                            <div className="text-center text-gray-400 flex justify-start">Employee Name</div>
                            <div className="text-center text-gray-400">Company</div>
                            <div className="text-center text-gray-400">Project</div>
                            <div className="text-center text-gray-400">Starting Date</div>
                            <div className="text-center text-gray-400">End Date</div>
                            <div className="text-center text-gray-400">Status</div>
                        </div>
                        <hr className="border-t-2 border-gray-300" />
                        {/* Grid for User Data */}
                        <div className="grid grid-cols-1 gap-4">
                            {data.map((user, index) => (
                                <div key={index} className="grid grid-cols-6 gap-6 border-b-2 pb-3 text-sm ">
                                    <div className="text-center flex justify-start">{user.name}</div>
                                    <div className="text-center">{user.company}</div>
                                    <div className="text-center">{user.project}</div>
                                    <div className="text-center">{user.starting_date}</div>
                                    <div className="text-center">{user.end_date}</div>
                                    <div className="text-center">
                                        <span
                                            className={`${user.status === 'completed' ? 'text-green-600 bg-green-300 pl-2 pr-2  rounded-md' : 'text-yellow-600 bg-yellow-400 pl-2 pr-2 rounded-md'
                                                }`}
                                        >
                                            {user.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard
