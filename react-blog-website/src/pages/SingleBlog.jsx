import React from 'react';
import { useParams } from 'react-router-dom';
import { FaClock, FaUser } from 'react-icons/fa6';
import SideBar from '../components/SideBar';
import blogsdata from "../data/blogsdata.json";

const SingleBlog = () => {
    const { id } = useParams();
    const data = blogsdata.blogs.find(blogs => blogs.id === parseInt(id)); 
    const { image, title, author, published_date, reading_time, content1,content2, content3, content4, content5,content6, content7, content8, content9, content10, content11, content12, content13 } = data;

    return (
        <div>
            <div className='py-8 bg-gray-500 text-center text-white'>
                {/* You can add some title or description here */}
            </div>
            {/* Blog details */}
            <div className='max-w-7xl mx-auto my-12 flex flex-col lg:flex-row gap-12 px-4'>
                <div className='lg:w-3/4'>
                    <img src={image} alt="Blog Image" className='w-full rounded mb-6 mt-16' />
                    <h2 className='text-3xl lg:text-5xl font-bold mb-4 text-gray-800 cursor-pointer'>{title}</h2>
                    <p className='mb-3 text-gray-600'>
                        <FaUser className='inline-flex items-center mr-2' /> {author} | {published_date}
                    </p>
                    <p className='mb-3 text-gray-600'>
                        <FaClock className='inline-flex items-center mr-2' /> {reading_time}
                    </p>
                    <div className='text-base lg:text-lg text-gray-500 mb-6'>{content1}</div>
                    <div className='text-base lg:text-lg text-gray-500 mb-6'>{content2}</div>
                    <div className='text-base lg:text-lg text-gray-500 mb-6'>{content3}</div>
                    <div className='text-base lg:text-lg text-gray-500 mb-6'>{content4}</div>
                    <div className='text-base lg:text-lg text-gray-500 mb-6'>{content5}</div>
                    <div className='text-base lg:text-lg text-gray-500 mb-6'>{content6}</div>
                    <div className='text-base lg:text-lg text-gray-500 mb-6'>{content7}</div>
                    <div className='text-base lg:text-lg text-gray-500 mb-6'>{content8}</div>
                    <div className='text-base lg:text-lg text-gray-500 mb-6'>{content9}</div>
                    <div className='text-base lg:text-lg text-gray-500 mb-6'>{content10}</div>
                    <div className='text-base lg:text-lg text-gray-500 mb-6'>{content11}</div>
                    <div className='text-base lg:text-lg text-gray-500 mb-6'>{content12}</div>
                    <div className='text-base lg:text-lg text-gray-500 mb-6'>{content13}</div>
                </div>
                <div className='lg:w-1/4'>
                    <SideBar />
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;
