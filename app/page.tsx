import React from 'react'
import Hero from './components/Hero'
import Opportunity from './components/Opportunities'
function Page() {
  return (
    <div className='[@media_(min-width:320px)_and_(max-width:370px)]:overflow-x-hidden md:pt-[9em] pt-[6em]'>

      <Hero/>

      <Opportunity/>
    </div>
  )
}

export default Page
