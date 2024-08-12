import React from 'react'

const Pagination = ({onPageChange, currentPage, blogs, pageSize}) => {
    const totalpages = Math.ceil(blogs.length / pageSize)
    const renderPaginationLinks = ()=>{
        return Array.from({length: totalpages}, (_, i)=> i+1).map((pageNumber)=>(
            <li className= {pageNumber === currentPage? "activePagination": ""} key={pageNumber}>
                <a href="#" onClick={()=> onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    }
  return (
    <ul className='pagination my-8 flex flex-wrap gap-4'>
      <li>
        <button className='cursor-pointer' onClick={()=> onPageChange(currentPage - 1)} disabled={currentPage ===1}>Previous</button>
      </li>
      <div className='flex gap-1'>{renderPaginationLinks()}</div>
      <li>
        <button className='cursor-pointer' onClick={()=> onPageChange(currentPage+1)} disabled={currentPage === totalpages}>Next</button>
      </li>
    </ul>
  )
}

export default Pagination
