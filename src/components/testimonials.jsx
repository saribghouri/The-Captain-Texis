"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
  const containerRef = useRef(null)

  // Responsive card width based on screen size
  const cardWidth = 280 // Fixed width for consistent navigation

  const visibleCards = 1
  const maxIndex = vehicleTypes.length - visibleCards

  const handleCardClick = (index) => {
    if (index !== currentIndex && !isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 300)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0 && !isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prev) => prev - 1)
      setTimeout(() => setIsTransitioning(false), 300)
    }
  }

  const handleNext = () => {
    if (currentIndex < maxIndex && !isTransitioning) {
      setIsTransitioning(true)
      setCurrentIndex((prev) => prev + 1)
      setTimeout(() => setIsTransitioning(false), 300)
    }
  }

  const currentVehicle = vehicleTypes[currentIndex]

  return (
    <div className="w-full relative py-4 sm:py-6 lg:py-8">
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8 mt-8 sm:mt-12 lg:mt-[60px] px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-bold leading-tight">
          Our Vehicle <span className="text-[#4d2d7c]">Captain</span> Fleet
        </h1>
      </div>

      <div className="max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mx-auto px-2 sm:px-4">
        {/* Vehicle Type Cards */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div className="flex-1 overflow-hidden">
            <div
              ref={containerRef}
              className="flex gap-2 sm:gap-3 md:gap-4 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (280 + 16)}px)` }}
            >
              {vehicleTypes.map((vehicle, index) => (
                <div
                  key={vehicle.id}
                  onClick={() => handleCardClick(index)}
                  className={`
                    flex items-center justify-between gap-2 sm:gap-3 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-[8px] sm:rounded-[10px] border border-gray-200 cursor-pointer
                    ${index === currentIndex ? "bg-[#ececec] shadow-md !border-[#2c0c5c]" : "bg-white"}
                    min-w-[280px] lg:min-w-[350px] xl:min-w-[350px] flex-shrink-0 transition-all duration-200
                  `}
                >
                  <span className="text-base sm:text-lg lg:text-[22px] font-semibold text-black whitespace-nowrap">
                    {vehicle.name}
                  </span>
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className="h-[40px] sm:h-[48px] lg:h-[58px] w-[100px] sm:w-[120px] lg:w-[149px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>













{/* 
  <div className="flex-1 overflow-hidden">
            <div
              ref={containerRef}
              className="flex gap-2 md:gap-4 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
            >
              {vehicleTypes.map((vehicle, index) => (
                <div
                  key={vehicle.id}
                  onClick={() => handleCardClick(index)}
                  className={`
                    flex items-center justify-between gap-2 px-6 py-2 rounded-[10px] border border-gray-200 cursor-pointer
                    ${index === currentIndex ? "bg-[#ececec] shadow-md !border-[#2c0c5c]" : "bg-white"}
                    min-w-[350px] flex-shrink-0
                  `}
                >
                  <span className="text-[22px] font-semibold text-black whitespace-nowrap">{vehicle.name}</span>
                  <img
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    className="h-[58px] w-[149px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div> */}





















          {/* Navigation Arrows - Always visible */}
          <div className="flex gap-3 lg:gap-4 ml-4">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full cursor-pointer border border-black bg-white flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50"
              disabled={isTransitioning || currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5 lg:w-7 lg:h-7 text-black" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full cursor-pointer border border-black bg-white flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50"
              disabled={isTransitioning || currentIndex >= maxIndex}
            >
              <ChevronRight className="w-5 h-5 lg:w-7 lg:h-7 text-black" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-sm border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div
              className={`transition-all duration-300 ${
                isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
              }`}
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">
                {currentVehicle.title}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-purple-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
                {currentVehicle.subtitle}
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[30px] text-[#2B0B3D] mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                {currentVehicle.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <button className="bg-[#4d2d7c] cursor-pointer text-white rounded-lg py-3 sm:py-[10px] px-4 text-sm sm:text-base lg:text-[120%] group transform transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold w-full sm:w-[50%]">
                  {currentVehicle.primaryButton}
                </button>
                <button className="border border-[#4d2d7c] cursor-pointer text-[#4d2d7c] py-3 sm:py-[10px] px-4 text-sm sm:text-base lg:text-[120%] font-semibold group transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg w-full sm:w-[50%]">
                  {currentVehicle.secondaryButton}
                </button>
              </div>

              {/* Bottom Navigation Arrows - Visible on all screens */}
              <div className="flex gap-3 sm:gap-4">
                <button
                  onClick={handlePrevious}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer border border-black bg-white flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50"
                  disabled={isTransitioning || currentIndex === 0}
                >
                  <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7 text-black" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full cursor-pointer border border-black bg-white flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50"
                  disabled={isTransitioning || currentIndex >= maxIndex}
                >
                  <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7 text-black" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div
              className={`transition-all duration-300 order-first lg:order-last ${
                isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
              }`}
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

      {/* Bottom Background Image */}
      <div className="z-10 mt-[-30px] sm:mt-[-40px] lg:mt-[-60px]">
        
        <img
          src="assets/fonts/2796af52-911d-43b9-b649-c6614aafacfd (1).jfif"
          alt="Taxi Service Background"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}
