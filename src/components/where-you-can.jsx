
"use client"

import Image from "next/image"

const WhereYouCanUse = () => {
  const partners = [
      {
        name: "13cabs",
        logo: "assets/images/cabrage.png",
      },
      {
     name: "CAB",
     logo: "assets/images/13cab.png",
     
   },
    {
      name: "CABCHARGE",
      logo: "assets/images/eastren cab.png",
    },
    {
      name: "EASTERN Cabs",
      logo: "assets/images/cab.png",
    },
  ]

  return (
    

    <div className="relative w-full  md:h-42 bg-[#e8e8f0]   overflow-hidden">
      {/* Purple diagonal banner */}
      <div
        className="absolute top-0 left-0 py-[70px] bg-[#502a7e] text-white h-full flex items-center px-6 md:px-12"
        style={{
          clipPath: "polygon(0 0, 70% 0, 50% 100%, 0 100%)",
          width: "45%",
        }}
      >
        <div className="">
          <div className="text-lg md:text-xl lg:text-4xl font-normal leading-tight">Where You Can Use</div>
          <div className="text-xl md:text-2xl lg:text-[40px] font-bold">Captain Taxi</div>
        </div>
      </div>

      {/* Partners logos section */}
      <div
        className="absolute right-0 top-0 h-full  items-center pr-6 md:pr-12"
        style={{ width: "67%" }}
      >
  
         <div class="marquee_wrapper">
        <div class="custom_container">
          <div class="marquee">
            <div class="marquee--inner flex items-center justify-between">
              <span> 
                <img
                  src="assets/images/cabrage.png"
                  height="189px"
                  width="256px"
                  alt="bramd name"
                />
              </span>
              <span> 
                <img
                  src="assets/images/the-austrailian.png"
                  height="189px"
                  width="256px"
                  alt="bramd name"
                />
              </span>

              <span>
                <img
                  src="assets/images/blackwhite.png"
                  height="89px"
                  width="256px"
                  alt="brand name"
                />
              </span>
              <span>
                <img
                  src="assets/images/sydney-airport.png"
                  height="89px"
                  width="256px"
                  alt="brand name"
                />
              </span>
              <span>
                <img
                  src="assets/images/taxi-plus.png"
                  height="89px"
                  width="256px"
                  alt="brand name"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
  
   
      </div>
    </div>
  
  )
}

export default WhereYouCanUse