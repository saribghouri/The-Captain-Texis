import Image from "next/image"

export default function CustomerBenefits() {
  return (
    <div className="w-full">
      <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4 md:mb-6 leading-tight">
              <span className="text-black">Book Ride With </span>
              <span className="text-[#4d2d7c]">The Captain Taxi</span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[25px] leading-relaxed max-w-6xl lg:max-w-7xl mx-auto px-4">
              Need A Ride? The Captain Taxis App Is Here To Get You Moving. With Just A Few Taps, You Can Book A
              Reliable Ride, Track Your Driver, And Reach Your Destination Safely. Whether You're Heading To The Airport
              Or Across Town, Count On Us For A Smooth And Comfortable Journey.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:h-[500px] gap-4 md:gap-6">
            <div className="w-full lg:flex-1">
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:w-[100%] lg:h-full rounded-2xl overflow-hidden">
                <Image
                  src="/assets/images/1.png"
                  alt="Captain Taxi main service image"
                  fill
                  className="object-cover w-[700px] h-[600px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                />
              </div>
            </div>

            <div className="w-full lg:flex-[2]">
              <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 h-64 sm:h-80 md:h-96 lg:h-full">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/images/2.png"
                    alt="Captain Taxi service feature 1"
                    fill
                    className="object-cover w-[280px] h-[240px]"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 22vw"
                  />
                </div>

                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/images/3.png"
                    alt="Captain Taxi service feature 2"
                    fill
                    className="object-cover w-[280px] h-[240px]"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 22vw"
                  />
                </div>

                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/images/4.png"
                    alt="Captain Taxi service feature 3"
                    fill
                    className="object-cover w-[280px] h-[240px]"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 22vw"
                  />
                </div>

                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/assets/images/5.png"
                    alt="Captain Taxi service feature 4"
                    fill
                    className="object-cover w-[280px] h-[240px]"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 22vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
