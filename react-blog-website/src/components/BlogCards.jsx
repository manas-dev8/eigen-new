import React from 'react'
import {Link} from 'react-router-dom'
import {FaUser} from 'react-icons/fa6'

const BlogCards = ({blogs, currentPage, selectedCategory, pageSize}) => {
    const filteredBlogs = blogs
    .filter((blogs)=>!selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage -1)*pageSize, currentPage * pageSize );
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 x'>
      {
        filteredBlogs.map((blog) => <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-3 shadow-lg rounded cursor-pointer'>
            <div>
                <img src={blog.image} alt="" className=''/>
            </div>
            <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
            <p className="mb-2 text-gray-700"><FaUser className='inline-flex items-center'/>{blog.author}</p>
            <p className='text-sm text-gray-500'>Published : {blog.published_date}</p>
        </Link>)
      }
    </div>
  )
}

export default BlogCards
