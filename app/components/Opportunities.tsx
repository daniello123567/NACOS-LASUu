"use client"
import React, { useEffect, useLayoutEffect, useState } from 'react'
import allJobListings, { type JobListing } from '../store/jobs'
import gsap from 'gsap'
function Opportunities() {
  const [currentFilter, setFilter] = useState<"" | "jobs" | "internships" | "academics" | "research">('jobs')
  const [jobs, setJobs] = useState<JobListing[] | []>([])
  useEffect(() => {
    if (currentFilter === "") {
      setJobs([...allJobListings])
    } else if (currentFilter === "jobs") {
      setJobs([...allJobListings])
    } else if(currentFilter==="academics"){
      const academy = allJobListings.filter((x:JobListing)=>{
        return x.jobType === "Academics"? x :""
      })
      setJobs([...academy])
    }else if(currentFilter==="internships"){
      const intern = allJobListings.filter((x:JobListing)=>{
        return x.jobType === "Internships"? x :""
      })
      setJobs([...intern])
    }else if(currentFilter==="research"){
      const research = allJobListings.filter((x:JobListing)=>{
        return x.jobType === "Research"? x :""
      })
      setJobs([...research])}
  }, [currentFilter])



  const updater = (type: "" | "jobs" | "internships" | "academics" | "research") => {
    if (currentFilter !== type) {
      setFilter(type)
    } else {
      setFilter("")
    }
  }
  const Chooser = () => {
    return <div className="md:ml-auto px-[1rem] flex justify-between gap-x-[.8rem] items-center  w-full md:w-[696px] h-[64px]">
      <p  onClick={() => { updater("jobs") }} className={`lg:text-[20px] [@media_(min-width:320px)_and_(max-width:370px)]:text-sm cursor-pointer font-[400] ${currentFilter.includes("jobs") ? "text-white bg-[#808080] w-[100px] md:w-[170px] flex items-center justify-center h-[48px] rounded-[10px]" : ""}`}>Jobs</p>
      <p  onClick={() => { updater("internships") }} className={`lg:text-[20px] [@media_(min-width:320px)_and_(max-width:370px)]:text-sm  cursor-pointer font-[400]   ${currentFilter.includes("internships") ? "text-white bg-[#808080] w-[100px] md:w-[170px] flex items-center justify-center h-[48px] rounded-[10px]" : ""}`}>Internships</p>
      <p  onClick={() => { updater("academics") }} className={`lg:text-[20px] [@media_(min-width:320px)_and_(max-width:370px)]:text-sm cursor-pointer font-[400] ${currentFilter.includes("academics") ? "text-white bg-[#808080] w-[100px] md:w-[170px] flex items-center justify-center h-[48px] rounded-[10px]" : ""}`}>Academics</p>
      <p  onClick={() => { updater("research") }} className={`lg:text-[20px] [@media_(min-width:320px)_and_(max-width:370px)]:text-sm cursor-pointer font-[400] ${currentFilter.includes("research") ? "text-white bg-[#808080] w-[100px] md:w-[170px] flex items-center justify-center h-[48px] rounded-[10px]" : ""} `}>Research</p>
    </div>
  }

  const Card = ({ description, postedDate, title, company, location,image, salary, applicationDeadline }: JobListing) => {
    return <div id='filtered-item' className='
h-fit  p-[clamp(0.75rem,2vw,2.5rem)]
overflow-hidden
  bg-[#F7F7F7]
  w-full
  '>

      <div className='flex [@media_(min-width:320px)_and_(max-width:370px)]:gap-[0.5em] gap-[1em] items-start'>
        <div className='
[@media_(min-width:320px)_and_(max-width:370px)]:w-[40px]
[@media_(min-width:320px)_and_(max-width:370px)]:h-[40px]
  md:w-[100px] w-[50px]
  md:h-[100px] h-[50px]
  aspect-square
  rounded-full
  bg-red-500
'>
  <img className='w-full h-full rounded-full object-cover' src={image} alt={title} />
</div>

        <div className='flex-1'>
          <div className="flex-1 h-fit  sm:flex-row   sm:justify-between sm:items-center [@media_(min-width:320px)_and_(max-width:433px)]:flex-col-reverse [@media_(min-width:320px)_and_(max-width:433px)]:items-start  flex flex-row items-center justify-between gap-y-[clamp(2px,0.5vw,4px)]">

            <p className='font-[600] [@media_(min-width:320px)_and_(max-width:370px)]:text-[1.3rem] text-[clamp(1.5rem,4vw,2.25rem)] text-wrap leading-tight'>{title}</p>
            <p className='text-[#373737] text-[clamp(16px,1.5vw,18px)] sm:order-2'>{postedDate}</p>

          </div>

          <div className='flex flex-wrap mt-[clamp(4px,1vw,8px)] w-fit'>
            <div className='text-[#373737]  pr-[clamp(10px,2vw,23px)] h-[clamp(20px,2.5vw,23px)] flex items-center text-[clamp(0.8rem,2vw,1.25rem)] truncate'>
              {company}
            </div>
            <div className='flex text-[#10068C] font-bold items-center h-[clamp(20px,2.5vw,24px)]'>|</div>
            <div className='text-[#373737] flex items-center h-[clamp(20px,2.5vw,24px)] borer-l-[clamp(1px,0.3vw,2px)] border-l-[#10068C] pl-[clamp(12px,2vw,24px)] text-[clamp(0.8rem,2vw,1.25rem)] truncate'>
              {location}
            </div>
          </div>

          <div className='mt-[16px] sm:mt-[21px]
              flex items-center justify-between flex-wrap h-[40px]'>

            <div className='
  bg-[#EBEBEB]
  w-fit
  rounded-[max(4px,min(1.5vw,8px))]  /* 4px at 320px */
  py-[max(4px,min(1.5vw,8px))]      /* 4px at 320px */
  font-[600]
  text-[max(14px,min(3.5vw,20px))]  /* 14px at 320px */
  text-[#373737]
  px-[max(3px,min(1vw,6px))]        /* 3px at 320px */
  leading-[1.2]
  whitespace-nowrap
'>
              {salary}
            </div>


            <div className='
  flex
  flex-wrap
  py-[max(4px,min(1.5vw,8px))]
  px-[max(3px,min(1vw,6px))]
  items-center
  gap-[max(8px,min(3vw,12px))]
  text-[max(14px,min(4vw,18px))]
  text-[#373737]
  [@media_(min-width:320px)_and_(max-width:405px)]:gap-[6px]
'>
              <p>Application deadline:</p>
              <p>{applicationDeadline}</p>
            </div>



          </div>
          <div className='
     [@media_(min-width:437px)_and_(max-width:682px)]:mt-[3em]

  mt-[clamp(1.5rem,4vw,2.5rem)]
  flex sm:flex-row flex-col
  justify-between
  gap-[clamp(0.5rem,2vw,1rem)]

'>

            <div className='
    w-full sm:w-[60%]
    overflow-hidden
    text-ellipsis
    [display:-webkit-box]
    [-webkit-box-orient:vertical]
    [-webkit-line-clamp:2] sm:[-webkit-line-clamp:3]
    h-auto min-h-[clamp(2.5rem,8vw,3.5rem)]
    text-[clamp(0.875rem,2.5vw,1.125rem)]
    leading-[1.4]
    pr-[clamp(0.5rem,1.5vw,1rem)]
        [@media_(min-width:320px)_and_(max-width:405px)]:w-[196px]
        [@media_(min-width:320px)_and_(max-width:405px)]:mt-[2em]

  '>
              {description}
            </div>

            <button title='btn' className='
    [@media_(min-width:320px)_and_(max-width:405px)]:w-[190px]

    w-full sm:w-[clamp(100px,25vw,149px)]
    mt-[clamp(0.75rem,2vw,1rem)] sm:mt-0
    rounded-[clamp(1.5rem,8vw,2.25rem)]
    border
    py-[clamp(0.5rem,3vw,1rem)]
    px-[clamp(0.75rem,3vw,1.5rem)]
    flex
    items-center
    justify-center
    font-[600]
    text-[clamp(0.875rem,2.5vw,1.125rem)]
    cursor-pointer
    text-[#373737]
    h-[clamp(2.5rem,10vw,3.375rem)]
    whitespace-nowrap
    self-center
    shrink-0
        [@media_(min-width:320px)_and_(max-width:405px)]:self-start

  '>
              view details
            </button>

          </div>






        </div>



      </div>

    </div>
  }


  const Results = () => {
  useLayoutEffect(()=>{
     gsap.fromTo("#filtered-item",{y:50,opacity:0},{ y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.06,
          ease: "power3.out"})
  },[jobs])

    return <div className="lg:mt-[245px] overflow-hidden mt-[60px] px-[16px] md:px-[75px] lg:px-[127px] w-full h-fit flex flex-col [@media_(min-width:320px)_and_(max-width:405px)]:gap-y-[2em] gap-y-[6em] md:gap-y-[10.8125rem]">
      {jobs.map((job: JobListing) => {
        return <Card key={job.id} image={job.image} salary={job.salary} jobType={job.jobType} id={job.id} company={job.company} applicationDeadline={job.applicationDeadline} location={job.location} title={job.title} postedDate={job.postedDate} description={job.description} />
      })}
    </div>
  }
  return (
    <div>
      <Chooser />
      <Results />
    </div>
  )
}

export default Opportunities
