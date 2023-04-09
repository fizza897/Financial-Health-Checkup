import React from 'react'
import logo from "../../Images/logo.png"
export default function Header() {
  return (
    <>
       <div className='bg lg:h-96 h-40 pl-9 pt-3 columns-3   relative'>
                <div>
                    <img src={logo} alt="image" className='w-10 h-5  lg:w-32 lg:h-16' />
                </div>
                <div>
                    <h1 className='lg:text-2xl md:text-sm  2xl:text-xl  text-xs  text-white  font-bold '>Financial Health Checkup</h1>
                </div>
            </div>
    
    </>
  )
}
