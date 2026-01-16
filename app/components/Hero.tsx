export default function Hero (){
  return <div className="w-full relative h-[285px] ">
        <div className="w-full opacity-[5%] absolute bottom-0 top-0 left-0 right-0 h-full bg-red-500">
          <img className="w-full h-full object-cover" src="/overlay.jpg" alt="" />
        </div>
       <div className="w-full opacity-[6%] flex items-center justify-center  z-10 absolute bottom-0 top-0 left-0 right-0 h-full">
          <img className="w-[80%] lg:w-[806.7px]  h-full object-cover" src="/logo.png" alt="" />

       </div>


 <div className="w-full sm:px-[3rem] h-full px-[1rem] leading-snug text-center flex items-center justify-center">
  <p className="lg:font-[900] text-[41.2518px] md:leading-[72.7167px] md:tracking-[-1.98334px] leading-[45.3833px] lg:text-[48px] md:font-extrabold tracking-[-1.23755px] font-[500] text-[#10068C]">Explore and Find the right <br className="hidden md:block"/> Opportunity for You</p>
 </div>
  </div>
}
