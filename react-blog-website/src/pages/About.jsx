import React from 'react';

const About = () => {
  return (
    <div>
      <div className='pt-16 bg-gray-500 text-center text-white flex flex-col items-center justify-center'>
        <h1 className='text-4xl lg:text-7xl leading-snug font-bold mt-16'>About eigen</h1>
        {/* Optional: Add a description or image here if needed */}
      </div>

      <div className='py-12 bg-gray-500 text-white'>
        <p className='text-lg lg:text-xl font-bold px-4 lg:px-32'>
          We're building a platform that brings together people from different science and technology fields to collaborate, innovate, and grow. It’s more than just a community; it’s a space where ideas come to life, and projects with real impact are born. Whether you’re into computer science, engineering, biology, or any other field, you’ll find others here who are just as passionate about exploring new possibilities.
        </p>
        <br />
        <p className='text-lg lg:text-xl font-bold px-4 lg:px-32'>
          We believe in the power of working together, combining different perspectives to push boundaries and drive meaningful change. This platform is designed to encourage collaboration across disciplines, helping us tackle real-world problems and develop solutions that could shape the future.
        </p>
        <br />
        <p className='text-lg lg:text-xl font-bold px-4 lg:px-32'>
          We’re a group of innovators and changemakers, all driven by a shared goal of making a difference. Join us as we explore, learn, and discover together. After all, we’re just humans trying to understand what it really means to be human.
        </p>
        <br />
      </div>

      <div className="flex flex-col lg:flex-row items-center bg-gray-500 px-4 lg:px-56">
        <div className="flex flex-col space-y-2 text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-0">
          <div>hey!</div>
          <div>its us, Manas and Shubhranshu :)</div>
          <div>let's make things work.</div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <img
            src="manass.png"
            alt="Manas"
            className="w-full h-auto max-w-xs lg:max-w-md mb-4 lg:mb-0"
          />
          <img
            src="shubh.png"
            alt="Shubhranshu"
            className="w-full h-auto max-w-xs lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
