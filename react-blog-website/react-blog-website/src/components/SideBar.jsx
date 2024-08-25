import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import blogsdata from "../data/blogsdata.json"

const SideBar = () => {

    return (
        <div>
            <div className='py-8'>
                <h3 className='text-2xl font-semibold px-2'>Latest Blogs</h3>
                <div>
                    {blogsdata.blogs.slice(0, 5).map((blogs) => (
                        <div key={blogs.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                            <h4 className='font-medium mb-2'>{blogs.title}</h4>
                            <Link to={`/blogs/${blogs.id}`} className='text-base pb-2 hover:text-blue-500 inline-flex items-center py-1'>
                                Read More <FaArrowRight className='mt-1 ml-2' />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className='text-2xl font-semibold px-4 mt-20'>Popular Blogs</h3>
                <div>
                    {blogsdata.blogs.slice(6, 10).map((blogs) => (
                        <div key={blogs.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                            <h4 className='font-medium mb-2'>{blogs.title}</h4>
                            <Link to={"/"} className='text-base pb-2 hover:text-orange-500 inline-flex items-center py-1'>
                                Read More <FaArrowRight className='mt-1 ml-2' />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
