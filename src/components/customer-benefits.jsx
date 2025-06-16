"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function CustomerBenefits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="w-full">
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-[80%] mx-auto">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4 md:mb-6 leading-tight"
              variants={itemVariants}
            >
              <motion.span
                className="text-black inline-block"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Book Ride With{" "}
              </motion.span>
              <motion.span
                className="text-[#4d2d7c] inline-block"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                The Captain Taxi
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[25px] leading-relaxed max-w-6xl lg:max-w-7xl mx-auto px-4"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Need A Ride? The Captain Taxis App Is Here To Get You Moving. With Just A Few Taps, You Can Book A
              Reliable Ride, Track Your Driver, And Reach Your Destination Safely. Whether You're Heading To The Airport
              Or Across Town, Count On Us For A Smooth And Comfortable Journey.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row lg:h-[500px] gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div className="w-full lg:flex-1" variants={imageVariants}>
              <motion.div
                className="relative w-full h-64 sm:h-80 md:h-96 lg:w-[100%] lg:h-full rounded-2xl overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/assets/images/1.png"
                  alt="Captain Taxi main service image"
                  fill
                  className="object-cover w-[700px] h-[600px] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>

            <motion.div className="w-full lg:flex-[2]" variants={containerVariants}>
              <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 h-64 sm:h-80 md:h-96 lg:h-full">
                {[
                  { src: "/assets/images/2.png", alt: "Captain Taxi service feature 1" },
                  { src: "/assets/images/3.png", alt: "Captain Taxi service feature 2" },
                  { src: "/assets/images/4.png", alt: "Captain Taxi service feature 3" },
                  { src: "/assets/images/5.png", alt: "Captain Taxi service feature 4" },
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative rounded-2xl overflow-hidden"
                    variants={gridItemVariants}
                    whileHover={{
                      scale: 1.05,
                      zIndex: 10,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    custom={index}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover w-[280px] h-[240px] transition-all duration-500"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 22vw"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#4d2d7c]/30 to-transparent opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 opacity-0 rounded-2xl"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
