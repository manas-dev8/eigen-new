import React from 'react';
import { useParams } from 'react-router-dom';
import blogsdata from "../data/blogsdata.json"

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogsdata.blogs.find(blogs => blogs.id === parseInt(id));
    console.log(blog)
    

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            {/* Display other blog details as needed */}
        </div>
    );
};

export default BlogDetails;
