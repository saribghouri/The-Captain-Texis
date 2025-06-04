"use client"

import { Image } from "antd"
import { DollarSign, MapPin } from "lucide-react"


const ServicesSection = () => {
  const services = [
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
    {
      title: "Airport Shuttle",
      description: "We are Always There at Your Services",
      image: "assets/images/images.png",
      rate: "300 Kms/day",
    },
  ]

  return (
    <div className="relative w-full overflow-hidden px-[50px] bg-white">
      <div className="mx-auto  py-16 md:py-24 bg-white">
      <div className="flex flex-col md:flex-row w-full xl:flex-row sm:flex-col   lg:justify-center items-center justify-between gap-8 md:gap-12 lg:gap-40">
        {/* Phone mockups */}
        <div className="relative w-full md:w-[50%] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
          <div className="absolute top-1/2 -translate-y-1/2 lg:flex lg:flex-col lg:justify-center z-10 w-full">
            <img
              src="assets/images/app.png"
              alt="Ride app mockup"
              className="w-full max-w-[919px] lg:w-[770px]   xl:w-[770px]  mx-auto"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="text-black">Download The App</span>
            <br />
            <span className="text-[#432469]">
              Your Ride{' '}
              <span className="text-black">Is Just A</span>
            </span>
            <br />
            <span className="text-[#000000]">Tap Away</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-12 mt-4 sm:mt-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#6b3fa0] flex items-center justify-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#6b3fa0]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0-4c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0-4v2m0 16v2m4-14l2-2m-8 2l-2-2m10 6h2m-16 0h-2"
                  />
                </svg>
              </div>
              <span className="text-lg sm:text-xl font-medium text-[#432469]">
                Transparent Pricing
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#6b3fa0] flex items-center justify-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#6b3fa0]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.243l-4.243-4.243m0 0L9.172 7.757M12 12l4.243-4.243m-9.9 9.9a6 6 0 1112 0 6 6 0 01-12 0z"
                  />
                </svg>
              </div>
              <span className="text-lg sm:text-xl font-medium text-[#432469]">
                Live Driver Tracking
              </span>
            </div>
          </div>

          <div className="pt-4 sm:pt-6">
            <button className="bg-[#4d2d7c] cursor-pointer text-white font-medium px-6 sm:px-8 py-2 rounded-md text-base sm:text-lg hover:bg-[#4d2d7c] transition-colors">
              Book a Ride Now
            </button>
          </div>
        </div>
      </div>
    </div>
      <div className=" mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row w-full items-center justify-between gap-8 ">

          <div className="w-full md:w-1/2 space-y-6 flex flex-col  justify-center  ">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-black">Drive With </span>
              <br />
              <span className="text-[#432469]">The Captain Taxi  </span>
              <br />
              <span className="text-[#000000]">Be Your Own Boss</span>
              <h1 className="text-[35px] mt-[20px]">Move Sydney Sustainably</h1>
            </h2>
            <p className="text-[30px] mt-[10px] font-normal">We’re here to help, anytime Learn more</p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-8">
              <button className="bg-[#4d2d7c] cursor-pointer text-white font-medium px-8 py-2  text-left rounded-md text-lg hover:bg-[#4d2d7c] transition-colors">
              Apply to Drive
              </button>
            </div>

          </div>

          <div className="relative w-full md:w-1/2 h-[400px] md:h-[500px]">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <img
                src="assets/images/driver-men.jfif"
                alt="Ride app mockup"

                className=" rounded-2xl h-[489px] w-[863px]"
                priority
              />
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}



export default ServicesSection
