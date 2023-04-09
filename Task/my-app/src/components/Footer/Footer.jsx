import React from 'react'
import {RiCopyrightLine} from 'react-icons/ri'
import {AiOutlineFacebook} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiOutlineCopyrightCircle} from "react-icons/ai"
export default function Footer() {
  return (
    <>
    <div className='lg:flex lg:text-lg text-xs mt-10 ml-7 space-y-2 grid grid-cols-2 md:flex md:flex-wrap justify-evenly lg:mx-5 lg:mt-32'>
                <div className='bg rounded-lg w-32 h-10 lg:w-44 pt-1  mt-2 text-white lg:text-sm text-center lg:pt-2 lg:h-14'>Financial health<br /> checkup</div>
                <div className='bg-[#404EED26] rounded-lg w-32 h-10 lg:w-44 text-[#404EED] font-semibold text-center pt-3 lg:pt-4 lg:h-14'>Buying Home</div>
                <div className=' bg-[#404EED26] rounded-lg w-32 h-10 lg:w-44 text-[#404EED] font-semibold text-center pt-3 lg:pt-4 lg:h-14'>Allocate Savings</div>
                <div className='bg-[#404EED26] rounded-lg w-32 h-10 lg:w-44 text-[#404EED] font-semibold text-center  pt-3 lg:pt-4 lg:h-14'>Debt Management</div>
                <div className=' bg-[#404EED26] rounded-lg w-32 h-10 lg:w-44 text-[#404EED] font-semibold text-center pt-3 lg:pt-4 lg:h-14'>Value Spending</div>
                <div className='bg-[#404EED26] rounded-lg w-32 h-10 lg:w-44 text-[#404EED] font-semibold text-center lg:pt-4   pt-3 lg:h-14'>Saving for a Goal</div>
            </div>
            <div className='flex justify-between p-2 bg lg:py-2 mt-20 lg:mt-32 lg:px-10'>
                <div className='lg:flex lg:text-xl lg:block   text-xs text-white '>
                    <p>About</p>
                    <p className='lg:ml-10'>Contact</p>
                    <p  className='lg:ml-10'>Button</p>
                </div>
                <div className='flex'>
                <div className='lg:pt-2'><RiCopyrightLine className='text-white lg:mr-3'/></div>
                    <div className=' text-xs text-white'>
                        <p> All rights Reserved</p>
                        <p>Developed by Mayonity</p>
                    </div>
                </div>
                <div className='flex justify-between px-[60px] py-[10px] text-center'>
          <p className='font-bold'> <AiOutlineCopyrightCircle/>All Rights Recieved  <br className='md-hidden'/><link href={"https://github.com/fizza897?tab=repositories"} target="_blank" > Fizza Azam</link> </p>
    <div className='md:flex'>
    <link href={"/"}> <AiFillLinkedin/></link>||
    <link href={"/"}> <AiFillTwitterSquare/> </link>||
    <link href={"/"}> <AiOutlineFacebook/> </link>||
    </div>
    </div>
                </div>

    
    </>
  )
}
