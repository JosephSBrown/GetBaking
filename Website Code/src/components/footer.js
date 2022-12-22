import React from 'react'
import Logo from '../assets/getbakinglogo.png'
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div class="p-4 shadow md:px-6 md:py-8 bg-pink-400 w-full">
            <div class="sm:flex sm:items-center sm:justify-between">
                <NavLink className="flex items-center mb-4 sm:mb-0" to='/GetBaking'>
                    <img src={Logo} class="mr-3 h-20 w-20" alt="Get Baking Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white hover:no-underline">Get Baking!</span>
                </NavLink>
                <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
                    <li><NavLink className="mr-4 text-white hover:bg-white hover:text-black hover:no-underline px-3 py-2 rounded-md text-lg" to="/GetBaking">Home</NavLink></li>
                    <li><NavLink className="mr-4 text-white hover:bg-white hover:text-black hover:no-underline px-3 py-2 rounded-md text-lg" to="/GetBaking/blog">Blog</NavLink></li>
                    <li><NavLink className="mr-4 text-white hover:bg-white hover:text-black hover:no-underline px-3 py-2 rounded-md text-lg" to="/GetBaking/recipes">Recipes</NavLink></li>
                </ul>
            </div>
            <div class="w-screen flex">
                <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
                   <li><a href="https://facebook.com/" className="mr-4 text-white px-3 py-2 rounded-md hover:text-black"><i class="fa-brands fa-square-facebook fa-3x" aria-label="Facebook"></i></a></li>
                    <li><a href="https://instagram.com/" className="mr-4 text-white px-3 py-2 rounded-md hover:text-black" aria-label="Instagram"><i class="fa-brands fa-instagram fa-3x"></i></a></li>
                    <li><a href="mailto:p110076169+getbaking@gmail.com" className="mr-4 text-white px-3 py-2 rounded-md hover:text-black" aria-label="Gmail"><i class="fa-regular fa-envelope fa-3x"></i></a></li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 w-11/12 sm:mx-auto lg:my-8" />
            <a class="block text-sm text-white">© 2022 <NavLink className="hover:underline text-white" to='/GetBaking'>Get Baking</NavLink></a>
        </div>

    );
  }

  export default Footer;