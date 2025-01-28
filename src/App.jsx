import Header from './component/Header'

import DashBoard from './component/DashBoard';
import { MdDashboard } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
import { MdMarkEmailUnread } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdNotificationsActive } from "react-icons/md";
import { LiaFileContractSolid } from "react-icons/lia";
import { IoSettings } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";




const App = () => {

  return (
    <>
      <Header />

      <div className='flex  p-5  bg-slate-400 space-x-5'>
        {/* Left Part */}
        <div className='w-[20vw] max-h-screen flex justify-center bg-white rounded-lg'>
          <ul className='space-y-4     pt-[10vh]'>

            <div className='flex space-x-3 p-2 hover:text-blue-700 hover:bg-blue-300' >
              <div className='pt-1'> <MdDashboard /></div>
              <p>Dashboard</p>

            </div>
            <div className='flex space-x-2  p-2 hover:text-blue-700 hover:bg-blue-300'>
              <div className='pt-1'><CiBoxList /></div>
              <p>Job Listings</p>

            </div>

            <div className='flex space-x-2 p-2 hover:text-blue-700 hover:bg-blue-300'>
              <div className='pt-1'><MdMarkEmailUnread /></div>
              <p >Interview Management</p>
            </div>
            <div className='flex space-x-2 p-2 hover:text-blue-700 hover:bg-blue-300'>
              <div className='pt-1'><CgProfile /></div>
              <p >Employee</p>

            </div>
            <div className='flex space-x-2   p-2 hover:text-blue-700 hover:bg-blue-300'>
              <div className='pt-1'><MdNotificationsActive /></div>
              <p>Notifications</p>

            </div>
            <div className='flex space-x-2 p-2 hover:text-blue-700 hover:bg-blue-300'>
              <div className='pt-1'><LiaFileContractSolid /></div>
              <p >Contracts</p>

            </div>
            <div className='flex  space-x-2 p-2 hover:text-blue-700 hover:bg-blue-300'>
              <div className='pt-1'><IoSettings /></div>
              <p >System Setting</p>

            </div>
            <div className='pt-[10vh] flex  justify-center '>
              <div className='bg-blue-200 p-5 space-x-2 flex rounded-xl'>
                <div className=' text-2xl text-blue-700'>
                  <IoIosLogOut />
                </div>

                <button className='font-bold text-blue-600'>Log Out</button>
              </div>

            </div>
          </ul>

        </div >
        {/* Right Part */}
        <div className='space-y-[10vh]' >
          <div className='flex absolute right-5 bg-white p-1 '>
            <div className='bg-white pt-2 p-2'><CiSearch /></div>
            <input type='Search' className=' border-l-blue-600 border-l-2 pl-2 ' placeholder='Search' />
          </div>
          <div className='bg-white rounded-xl h-[75vh] w-[80vw]'>
            <DashBoard />
          </div>

        </div >


      </div >
    </>
  )
}

export default App
