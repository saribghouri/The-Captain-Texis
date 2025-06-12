// "use client"

// import { Image } from "antd"
// import { DollarSign, MapPin } from "lucide-react"


// const ServicesSection = () => {
//   const services = [
//     {
//       title: "Airport Shuttle",
//       description: "We are Always There at Your Services",
//       image: "assets/images/images.png",
//       rate: "300 Kms/day",
//     },
//     {
//       title: "Airport Shuttle",
//       description: "We are Always There at Your Services",
//       image: "assets/images/images.png",
//       rate: "300 Kms/day",
//     },
//     {
//       title: "Airport Shuttle",
//       description: "We are Always There at Your Services",
//       image: "assets/images/images.png",
//       rate: "300 Kms/day",
//     },
//     {
//       title: "Airport Shuttle",
//       description: "We are Always There at Your Services",
//       image: "assets/images/images.png",
//       rate: "300 Kms/day",
//     },
//     {
//       title: "Airport Shuttle",
//       description: "We are Always There at Your Services",
//       image: "assets/images/images.png",
//       rate: "300 Kms/day",
//     },
//     {
//       title: "Airport Shuttle",
//       description: "We are Always There at Your Services",
//       image: "assets/images/images.png",
//       rate: "300 Kms/day",
//     },
//   ]

//   return (
//     <div className="relative w-full overflow-hidden px-[50px] bg-white">
//       <div className="mx-auto  py-16 md:py-24 bg-white">
//       <div className="flex flex-col md:flex-row w-full xl:flex-row sm:flex-col   lg:justify-center items-center justify-between gap-8 md:gap-12 lg:gap-40">
//         {/* Phone mockups */}
//         <div className="relative w-full md:w-[50%] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
//           <div className="absolute top-1/2 -translate-y-1/2 lg:flex lg:flex-col lg:justify-center z-10 w-full">
//             <img
//               src="assets/images/app.png"
//               alt="Ride app mockup"
//               className="w-full max-w-[919px] lg:w-[770px]   xl:w-[770px]  mx-auto"
//               priority
//             />
//           </div>
//         </div>

//         {/* Content */}
//         <div className="w-full md:w-1/2 space-y-6">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
//             <span className="text-black">Download The App</span>
//             <br />
//             <span className="text-[#432469]">
//               Your Ride{' '}
//               <span className="text-black">Is Just A</span>
//             </span>
//             <br />
//             <span className="text-[#000000]">Tap Away</span>
//           </h2>

//           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-12 mt-4 sm:mt-8">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full  flex items-center justify-center">
//                <img src="assets/images/Transparent Pricing.svg" alt="" />
//               </div>
//               <span className="text-lg sm:text-[30px] font-medium text-[#432469]">
//                 Transparent Pricing
//               </span>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full  flex items-center justify-center">
//                            <img src="assets/images/Live Driver Tracking.svg" alt="" />

//               </div>
//               <span className="text-lg sm:text-[30px] font-medium text-[#432469]">
//                 Live Driver Tracking
//               </span>
//             </div>
//           </div>

//           <div className="pt-4 sm:pt-6">
//             <button className="bg-[#4d2d7c] cursor-pointer text-white font-medium px-6 sm:px-8 py-2 rounded-md text-base sm:text-lg hover:bg-[#4d2d7c] group transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//               Book a Ride Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//       <div className=" mx-auto px-14 py-16 md:py-24">
//         <div className="flex flex-col md:flex-row w-full items-center justify-between gap-6 ">

//           <div className="w-full md:w-1/2 space-y-6 flex flex-col  justify-center  ">
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//               <span className="text-black">Drive With </span>
//               <br />
//               <span className="text-[#432469]">The Captain Taxi  </span>
//               <br />
//               <span className="text-[#000000]">Be Your Own Boss</span>
//               <h1 className="text-[35px] mt-[20px]">Move Sydney Sustainably</h1>
//             </h2>
//             <p className="text-[30px] mt-[10px] font-normal">We’re here to help, anytime Learn more</p>
//             <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-8">
//               <button className="bg-[#4d2d7c] cursor-pointer text-white font-medium px-8 py-2  text-left rounded-md text-lg hover:bg-[#4d2d7c] group transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//               Apply to Drive
//               </button>
//             </div>

//           </div>

//           <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px]">
//             <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
//               <img
//                 src="assets/images/driver-men.jfif"
//                 alt="Ride app mockup"

//                 className=" rounded-2xl h-[489px] w-[863px]"
//                 priority
//               />
//             </div>
//           </div>

//         </div>
//       </div>


//     </div>
//   )
// }



// export default ServicesSection
"use client"

import { Button } from "antd"


const ServicesSection = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* App Download Section */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* Phone mockup */}
          <div className="relative w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] flex items-center justify-center">
              <img
                src="assets/images/app.png"
                alt="Ride app mockup showing the mobile application interface"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-black">Download The App</span>
              <br />
              <span className="text-[#432469]">
                Your Ride <span className="text-black">Is Just A</span>
              </span>
              <br />
              <span className="text-black">Tap Away</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mt-6 sm:mt-8 justify-center lg:justify-start">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                    src="/placeholder.svg?height=48&width=48"
                    alt="Transparent pricing icon"
                    className="w-full h-full"
                  />
                </div>
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-[#432469]">
                  Transparent Pricing
                </span>
              </div>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                    src="assets/images/Live Driver Tracking.svg"
                    alt="Live driver tracking icon"
                    className="w-full h-full"
                  />
                </div>
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-[#432469]">
                  Live Driver Tracking
                </span>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 flex justify-center lg:justify-start">
              <button className="bg-[#4d2d7c] hover:bg-[#3d1f5c] text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Book a Ride Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Driver Section */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="space-y-2 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-black">Drive With </span>
                <br />
                <span className="text-[#432469]">The Captain Taxi </span>
                <br />
                <span className="text-black">Be Your Own Boss</span>
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 sm:mt-6 text-black">
                Move Sydney Sustainably
              </h3>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-700 mt-4 sm:mt-6">
              {"We're here to help, anytime Learn more"}
            </p>

            <div className="pt-4 sm:pt-6 flex justify-center lg:justify-start">
              <button className="bg-[#4d2d7c] hover:bg-[#3d1f5c] text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Apply to Drive
              </button>
            </div>
          </div>

          {/* Driver Image */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] flex items-center justify-center">
              <img
                src="assets/images/driver-men.jfif"
                alt="Professional driver representing The Captain Taxi service"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection
