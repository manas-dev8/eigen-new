import React from 'react'

const About = () => {
  return (
    <div>
      <div className='pt-34 bg-gray-500 text-center text-white flex flex-wrap  items-center justify-center'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>About</h1>
        <div className=" w-[400px]">
          <img src="image.png" alt="Description of image" />
        </div>

      </div>

      <div className='py-12 bg-gray-500 text-white'>
        <p className='text-xl font-bold px-32'>We're building a platform that brings together people from different science and technology fields to collaborate, innovate, and grow. It’s more than just a community; it’s a space where ideas come to life, and projects with real impact are born. Whether you’re into computer science, engineering, biology, or any other field, you’ll find others here who are just as passionate about exploring new possibilities.        </p><br />
        <p className='text-xl font-bold px-32'>
          We believe in the power of working together, combining different perspectives to push boundaries and drive meaningful change. This platform is designed to encourage collaboration across disciplines, helping us tackle real-world problems and develop solutions that could shape the future.
        </p><br />
        <p className='text-xl font-bold px-32'>
          We’re a group of innovators and changemakers, all driven by a shared goal of making a difference. Join us as we explore, learn, and discover together. After all, we’re just humans trying to understand what it really means to be human.</p><br />
      </div>

      <div className="flex items-center bg-gray-500 justify-between">
        <div className="flex flex-col space-y-2 bg-gray-500 px-56 text-5xl font-bold text-white">
          <div>hey!</div>
          <div>its us, Manas and Shubhranshu :)</div>
          <div>let's make things work.</div>
        </div>
        <div className="flex justify-end bg-gray-500">
          <img src="manas.png" alt="Manas" className="w-[300px] mr-2" />
          <img src="shubh.png" alt="Shubhranshu" className="w-[300px]" />
        </div>
      </div>
    


    </div>
  )
}

export default About
