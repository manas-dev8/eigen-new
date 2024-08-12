import React from 'react';

const Signup = () => {
  return (
    <div className="flex justify-center pt-20 items-center min-h-screen bg-gray-500">
      <div className="w-4/5 md:w-1/2 lg:w-1/3 bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 flex justify-center items-center">Subscribe</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2"> First Name</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2"> Last Name</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block text-gray-700 mb-2">Phone</label>
            <input
              type="text"
              id="text"
              name="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 block mx-auto"
            style={{ maxWidth: '200px' }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
