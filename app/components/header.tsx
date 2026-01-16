"use client"
import React from 'react'
import { useEffect } from 'react'
import gsap from 'gsap'


function Header() {
//   useEffect(() => {
//     const ham = document.querySelector('#ham')
//     const menu = document.querySelector("#menu")
//     const links = document.querySelectorAll('li')
//     const tl = gsap.timeline({paused:true})
//     tl.to(menu, {
// 	duration: 1,
// 	opacity: 1,
// 	height: '60vh',
// 	ease: 'expo.inOut',
// })
// tl.from(links, {
// 	duration: 1,
// 	opacity: 0,
// 	y: 20,
// 	stagger: 0.1,
// 	ease: 'expo.inOut',
// }, "-=0.5");

// tl.reverse();

// ham?.addEventListener('click', () => {
// 	tl.reversed(!tl.reversed());
// });

//     console.log(ham, menu, links)
//   }, [])

useEffect(() => {
  const ham = document.querySelector('#ham')
  const menu = document.querySelector('#main-menu')
  const links = menu?.querySelectorAll('li')

  if (!ham || !menu || !links) return

  gsap.set(menu, {
    height: 0,
    opacity: 0,
    overflow: 'hidden'
  })

  const tl = gsap.timeline({ paused: true })

  tl.to(menu, {
    height: '60vh',
    opacity: 1,
    duration: 0.8,
    ease: 'expo.inOut',
  })

  tl.from(links, {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.6,
    ease: 'expo.inOut',
  }, '-=0.4')

  tl.reverse()

  ham.addEventListener('click', () => {
    tl.reversed(!tl.reversed())
  })

  return () => {
    tl.kill()
  }
}, [])




  return (
    <div className='w-full  relative  z-10 md:px-[2rem] fixed top-0 left-0 w-full z-50 bg-white lg:py-[32px] lg:px-[9rem] px-[1rem] justify-between flex flex-row items-center py-[1rem] h-fit'>
      <div className="w-[4rem] h-[4rem] md:w-[73.52px] md:h-[73px] ">
        <img className='w-full h-full object-cover' src="/logo.png" alt="" />
      </div>
      <div id='ham' className="w-[3rem] cursor-pointer flex justify-center items-center md:hidden h-[3rem] md:w-[73.52px] md:h-[73px] text-2xl ">&#9776;</div>
      <div className="w-[654px] md:w-[550px] md:flex justify-between items-center hidden  h-[47px] ">
        <p className="lg:font-semibold cursor-pointer hover:text-blue-600 hover:underline md:text-[20px] text-[26px]">Event</p>
        <p className="lg:font-semibold cursor-pointer hover:text-blue-600 hover:underline md:text-[20px] text-[26px]">Opportunities</p>
        <p className="lg:font-semibold cursor-pointer hover:text-blue-600 hover:underline md:text-[20px] text-[26px]">Resources</p>
        <p className="lg:font-semibold md:font-[500] cursor-pointer hover:text-blue-600 hover:underline md:text-[20px] text-[26px]">Communities</p>
      </div>

        <div id='main-menu' className='w-[90%] top-[5em] md:hidden  absolute z-[-1] text-[27px] underline items-center justify-center flex flex-col gap-[1em] text-center  rounded-xl p-6 rounded-[.8em] h-[90%] bg-white'>
          <li><a href="#">Events</a></li>
          <li><a href="#">Oppurtunities</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Communities</a></li>
      </div>
    </div>
  )
}

export default Header
