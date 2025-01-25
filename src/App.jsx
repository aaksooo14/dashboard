import React, { useState } from 'react'
import Header from './component/Header'
import { FaHome } from "react-icons/fa";
import { FaElementor } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { RiPagesLine } from "react-icons/ri";
import { SiNextra } from "react-icons/si";
import { LuComponent } from "react-icons/lu";
import DashBoard from './component/DashBoard';
import Components from './component/Components';
import UiComponent from './component/UiComponent';
import profileImage from './assets/image1.jpg'
import FormStuffs from './component/FormStuffs';
import DateTable from './component/DateTable';
import Icon from './component/Icon';
import Sample from './component/Sample';
import Extra from './component/Extra';
import Form from './component/Form'



const App = () => {

  const [dashboard, setDashboard] = useState(true)
  const [uiElement, setuiElement] = useState(false)
  const [component, setcomponent] = useState(false)
  const [formStuff, setFormStuff] = useState(false)
  const [dateTable, setDateTable] = useState(false)
  const [icons, setIcons] = useState(false)
  const [samplePage, setSamplePage] = useState(false)
  const [extra, setExtra] = useState(false)
  const [addProject, setAddProject] = useState(false)


  return (
    <>
      <Header />
      <div className='flex  p-5 text-xl '>
        <div className='w-[20vw] h-[100vh] p-5'>
          <ul className='space-y-4'>
            <div className='flex space-x-5'>
              <img src={profileImage} alt='imgProfile ' className='h-10 rounded-full' />
              <li>Akash </li>

            </div>
            <div className='flex justify-between hover:text-blue-400'>
              <li onClick={() => {
                setDashboard(true)
                setuiElement(false)
                setDateTable(false)
                setExtra(false)
                setFormStuff(false)
                setIcons(false)
                setExtra(false)
                setcomponent(false)
                setSamplePage(false)
              }}>Dashboard</li>
              <FaHome />
            </div>
            <div className='flex justify-between  hover:text-blue-400'>
              <li onClick={() => {
                setDashboard(false)
                setuiElement(true)
                setDateTable(false)
                setExtra(false)
                setFormStuff(false)
                setIcons(false)
                setExtra(false)
                setcomponent(false)
                setSamplePage(false)
              }}>UI Elements</li>
              <FaElementor />
            </div>
            <div className='flex justify-between  hover:text-blue-400'>
              <li onClick={() => {
                setDashboard(false)
                setuiElement(false)
                setDateTable(false)
                setExtra(false)
                setFormStuff(false)
                setIcons(false)
                setExtra(false)
                setcomponent(true)
                setSamplePage(false)
              }}>Graph</li>
              <LuComponent />
            </div>
            <div className='flex justify-between  hover:text-blue-400'>
              <li onClick={() => {
                setDashboard(false)
                setuiElement(false)
                setDateTable(false)
                setExtra(false)
                setFormStuff(true)
                setIcons(false)
                setExtra(false)
                setcomponent(false)
                setSamplePage(false)
              }}>Form Stuffs</li>
              <FaWpforms />
            </div>
            <div className='flex justify-between  hover:text-blue-400'>
              <li onClick={() => {
                setDashboard(false)
                setuiElement(false)
                setDateTable(true)
                setExtra(false)
                setFormStuff(false)
                setIcons(false)
                setExtra(false)
                setcomponent(false)
                setSamplePage(false)
              }}>Date Table</li>
              <CiCalendarDate />
            </div>
            <div className='flex justify-between  hover:text-blue-400'>
              <li onClick={() => {
                setDashboard(false)
                setuiElement(false)
                setDateTable(false)
                setExtra(false)
                setFormStuff(false)
                setIcons(true)
                setExtra(false)
                setcomponent(false)
                setSamplePage(false)
              }}>Icons</li>
              <RiContactsLine />
            </div>
            <div className='flex justify-between  hover:text-blue-400'>
              <li onClick={() => {
                setDashboard(false)
                setuiElement(false)
                setDateTable(false)
                setExtra(false)
                setFormStuff(false)
                setIcons(false)
                setExtra(false)
                setcomponent(false)
                setSamplePage(true)
              }}>Sample Page</li>
              <RiPagesLine />
            </div>
            <div className='flex justify-between  hover:text-blue-400'>
              <li onClick={() => {
                setDashboard(false)
                setuiElement(false)
                setDateTable(false)
                setExtra(true)
                setFormStuff(false)
                setIcons(false)
                setExtra(false)
                setcomponent(false)
                setSamplePage(false)

              }}>Extras</li>
              <SiNextra />
            </div>
            <button
              onClick={() => setAddProject(!addProject)}
              className='bg-blue-400 text-white text-[15px] p-2 rounded-md w-[12vw]'>Add Project</button>
            {addProject &&
              <div className='absolute top-5 left-[33vw]'>
                <Form />
              </div>
            }
          </ul>

        </div>

        <div className='bg-slate-200 w-[100vw] p-5'>
          {dashboard && <DashBoard />}
          {uiElement && <UiComponent />}
          {component && <Components />}
          {formStuff && <FormStuffs />}
          {dateTable && <DateTable />}
          {icons && <Icon />}
          {samplePage && <Sample />}
          {extra && <Extra />}


        </div>
      </div>
    </>
  )
}

export default App
