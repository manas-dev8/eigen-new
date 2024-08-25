import React from 'react'
import Banner from "../components/Banner"

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Banner />
      <div className='bg-gray-500 text-white font-bold text-3xl sm:text-5xl px-4 sm:px-20 flex flex-wrap'>
        
        {/* Adjusted for mobile text cut-off */}
        <div className='py-8 sm:py-16 w-full text-center sm:text-left'>
          <p className='text-lg sm:text-5xl'>Every nerd needs a community where they can be a geek.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 px-4 sm:px-40 py-10">
          <img src="eigen re.png" alt="" className="w-3/4 sm:w-2/6" />
          <p className="text-center sm:text-left flex-wrap">is your place to be and build cool stuff</p>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <p className='text-white font-bold text-3xl sm:text-5xl py-8 sm:py-24 text-center'>Find people to work with you on your project.</p>
          <img className='px-4 sm:px-10 w-full sm:w-auto' src="sam.png" alt="" />
        </div>

        {/* Jensen Huang Section */}
        <div className="w-full">
          <div className="flex flex-col-reverse sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <p className="text-white font-bold text-3xl sm:text-5xl text-center sm:text-right">
              And we talk about everything happening in the world of tech.
            </p>
            <img src="jensen.png" alt="" className="w-full sm:w-auto sm:mr-4" />
          </div>
        </div>

        {/* Elon Musk quote and image rearrangement */}
        <div className="w-full flex flex-col sm:flex-row justify-center items-center sm:space-x-4 py-4 sm:space-y-0">
          <img src="elon.png" alt="" className="w-full sm:w-auto" />
          <p className="text-white font-bold text-3xl sm:text-5xl text-center sm:text-left">
            Be part of the hood!
          </p>
        </div>

        <div className="w-full flex justify-center sm:justify-end">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
            <img src="sundar.png" alt="" className="w-full sm:w-auto" />
            <p className="text-white font-bold text-3xl sm:text-5xl text-center sm:text-right py-8 sm:py-44">
              Organise and gather tech beef people around your place
            </p>
          </div>
        </div>
      </div>
      <div className='w-full bg-black h-1'></div>
    </div>
  )
}

export default Home
