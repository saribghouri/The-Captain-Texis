"use client"

import { motion } from "framer-motion"

const ServicesSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 150 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 3.5, ease: "easeOut" },
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 4, ease: "easeOut" },
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 4, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.8,
      },
    },
  }

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const slowSlideIn = {
    initial: { opacity: 0, x: -250, scale: 0.6 },
    animate: { opacity: 1, x: 0, scale: 1 },
    transition: { duration: 4.5, ease: "easeOut" },
  }

  const slowSlideInRight = {
    initial: { opacity: 0, x: 250, scale: 0.6 },
    animate: { opacity: 1, x: 0, scale: 1 },
    transition: { duration: 4.5, ease: "easeOut" },
  }

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* App Download Section */}
      <motion.div
        className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* Phone mockup */}
          <motion.div className="relative w-full lg:w-1/2 order-2 lg:order-1" variants={slowSlideIn}>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] flex items-center justify-center">
              <motion.img
                src="assets/images/app.png"
                alt="Ride app mockup showing the mobile application interface"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain"
                variants={floatingAnimation}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-4 sm:space-y-6 order-1 lg:order-2 text-center lg:text-left"
            variants={slowSlideInRight}
          >
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight"
              variants={fadeInUp}
            >
              <motion.span
                className="text-black"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 2.5 }}
              >
                Download The App
              </motion.span>
              <br />
              <motion.span
                className="text-[#432469]"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 2.5 }}
              >
                Your Ride <span className="text-black">Is Just A</span>
              </motion.span>
              <br />
              <motion.span
                className="text-black"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6, duration: 2.5 }}
              >
                Tap Away
              </motion.span>
            </motion.h2>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mt-6 sm:mt-8 justify-center lg:justify-start"
              variants={staggerContainer}
            >
              <motion.div
                className="flex items-center gap-3 justify-center lg:justify-start"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                  <img
                    src="assets/images/Transparent Pricing (1).svg"
                    alt="Transparent pricing icon"
                    className="w-full h-full"
                  />
                </motion.div>
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-[#432469]">
                  Transparent Pricing
                </span>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 justify-center lg:justify-start"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                  <img
                    src="assets/images/Live Driver Tracking.svg"
                    alt="Live driver tracking icon"
                    className="w-full h-full"
                  />
                </motion.div>
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-[#432469]">
                  Live Driver Tracking
                </span>
              </motion.div>
            </motion.div>

            <motion.div className="pt-4 sm:pt-6 flex justify-center lg:justify-start" variants={fadeInUp}>
              <motion.button
                className="bg-[#4d2d7c] hover:bg-[#3d1f5c] text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(77, 45, 124, 0.3)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Ride Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Driver Section */}
      <motion.div
        className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* Content */}
          <motion.div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left" variants={fadeInLeft}>
            <motion.div className="space-y-2 sm:space-y-4" variants={staggerContainer}>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                variants={fadeInUp}
              >
                <motion.span
                  className="text-black"
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 3 }}
                >
                  Drive With{" "}
                </motion.span>
                <br />
                <motion.span
                  className="text-[#432469]"
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8, duration: 3 }}
                >
                  The Captain Taxi{" "}
                </motion.span>
                <br />
                <motion.span
                  className="text-black"
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.6, duration: 3 }}
                >
                  Be Your Own Boss
                </motion.span>
              </motion.h2>
              <motion.h3
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 sm:mt-6 text-black"
                variants={fadeInUp}
              >
                Move Sydney Sustainably
              </motion.h3>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-700 mt-4 sm:mt-6"
              variants={fadeInUp}
            >
              {"We're here to help, anytime Learn more"}
            </motion.p>

            <motion.div className="pt-4 sm:pt-6 flex justify-center lg:justify-start" variants={fadeInUp}>
              <motion.button
                className="bg-[#4d2d7c] hover:bg-[#3d1f5c] text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(77, 45, 124, 0.3)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Apply to Drive
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Driver Image */}
          <motion.div className="relative w-full lg:w-1/2" variants={fadeInRight}>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] flex items-center justify-center">
              <motion.img
                src="assets/images/driver-men.jfif"
                alt="Professional driver representing The Captain Taxi service"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-cover rounded-2xl shadow-lg"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
                variants={{
                  animate: {
                    y: [0, -5, 0],
                    transition: {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  },
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default ServicesSection
