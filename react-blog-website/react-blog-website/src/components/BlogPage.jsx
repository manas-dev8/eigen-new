import React, { act, useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar'

const BlogPage = () => {
    const [blogs, setblogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12 //BLOGS PER PAGE
    const [selectedCategory, setselectedCategory] = useState(null);
    const [activeCategory, setactiveCategory]=useState(null)


    useEffect(()=>{
        async function fetchBlogs(){
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

            // filter by category
            if(selectedCategory){
                url += `&category= ${selectedCategory}`
            }
            const response = await fetch(url);
            const data = await response.json();
            setblogs(data);
        }

        fetchBlogs();
    }, [ selectedCategory])

    // page changing size
    const handlePageChange = (pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    const handleCategorychange = (category)=>{
        setselectedCategory(category);
        setCurrentPage(1);
        setactiveCategory(category);
    }

  return (
    <div>
      {/* {category section} */}
      <div><CategorySelection onSelectCategory = {handleCategorychange}selectedCategory={selectedCategory} activeCategory={activeCategory}/></div>

      {/* blog cards section */}

      <div className='flex flex-col lg:flex-row gap-8'>
        <BlogCards/>

    {/* sidebar components */}
        <div>
          <SideBar/>
        </div>
      </div>

      {/* pagination section */}
      <div><Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
      </div>
    </div>
  )
}
 
export default BlogPage 