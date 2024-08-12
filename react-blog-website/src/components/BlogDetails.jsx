import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../../../modern-react-js-blog-starter-files/api/blogsData.json'; // Adjust the path as necessary

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogData.find(blog => blog.id === parseInt(id));

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
