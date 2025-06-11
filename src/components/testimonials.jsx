"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "antd"

const vehicleTypes = [
  {
    id: "standard-taxi",
    name: "Standard Taxi",
    image: "assets/images/seedan.png",
    title: "Catch A Ride In A",
    subtitle: "Standard Taxi",
    description:
      "Quick and reliable transportation for your daily commute. Our standard taxi service provides comfortable rides with professional drivers who know the city inside and out.",
    primaryButton: "Book A Standard Taxi",
    secondaryButton: "Download App The Caption Taxi",
    contentImage: "assets/images/2.png",
  },
  {
    id: "suv",
    name: "SUV",
    image: "assets/images/new-suv.png",
    title: "Catch A Ride In A",
    subtitle: "SUV",
    description:
      "Experience premium comfort with our spacious SUV service. Perfect for families, groups, or when you need extra space for luggage. Enjoy a smooth, luxurious ride.",
    primaryButton: "Book A SUV",
    secondaryButton: "Download App The Caption Taxi",
    contentImage: "assets/images/3.png",
  },
  {
    id: "airport-shuttle",
    name: "Airport Shuttle",
    image: "assets/images/maxi-11.png",
    title: "Catch A Ride In A",
    subtitle: "Airport Shuttle",
    description:
      "Travel to and from the airport with ease and comfort. Our reliable airport shuttle service ensures you reach your destination on time—no stress, no delays. Sit back relax, and let us handle the journey.",
    primaryButton: "Book A Airport Shuttle",
    secondaryButton: "Download App The Caption Taxi",
    contentImage: "assets/fonts/bus.png",
  },
  {
    id: "cargo",
    name: "Cargo",
    image: "assets/images/cargo.png",
    title: "Catch A Ride In A",
    subtitle: "Cargo",
    description:
      "Need to transport goods or large items? Our cargo service provides reliable transportation for your freight needs. Professional drivers ensure safe and timely delivery.",
    primaryButton: "Book A Cargo Vehicle",
    secondaryButton: "Download App The Caption Taxi",
    contentImage: "assets/images/5.png",
  },
]

export default function TaxiServiceSection() {
  const [currentIndex, setCurrentIndex] = useState(2)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleCardClick = (index) => {
    if (index !== currentIndex && !isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 300)
    }
  }

  const handlePrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev === 0 ? vehicleTypes.length - 1 : prev - 1))
      setTimeout(() => setIsTransitioning(false), 300)
    }
  }

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev === vehicleTypes.length - 1 ? 0 : prev + 1))
      setTimeout(() => setIsTransitioning(false), 300)
    }
  }

  const currentVehicle = vehicleTypes[currentIndex]

  return (
    <div className="w-full relative  py-8 ">
      <div className="text-center mb-8 mt-[60px]">

        <h1 className="text-[70px] font-bold">Our Vehicle <span className="text-[#4d2d7c] text-center ">Captain</span>  Fleet</h1>
      </div>
      <div className="max-w-[85%]  mx-auto">
        {/* Vehicle Type Cards */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2 md:gap-4 flex-1 overflow-x-auto pb-2">
            {vehicleTypes.map((vehicle, index) => (
              <div
                key={vehicle.id}
                onClick={() => handleCardClick(index)}
                className={`
                  flex items-center justify-between gap-2 px-6 py-2 rounded-[10px] border border-gray-200 cursor-pointer transition-all duration-300
                  ${index === currentIndex ? "bg-[#ececec] shadow-md !border !border-[#2c0c5c] " : "bg-white"}
                  min-w-[350px] 
                `}
              >
                <span className=" text-[22px] font-semibold text-black whitespace-nowrap">{vehicle.name}</span>
                <img src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} className=" h-[58px] w-[149px] object-contain" />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 ml-4">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full cursor-pointer border border-black bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
              disabled={isTransitioning}
            >
              <ChevronLeft className="w-7 h-7 text-black" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full cursor-pointer border border-black bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
              disabled={isTransitioning}
            >
              <ChevronRight className="w-7 h-7 text-black" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white relative rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-sm border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-300 ${isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-1 sm:mb-2">
                {currentVehicle.title}
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-purple-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
                {currentVehicle.subtitle}
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-[30px] text-[#2B0B3D]  mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                {currentVehicle.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <button
                  className="bg-[#4d2d7c] cursor-pointer text-white rounded-lg py-[10px] text-[120%] font-semibold   w-[50%] "
                >
                  {currentVehicle.primaryButton}
                </button>
                <button
                  variant="outline"
                  className="border border-[#4d2d7c] cursor-pointer text-[#4d2d7c]  py-[10px] text-[120%] font-semibold rounded-lg w-[50%] "
                >
                  {currentVehicle.secondaryButton}
                </button>
              </div>

              {/* Bottom Navigation Arrows */}
              <div className="flex gap-3 sm:gap-4">
                <button
                  onClick={handlePrevious}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer border border-black bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
                  disabled={isTransitioning}
                >
                  <svg
                    className="w-5 h-5 sm:w-7 sm:h-7 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer border border-black bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
                  disabled={isTransitioning}
                >
                  <svg
                    className="w-5 h-5 sm:w-7 sm:h-7 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div
              className={`transition-all duration-300 ${isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}`}
            >
              <div className="relative">
                <img
                  src={currentVehicle.contentImage || "/placeholder.svg"}
                  alt={currentVehicle.subtitle}
                  className="w-full h-auto rounded-2xl sm:rounded-3xl lg:rounded-4xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" z-10  mt-[-60px]">
        <img
          src="assets/fonts/2796af52-911d-43b9-b649-c6614aafacfd (1).jfif"
          alt="Taxi Service"
          className="w-full h-auto   object-cover"
        />
      </div>
    </div>
  )
}
