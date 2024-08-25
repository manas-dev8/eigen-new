import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaFacebook, FaInstagram, FaInvision, FaLinkedin, FaTwitter, FaXmark } from "react-icons/fa6";
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const togglemenu =()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    const navItems =[
        {path: '/', link: "Home"},
        {path: '/services', link: "Community"},
        {path: '/about', link: "About"},
        {path: '/blogs', link: "Blogs"},
    ]

    const userDetails = [
        {path: '/signup' , link: "Signup"},
        {path: '/login', link: "Login"}
    ]
    
  return (
    <header className= 'bg-gray-500 text-white fixed top0 left-0 right-0'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <img src="e.png" alt="eigen" className='w-28'/>

            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItems.map(({path,link})=> <li className='text-white'key={path}>
                        <NavLink className={({ isActive, isPending})=>
                        isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                        } to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>
            <div className='font-bold text-black lg:flex gap-4 items-center hidden '>
                <a href="https://www.linkedin.com/company/linkedin-com-in-eigen-9694272a7/" className=' font-bold hover:text-white'><FaLinkedin /></a>
                <a href="https://www.instagram.com/_eigen__" className='hover:text-white'><FaInstagram /></a>
                <a href="https://x.com/_eigen_" className='hover:text-white'><FaTwitter /></a>
                <button   className='bg-black px-6 py-2 font-medium text-white rounded hover:bg-white hover:text-black transition-all duration-200 ease-in'><a href="https://forms.gle/KoNB3ThsN63iMwTy5">Join</a></button>
            </div>
        </nav>

        {/* menu items for mobile */}
        <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150 " : "hidden"}`}>
                {
                    navItems.map(({path,link})=> <li className='text-black 'key={path}>
                        <NavLink onClick={togglemenu} to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>
        </div>

    </header>
  )
}

export default Navbar
