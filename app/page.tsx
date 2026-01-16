import React from 'react'
import Hero from './components/Hero'
import Opportunity from './components/Opportunities'
function Page() {
  return (
    <div className='[@media_(min-width:320px)_and_(max-width:370px)]:overflow-x-hidden '>
      <Hero/>
      <Opportunity/>
    </div>
  )
}

export default Page
