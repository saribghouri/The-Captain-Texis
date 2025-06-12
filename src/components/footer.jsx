// "use client"
// import Link from "next/link"
// import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
// import { Image } from "antd"

// const Footer = () => {
//   return (
//     <footer className="relative w-full overflow-hidden mt-[20px]">
//       {/* Background image with overlay */}
//       <div className="absolute  z-0  inset-0 bg-gradient-to-r from-purple-50/30 via-transparent to-purple-50/20">
//         <div className="absolute inset-0 bg-grey-900/50 z-10"></div>
//         <Image src="assets/images/hero-section-background.png" alt="City background" fill className=" opacity-30" priority />
//       </div>

//       {/* Content container */}
//       <div className="relative z-20   px-16 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
//           {/* Left section */}
//           <div className="md:col-span-4">
//             <div className="mb-4">
//               <img
//                 src="assets/images/Logo1.png"
//                 alt="The Captain Taxis"
//                 width={300}
//                 height={80}
//                 className="mb-2"
//               />
//               <p className="text-black text-xl font-semibold">All Your Rides. One Easy App.</p>
//             </div>

//             <div className="mt-12">
//               <h2 className="text-3xl font-bold text-black">
//                 Book Fast. <span className="text-[#4d2d7c]">Ride Easy.</span>
//               </h2>
//               <h2 className="text-3xl font-bold text-black mt-2">Download the App Now!</h2>

//               <p className="text-black mt-8">On the Apple Store & Google Play – Ready When You Are.</p>

//               <div className="flex flex-col sm:flex-row items-start gap-4 mt-6">
//                 <a
//                   href="#download-android"
//                   className="group transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
//                 >
//                   <div className="bg-black text-white rounded-lg px-4 py-3 flex items-center shadow-lg group-hover:shadow-xl min-w-[160px] backdrop-blur-sm">
//                     <div className="mr-3">
//                       <svg
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                       >
//                         <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
//                       </svg>
//                     </div>
//                     <div className="text-left">
//                       <div className="text-xs">GET IT ON</div>
//                       <div className="text-sm font-semibold">Google Play</div>
//                     </div>
//                   </div>
//                 </a>

//                 <a
//                   href="#download-ios"
//                   className="group transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
//                 >
//                   <div className="bg-black text-white rounded-lg px-4 py-3 flex items-center shadow-lg group-hover:shadow-xl min-w-[160px] backdrop-blur-sm">
//                     <div className="mr-3">
//                       <svg
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                       >
//                         <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
//                       </svg>
//                     </div>
//                     <div className="text-left">
//                       <div className="text-xs">DOWNLOAD ON THE</div>
//                       <div className="text-sm font-semibold">App Store</div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               <Link
//                 href="#"
//                 className="inline-block mt-8 !bg-[#4d2d7c] group transform transition-all duration-300 hover:scale-105 hover:shadow-xl  text-white font-bold py-3 px-12 rounded-md "
//               >
//                 Book Now
//               </Link>
//             </div>
//           </div>

//           {/* Middle section - Map */}
//           <div className="md:col-span-4 flex items-center justify-center">
//             <div className="rounded-lg overflow-hidden  w-full max-w-[450px]">
//               <img src="assets/images/map.png" width={450} height={450} className="w-full" />
//             </div>
//           </div>

//           {/* Right section - Links and Contact */}
//           <div className="md:col-span-4 ">
//             <div className="grid grid-cols-3 mr-[60px]  gap-x-0 gap-y-4">
//               <div className="w-[70%] ">
//                 <h3 className="text-black text-xl font-bold mb-4">Quick Links</h3>
//                 <ul className="space-y-2">
//                   <li>
//                     <Link href="#" className="text-black hover:text-purple-300">
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#" className="text-black hover:text-purple-300">
//                       Join as a Driver
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#" className="text-black hover:text-purple-300">
//                       Vehicle
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#" className="text-black hover:text-purple-300">
//                       Services
//                     </Link>
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-black text-xl font-bold mb-4">Support Center</h3>
//                 <ul className="space-y-2">
//                   <li>
//                     <Link href="#" className="text-black hover:text-purple-300">
//                       Legal Policy/Terms
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#" className="text-black hover:text-purple-300">
//                       Contact Us
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#" className="text-black hover:text-purple-300">
//                       About Us
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#" className="text-black hover:text-purple-300">
//                       Additional Links
//                     </Link>
//                   </li>
//                 </ul>
//               </div>

//               <div className="">
//                 <h3 className="text-black text-[30px] font-bold mb-4">CONTACTS</h3>
//                 <div className="space-y-2">
//                   <p className="text-black">
//                     541a Burwood Road,
//                     <br />
//                     Belmore NSW 2192
//                   </p>
//                   <p className="text-black flex items-center">
//                     <span className="mr-2">📞</span> 0420 966 387
//                   </p>
//                   <p className="text-black flex items-center">
//                     <span className="mr-2">✉️</span> info@thecaptaintaxis.com.au
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-[40px]">

//               <img src="assets/images/car-footer.png" alt="" />
//             </div>
//           </div>
//         </div>



//         {/* Bottom section */}
//         <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-4">
//           <p className="text-black text-sm">Copyright © 2024 The Captain Taxis | All</p>

//           <div className="flex space-x-4 mt-4 md:mt-0">
//             <Link href="#" className="bg-purple-900 p-2 rounded-md group transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-purple-900 ">
//               <Facebook className="text-white w-5 h-5" />
//             </Link>
//             <Link href="#" className="bg-purple-900 p-2 rounded-md hover:bg-purple-900 group transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//               <Instagram className="text-white w-5 h-5" />
//             </Link>
//             <Link href="#" className="bg-purple-900 p-2 rounded-md hover:bg-purple-900 group transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//               <Twitter className="text-white w-5 h-5" />
//             </Link>
//             <Link href="#" className="bg-purple-900 p-2 rounded-md hover:bg-purple-900group transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
//               <Linkedin className="text-white w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

