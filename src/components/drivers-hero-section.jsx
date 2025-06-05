import React from 'react';
import { Button } from 'antd';
import Head from 'next/head';

const DriversHeroSection = () => {
  return (
    <div
      className="relative w-full bg-contain mt-[100px] bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/assets/images/1b52fc11-447c-45f0-a09e-d27517337d4d.jfif')" }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[90%] flex flex-col items-center lg:items-start">
          <div className="w-full text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
              Drive with Confidence. <span className='font-normal '>Earn on Your Terms.</span>
              <br />
              Be your own boss.
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed mb-6 max-w-full sm:max-w-[80%] lg:max-w-[40%] mx-auto lg:mx-0">
              Join The Captain Taxis And Take Control Of Your Schedule. Whether
              You're Full-Time Or Part-Time, We've Got Your Back.
            </p>

            <div className="mb-8 mt-[80px]">
              <button className="bg-white text-[#4d2d7c] font-bold drivers-shadow text-base sm:text-lg lg:text-xl px-6 sm:px-8 py-2 sm:py-3 rounded-[10px] hover:bg-[#4d2d7c] hover:text-[#ffffff]  transition-colors">
                Apply Now
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-[80px] lg:justify-start">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <div className="bg-black flex items-center px-4 py-2 rounded-md cursor-pointer transition-colors hover:bg-gray-800">
                  <img
                    className="w-6 h-6 sm:w-7 sm:h-7 mr-3"
                    src="assets/images/hd-google-play-playstore-logo-symbol-png-701751694777134cuw3jc7voo-removebg-preview.png"
                    alt="Google Play"
                  />
                  <div className="text-white text-left">
                    <div className="text-xs sm:text-sm font-normal leading-none">GET IT ON</div>
                    <div className="text-sm sm:text-base font-semibold leading-tight">Google Play</div>
                  </div>
                </div>

                <div className="bg-black flex items-center px-4 py-2 rounded-md cursor-pointer transition-colors hover:bg-gray-800">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 mr-3" viewBox="0 0 24 24">
                    <path
                      fill="#fff"
                      d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"
                    />
                  </svg>
                  <div className="text-white text-left">
                    <div className="text-xs sm:text-sm font-normal leading-none">Download on the</div>
                    <div className="text-sm sm:text-base font-semibold leading-tight">App Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
            {/* Left Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gray-200 rounded-2xl transform translate-x-4 translate-y-4 z-0"></div>
              <div className="relative bg-[#1A2526] text-white p-8 sm:p-8 lg:p-16 rounded-2xl z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                  Why Drive with The Captain Taxis?
                </h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Enjoy the freedom to choose your hours, earn great income, and get full support every step of the way. Driving with us means more flexibility, better tools, and a reliable team behind you.
                </p>
              </div>
            </div>

            {/* Right Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Benefit 1 */}
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1A2526] mb-2 sm:mb-3">Flexible Hours</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Drive when you want, work around your schedule.
                </p>
              </div>

              {/* Benefit 2 */}
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1A2526] mb-2 sm:mb-3">Competitive Earnings</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Earn a great income with transparent pricing and regular payouts.
                </p>
              </div>

              {/* Benefit 3 */}
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1A2526] mb-2 sm:mb-3">Easy-to-Use App</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Manage your rides efficiently with our intuitive driver app.
                </p>
              </div>

              {/* Benefit 4 */}
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1A2526] mb-2 sm:mb-3">Safety First</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Your safety is our top priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='flex justify-center items-center gap-12 '>
        <div className='w-[20%] bg-white  flex flex-col gap-4'  >
          <div className='bg-[#ececec] p-15 rounded-2xl h-[40vh]'>
            <div className='flex justify-between'>
              <img src="assets\images\Fixed.svg" alt="" />
              <h1 className='text-[50px]'>01</h1>
            </div>
            <div>

              <h1>Check Eligibility</h1>
              <p>Review our simple driver criteria and vehicle requirements to get started.</p>
            </div>
          </div>
          <div className='bg-[#ececec] p-15 rounded-2xl h-[40vh]'>
            <div className='flex justify-between'>
              <img src="assets\images\Fixed.svg" alt="" />
              <h1 className='text-[50px]'>02</h1>
            </div>
            <div>

              <h1>Check Eligibility</h1>
              <p>Review our simple driver criteria and vehicle requirements to get started.</p>
            </div>
          </div>
        </div>
        <div className='w-[30%]  flex flex-col gap-4 '>
          <div className='bg-[#ffffff] rounded-2xl text-center h-[40vh] '>
            <h1 className='text-[70px] leading-20 font-bold'>How to Become <br></br>a <span className='text-[#4d2d7c]'>Captain?</span></h1>
            <p className='text-[20px] leading-8 mt-[30px]'>Joining The Captain Taxis is quick and stress-free. From sign-up to your first ride, we’ve made
              everything simple so you can focus on what matters — driving and earning.
              Here’s how you can get on the road with us in no time.</p>
            <div className="flex justify-center gap-4 mt-4">
        <button className="bg-[#4d2d7c] w-[50%] text-white px-6 py-3 rounded-lg capitalize font-semibold">Drive with Captain</button>
        <button className="bg-white  w-[40%] text-gray-700 px-6 py-3 rounded-lg capitalize font-semibold border border-gray-300">Contact Us</button>
      </div>
          </div>
          <div className='bg-[#ececec]  rounded-2xl'>
            <img src="assets/images/pic. back.png" alt="" />
          </div>
        </div>
        <div className='w-[20%] bg-white  flex flex-col gap-4'>
          <div className='bg-[#ececec] p-15 rounded-2xl h-[40vh] '>
            <div className='flex justify-between '>
              <img src="assets\images\Fixed.svg" alt="" />
              <h1 className='text-[50px]'>03</h1>
            </div>
            <div>

              <h1>Check Eligibility</h1>
              <p>Review our simple driver criteria and vehicle requirements to get started.</p>
            </div>
          </div>
          <div className='bg-[#ececec] p-15 rounded-2xl h-[40vh]'>
            <div className='flex justify-between'>
              <img src="assets\images\Fixed.svg" alt="" />
              <h1 className='text-[50px]'>04</h1>
            </div>
            <div>

              <h1>Check Eligibility</h1>
              <p>Review our simple driver criteria and vehicle requirements to get started.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default DriversHeroSection;