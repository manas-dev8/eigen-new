import React from 'react'
import Banner from "../components/Banner"
import BlogPage from '../components/BlogPage'

const Home = () => {
  return (
    <div>
      <Banner />
      <div className='bg-gray-500 text-white font-bold text-5xl px-20 flex flex-wrap'>
        <div className='py-16'>
        Every nerd needs a community
        where they can be a geek.
        </div>

        <div className="flex items-center space-x-4 px-40 py-10 ">
          <img src="eigen re.png" alt="" className="flex-shrink-0 w-2/6 " />
          <p className=" flex flex-wrap">is your place to be and build cool stuff</p>
        </div>
        <div className="flex items-center space-x-4">
          <p className='text-white font-bold text-5xl right-6 py-32 flex justify-center items-center text-center '>Find people to
            work with you on your project.</p>
          <img className='px-10' src="sam.png" alt="" />

        </div>
        <div className="w-full">
          <div className="flex items-center ">
            <img src="jensen.png" alt="" className="mr-4" />
            <p className="text-white font-bold text-5xl text-right">
              And we talk about everything happening in the world of tech.
            </p>
          </div>
        </div>

        <div className="w-full  flex justify-center">
          <div className="flex items-center space-x-4">
            <p className="text-white font-bold text-5xl">
              Be part of the hood!
            </p>
            <img src="elon.png" alt="" />
          </div>
        </div>


        <div className="w-full flex justify-end">
          <div className="flex items-center space-x-4 w-full">
            <img src="sundar.png" alt="" />
            <p className="text-white font-bold text-5xl text-right py-44">
              Organise and gather tech beef people around your place
            </p>
          </div>
        </div>

      </div>
      <div className='w-full bg-black h-1 '>

      </div>
      <div className='mx-w-7xl mx-auto '>
        <BlogPage />
      </div>
    </div>
  )
}

export default Home