// "use client";
// import {
//   CarOutlined,
//   CalendarOutlined,
//   DollarOutlined,
//   ArrowRightOutlined,
// } from "@ant-design/icons";
// import { Car, Package, Truck, Users } from "lucide-react";

// export default function HowItWorks() {
//   const steps = [
//     {
//       step: "Step 1: Estimate Your Fare",
//       description: "Enter pickup & drop-off; get an instant quote.",
//       icon: <DollarOutlined className="text-2xl" />,
//     },
//     {
//       step: "Step 2: Select Your Service",
//       description: "Next Available, Sedan, SUV, Maxi, Cargo or NDIS.",
//       icon: <CarOutlined className="text-2xl" />,
//     },
//     {
//       step: "Step 3: Ride or Reserve",
//       description: "Book now or schedule later; pay in-app or in-taxi.",
//       icon: <CalendarOutlined className="text-2xl" />,
//     },
//   ];

//   return (
//     <div className=" bg-white">
//       <section
//         className="relative mb-[50px]  bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url('assets/images/road.png')`,
//         }}
//       >
//         <div className="relative z-10 h-full  flex flex-col">
//           <div className="flex-1 flex flex-col justify-center mt-[20px] ml-[120px] px-4 sm:px-6 lg:px-8 pb-24">
//             <div className="max-w-8xl  text-left mt-[40px]">
//               <p className="text-white text-lg md:text-[40px] font-normal mb-4 tracking-wide">Find your car & Our Services</p>
//               <h1 className="text-white text-2xl max-w-[90%]  md:text-4xl lg:text-6xl xl:text-6xl font-bold leading-tight ">
//                 Leading the best Our Services In US
//               </h1>
//             </div>
//           </div>

//           <div className="px-4 sm:px-6 lg:px-8 pb-0">
//             <div className="max-w-[90%]   mx-auto">
//               <div className="bg-white rounded-3xl    mb-[-90px] shadow-2xl px-6 py-8 md:px-12 md:py-12">
//                 <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-10">
//                   <div className="text-center sections border  ">
//                     <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center ">
//                       <img
//                         src="assets/images/Standard Taxi card.svg"
//                         alt="Ride app mockup"

//                         className=" rounded-2xl h-[489px] w-[863px]"
//                         priority
//                       />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Standard Taxi</h3>
//                     <p className="text-gray-600 text-base">Sedan, for up 4 passengers</p>
//                   </div>

//                   <div className="text-center sections border ">
//                     <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
//                       <img
//                         src="assets/images/SUV & Maxi.svg"
//                         alt="Ride app mockup"

//                         className=" rounded-2xl h-[489px] w-[863px]"
//                         priority
//                       />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">SUV & Maxi</h3>
//                     <p className="text-gray-600 text-base">Room for 5-11 passengers</p>
//                   </div>

//                   <div className="text-center sections border ">
//                     <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
//                       <img
//                         src="assets/images/Wheelchairs (1).svg"
//                         alt="Ride app mockup"

//                         className=" rounded-2xl h-[489px] w-[863px]"
//                         priority
//                       />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Wheelchair</h3>
//                     <p className="text-gray-600 text-base">Accessible transportation</p>
//                   </div>

//                   <div className="text-center sections border ">
//                     <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
//                        <img
//                         src="assets/images/Parcel Delivery.svg"
//                         alt="Ride app mockup"

//                         className=" rounded-2xl h-[489px] w-[863px]"
//                         priority
//                       />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4">Parcel Delivery</h3>
//                     <p className="text-gray-600 text-base">Door-to-door delivery service</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>

//   );
// }
"use client"
"use client"
import { useEffect, useRef, useState } from "react"
// import { Car, Package, Truck, Users } from 'lucide-react'

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "Standard Taxi",
      description: "Sedan, for up 4 passengers",
      image: "/assets/images/Standard Taxi card.svg",
    },
    {
      title: "SUV & Maxi",
      description: "Room for 5-11 passengers",
      image: "/assets/images/SUV & Maxi.svg",
    },
    {
      title: "Wheelchair",
      description: "Accessible transportation",
      image: "/assets/images/Wheelchairs (1).svg",
    },
    {
      title: "Parcel Delivery",
      description: "Door-to-door delivery service",
      image: "/assets/images/Parcel Delivery.svg",
    },
  ]

  return (
    <div className=" ">
      <section
        ref={sectionRef}
        className="relative mb-[50px] bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('assets/images/road.png')`,
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2  rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-20 w-1 h-1  rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white rounded-full animate-bounce opacity-30"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1 flex flex-col justify-center mt-[20px] ml-[120px] px-4 sm:px-6 lg:px-8 pb-24">
            <div className="max-w-8xl text-left mt-[40px]">
              <p
                className={`text-white text-lg md:text-[40px] font-normal mb-4 tracking-wide transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                Find your car & Our Services
              </p>
              <h1
                className={`text-white text-2xl max-w-[90%] md:text-4xl lg:text-6xl xl:text-6xl font-bold leading-tight transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: "0.4s" }}
              >
                Leading the best Our Services In US
              </h1>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 pb-0">
            <div className="max-w-[90%] mx-auto mb-[50px]">
              <div
                className={`bg-white rounded-3xl mb-[-90px] shadow-2xl px-6 py-8 md:px-12 md:py-12 transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-95"
                }`}
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-10">
                  {services.map((service, index) => {
                    // const IconComponent = service.icon
                    return (
                      <div
                        key={service.title}
                        className={`group text-center border border-gray-100 rounded-2xl p-6 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:scale-105 ${
                          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                        style={{
                          transitionDelay: `${0.8 + index * 0.1}s`,
                          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                        }}
                      >
                        {/* Replace the entire icon container section with this image container */}
                        <div className="relative w-full h-28 mx-auto mb-6 flex items-center justify-center overflow-hidden rounded-xl">
                          <img
                            src={service.image || "/placeholder.svg"}
                            alt={service.title}
                            className="w-full h-full object-contain transform  transition-transform duration-300"
                          />

                          {/* Hover overlay for image */}
                          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div> */}
                        </div>

                        {/* Update title hover effect */}
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                          {service.title}
                        </h3>

                        {/* Update description hover effect */}
                        <p className="text-gray-600 text-base group-hover:text-gray-500 transition-colors duration-300 relative z-10">
                          {service.description}
                        </p>

                        {/* Remove the color-based hover overlay and replace with a subtle one */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>

                        {/* Floating particles effect */}
                        <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity duration-300"></div>
                        <div
                          className="absolute bottom-4 left-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-pulse transition-opacity duration-300"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating animation keyframes */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translate3d(0, 100%, 0);
            }
            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-slide-in-up {
            animation: slideInUp 0.8s ease-out;
          }
        `}</style>
      </section>
    </div>
  )
}
