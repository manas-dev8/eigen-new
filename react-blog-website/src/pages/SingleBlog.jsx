import React from 'react';
import { useParams } from 'react-router-dom';
import { FaClock, FaUser } from 'react-icons/fa6';
import SideBar from '../components/SideBar';
import blogsdata from "../data/blogsdata.json";

const SingleBlog = () => {
    const { id } = useParams();
    const data = blogsdata.blogs.find(blogs => blogs.id === parseInt(id)); 
    const { image, title, author, published_date, reading_time, content } = data;

    return (
        <div>
            <div className='py-8 bg-gray-500 text-center text-white'>
                {/* You can add some title or description here */}
            </div>
            {/* Blog details */}
            <div className='max-w-7xl mx-auto my-12 flex flex-col lg:flex-row gap-12 px-4'>
                <div className='lg:w-3/4'>
                    <img src={image} alt="Blog Image" className='w-full rounded mb-6 mt-8' />
                    <h2 className='text-3xl lg:text-5xl font-bold mb-4 text-gray-800 cursor-pointer'>{title}</h2>
                    <p className='mb-3 text-gray-600'>
                        <FaUser className='inline-flex items-center mr-2' /> {author} | {published_date}
                    </p>
                    <p className='mb-3 text-gray-600'>
                        <FaClock className='inline-flex items-center mr-2' /> {reading_time}
                    </p>
                    <p className='text-base lg:text-lg text-gray-500 mb-6'>{content}</p>
                </div>
                <div className='lg:w-1/4'>
                    <SideBar />
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;
