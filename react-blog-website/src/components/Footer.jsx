import React from 'react'
import { Form } from 'react-router-dom'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='bg-gray-500'>
            <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
                <div className='grid mb-8 lg:grid-cols-6'>
                    <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                        <div>
                            <div><p className='font-medium tracking-wide text-gray-900'>Category</p>
                                <ul className='mt-2 space-y-2 '>
                                    <li>
                                        <a href="/" className='text-gray-900 transition-colors duration-300 hover:text-white'>Startup</a>
                                    </li>
                                    <li>
                                        <a href="/" className='text-gray-900 transition-colors duration-300 hover:text-white'>AI</a>
                                    </li>
                                    <li>
                                        <a href="/" className='text-gray-900 transition-colors duration-300 hover:text-white'>Research</a>
                                    </li>
                                    <li>
                                        <a href="/" className='text-gray-900 transition-colors duration-300 hover:text-white'>Space</a>
                                    </li>
                                    <li>
                                        <a href="/" className='text-gray-900 transition-colors duration-300 hover:text-white'>Tech</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* category2 */}
                        <div>
                            <div><p className='font-medium tracking-wide text-gray-900'>Social</p>
                                <ul className='mt-2 space-y-2 '>
                                    <li>
                                        <a href="/" className='text-gray-900 transition-colors duration-300 hover:text-orange-500'>Instagram</a>
                                    </li>
                                    <li>
                                        <a href="/" className='text-gray-900 transition-colors duration-300 hover:text-orange-500'>LinkedIn</a>
                                    </li>
                                    <li>
                                        <a href="/" className='text-gray-900 transition-colors duration-300 hover:text-orange-500'>Twitter</a>
                                    </li>
                                    <li>
                                        <a href="/" className='text-gray-900 transition-colors duration-300 hover:text-orange-500'>eigen</a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        {/* category3 */}
                        <div>
                            <div><p className='font-medium tracking-wide text-gray-900'>Necessary</p>
                                <ul className='mt-2 space-y-2 '>
                                    <li>
                                        <a href="/" className='text-gray-900 transition-colors duration-300 hover:text-orange-500'>Legal Stuff</a>
                                    </li>
                                    <li>
                                        <a href="/" className='text-gray-900 transition-colors duration-300 hover:text-orange-500'>Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/" className='text-gray-900 transition-colors duration-300 hover:text-orange-500'>Security</a>
                                    </li>
                                
                                    <li>
                                        <a href="/" className='text-gray-900 transition-colors duration-300 hover:text-orange-500'> Manage Cookies</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* category4 */}
                        {/* <div>
                            <div><p className='font-medium tracking-wide text-gray-900'>Apples</p>
                                <ul className='mt-2 space-y-2 '>
                                    <li>
                                        <a href="/" className='text-gray-900 transition-colors duration-300 hover:text-orange-500'>Web</a>
                                    </li>
                                    <li>
                                        <a href="/" className='text-gray-900 transition-colors duration-300 hover:text-orange-500'>Commerce</a>
                                    </li>
                                    <li>
                                        <a href="/" className='text-gray-900 transition-colors duration-300 hover:text-orange-500'>Music</a>
                                    </li>
                                    <li>
                                        <a href="/" className='text-gray-900 transition-colors duration-300 hover:text-orange-500'>Books</a>
                                    </li>
                                    <li>
                                        <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Ports</a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div className='w-40 pr-50'>
                            <img src="image.png" alt="" />
                        </div>

                    </div>
                    {/* category5 handles */}
                    <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                        <div><p className='font-medium tracking-wide text-gray-900'>Subscribe for Updates</p>
                        <Form className='mt-4 flex flex-col md:flex-row'>

                            <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium bg-black
                            tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-black focus:outline-none '><a href="https://forms.gle/KoNB3ThsN63iMwTy5"> Join </a></button>
                        </Form>
                        <p className='mt-4 text0sm text-white'>Join us to be updated!!!
                            
                        </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-900 sm:flex-row'>
                    <p className='text-sm mt-8 items-center text-gray-900'>Copyright 2024 | All rights reserved .</p>
                    <div className='flex items-center mt-4 space-x-4 sm:mt-8'>
                        <a href="https://x.com/_eigen_" className='text-gray-900 transition-all duration-300 hover:text-teal-400'><FaTwitter className='h-6 w-6'/></a>
                        <a href="https://www.instagram.com/_eigen__" className='text-gray-900 transition-all duration-300 hover:text-white'><FaInstagram className='h-6 w-6'/></a>
                        <a href="https://www.linkedin.com/company/linkedin-com-in-eigen-9694272a7/" className='text-gray-900 transition-all duration-300 hover:text-blue-600'><FaLinkedin className='h-6 w-6'/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