"use client"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden mt-5 lg:mt-[20px]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 via-transparent to-purple-50/20"></div>
        <div className="absolute inset-0 bg-grey-900/50 z-10"></div>
        <Image
          src="/assets/images/hero-section-background.png"
          alt="City background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Content container */}
      <div className="relative z-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left section */}
          <div className="lg:col-span-4 order-1">
            <div className="mb-6 lg:mb-4">
              <Image
                src="/assets/images/Logo1.png"
                alt="The Captain Taxis"
                width={300}
                height={80}
                className="mb-2 w-auto h-12 sm:h-16 lg:h-20"
              />
              <p className="text-black text-lg sm:text-xl font-semibold">All Your Rides. One Easy App.</p>
            </div>

            <div className="mt-8 lg:mt-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-black">
                Book Fast. <span className="text-[#4d2d7c]">Ride Easy.</span>
              </h2>
              <h2 className="text-2xl sm:text-3xl font-bold text-black mt-2">Download the App Now!</h2>

              <p className="text-black mt-6 lg:mt-8 text-sm sm:text-base">
                On the Apple Store & Google Play – Ready When You Are.
              </p>

              <div className="flex flex-row sm:flex-row items-start gap-3 sm:gap-4 mt-4 lg:mt-6">
                <a
                  href="#download-android"
                  className="group transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
                >
                  <div className="bg-black text-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center shadow-lg group-hover:shadow-xl min-w-[140px] sm:min-w-[160px] backdrop-blur-sm">
                    <div className="mr-2 sm:mr-3">
                      <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-xs sm:text-sm font-semibold">Google Play</div>
                    </div>
                  </div>
                </a>

                <a
                  href="#download-ios"
                  className="group transform transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
                >
                  <div className="bg-black text-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center shadow-lg group-hover:shadow-xl min-w-[140px] sm:min-w-[160px] backdrop-blur-sm">
                    <div className="mr-2 sm:mr-3">
                      <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs">DOWNLOAD ON THE</div>
                      <div className="text-xs sm:text-sm font-semibold">App Store</div>
                    </div>
                  </div>
                </a>
              </div>

              <Link
                href="#"
                className="inline-block mt-6 lg:mt-8 bg-[#4d2d7c] group transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-white font-bold py-2 sm:py-3 px-8 sm:px-12 rounded-md text-sm sm:text-base"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Middle section - Map */}
          <div className="lg:col-span-4 flex items-center justify-center order-3 lg:order-2">
            <div className="rounded-lg overflow-hidden w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[450px]">
              <Image
                src="/assets/images/map.png"
                alt="Location map"
                width={450}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right section - Links and Contact */}
          <div className="lg:col-span-4 order-2 lg:order-3">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
              <div className="sm:col-span-1">
                <h3 className="text-black text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Links</h3>
                <ul className="space-y-1 sm:space-y-2">
                  <li>
                    <Link href="#" className="text-black hover:text-purple-600 text-sm sm:text-base transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-black hover:text-purple-600 text-sm sm:text-base transition-colors">
                      Join as a Driver
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-black hover:text-purple-600 text-sm sm:text-base transition-colors">
                      Vehicle
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-black hover:text-purple-600 text-sm sm:text-base transition-colors">
                      Services
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="sm:col-span-1">
                <h3 className="text-black text-lg sm:text-xl font-bold mb-3 sm:mb-4">Support Center</h3>
                <ul className="space-y-1 sm:space-y-2">
                  <li>
                    <Link href="#" className="text-black hover:text-purple-600 text-sm sm:text-base transition-colors">
                      Legal Policy/Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-black hover:text-purple-600 text-sm sm:text-base transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-black hover:text-purple-600 text-sm sm:text-base transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-black hover:text-purple-600 text-sm sm:text-base transition-colors">
                      Additional Links
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <h3 className="text-black text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">CONTACTS</h3>
                <div className="space-y-2">
                  <p className="text-black text-sm sm:text-base">
                    541a Burwood Road,
                    <br />
                    Belmore NSW 2192
                  </p>
                  <p className="text-black flex items-center text-sm sm:text-base">
                    <span className="mr-2">📞</span> 0420 966 387
                  </p>
                  <p className="text-black flex items-center text-sm sm:text-base">
                    <span className="mr-2">✉️</span> info@thecaptaintaxis.com.au
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-[40px] flex justify-center lg:justify-end">
              <Image
                src="/assets/images/car-footer.png"
                alt="Taxi car illustration"
                width={200}
                height={120}
                className="w-auto h-16 sm:none  sm:h-40 lg:h-44"
              />
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-300 pt-4 gap-4">
          <p className="text-black text-xs sm:text-sm text-center sm:text-left">
            Copyright © 2024 The Captain Taxis | All Rights Reserved
          </p>

          <div className="flex space-x-3 sm:space-x-4">
            <Link
              href="#"
              className="bg-purple-900 p-2 rounded-md group transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-purple-800"
            >
              <Facebook className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="#"
              className="bg-purple-900 p-2 rounded-md hover:bg-purple-800 group transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Instagram className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="#"
              className="bg-purple-900 p-2 rounded-md hover:bg-purple-800 group transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Twitter className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="#"
              className="bg-purple-900 p-2 rounded-md hover:bg-purple-800 group transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Linkedin className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
