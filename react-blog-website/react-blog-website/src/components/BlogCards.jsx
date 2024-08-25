import React from 'react'
import {Link} from 'react-router-dom'
import {FaUser} from 'react-icons/fa6'
import blogsdata from "../data/blogsdata.json"
const BlogCards = () => {
    
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 x'>
      {blogsdata.blogs.map((blogs)=> (
            <Link to={`/blogs/${blogs.id}`} key={blogs.id} className='p-3 shadow-lg rounded cursor-pointer'>
            <div>
                <img src={blogs.image} alt="" className=''/>
            </div>
            <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blogs.title}</h3>
            <p className="mb-2 text-gray-700"><FaUser className='inline-flex items-center'/>{blogs.author}</p>
            <p className='text-sm text-gray-500'>Published : {blogs.published_date}</p>
        </Link>
      ))}
    </div>
  )
}

export default BlogCards
