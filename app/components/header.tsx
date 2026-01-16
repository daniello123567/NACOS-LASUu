import React from 'react'

function Header() {

  return (
    <div className='w-full md:px-[2rem] lg:py-[32px] lg:px-[9rem] px-[1rem] justify-between flex flex-row items-center py-[1rem] h-fit'>
      <div className="w-[4rem] h-[4rem] md:w-[73.52px] md:h-[73px] ">
        <img className='w-full h-full object-cover' src="/logo.png" alt="" />
      </div>
      <div className="w-[3rem] cursor-pointer flex justify-center items-center md:hidden h-[3rem] md:w-[73.52px] md:h-[73px] text-2xl ">&#9776;</div>
       <div className="w-[654px] md:w-[550px] md:flex justify-between items-center hidden  h-[47px] ">
            <p className="lg:font-semibold cursor-pointer hover:text-blue-600 hover:underline md:text-[20px] text-[26px]">Event</p>
            <p className="lg:font-semibold cursor-pointer hover:text-blue-600 hover:underline md:text-[20px] text-[26px]">Opportunities</p>
            <p className="lg:font-semibold cursor-pointer hover:text-blue-600 hover:underline md:text-[20px] text-[26px]">Resources</p>
            <p className="lg:font-semibold md:font-[500] cursor-pointer hover:text-blue-600 hover:underline md:text-[20px] text-[26px]">Communities</p>
       </div>
    </div>
  )
}

export default Header
