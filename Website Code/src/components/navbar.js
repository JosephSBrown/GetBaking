import React, {useState} from 'react';
import Logo from '../assets/getbakinglogo.png';
import {NavLink} from 'react-router-dom';
import { Animated } from 'react-animated-css';

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    return (
        <div>
            <nav class="bg-pink-400 drop-shadow-xl w-full">
                <div class="flex items-center justify-center px-4 py-4 flow-root">
                    <Animated animationIn='fadeInLeft'>
                        <div class="flex float-left">
                            <NavLink className="flex items-center mb-4 sm:mb-0 hover:no-underline" to="/GetBaking">
                                <img src={Logo} className="mr-3 h-24 w-24" alt="Get Baking Logo" />
                                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Get Baking!</span>
                            </NavLink>
                        </div>
                    </Animated>   
                    <Animated animationIn='fadeInLeft'>
                        <div class="flex space-x-4 pt-7 float-right">
                            <NavLink className="hidden text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:no-underline lg:flex text-md" to='/GetBaking'>Home</NavLink>
                            <NavLink className="hidden text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:no-underline md:flex text-md" to='/GetBaking/blog'>Blog</NavLink>
                            <NavLink className="hidden text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:no-underline sm:flex text-md" to='/GetBaking/recipes'>Recipes</NavLink>
                            <a className="text-white px-3 py-2 rounded-md hover:text-black hover:bg-white hover:cursor-pointer" onClick={handleClick}><i class={click ? 'fa-solid fa-times fa-lg' : 'fa-solid fa-bars fa-lg'}></i></a>
                        </div>
                    </Animated>    
                        
                </div>
            </nav>
                <nav class={click ? 'fixed bg-white w-3/4 h-screen right-0 z-50 lg:w-1/4' : 'hidden'}>
                    <Animated animationIn='fadeInRight'>
                        <ul class="px-10 py-10">
                            <h1 class="py-2">Web Pages</h1>
                                <li class="px-3 lg:hidden hover:underline hover:cursor-pointer"><NavLink to='/GetBaking'>Home</NavLink></li>
                                <li class="px-3 md:hidden hover:underline hover:cursor-pointer"><NavLink to='/GetBaking/blog'>Blog</NavLink></li>
                                <li class="px-3 sm:hidden hover:underline hover:cursor-pointer"><NavLink to='/GetBaking/recipes'>Recipes</NavLink></li>
                                <li class="px-3 hover:underline hover:cursor-pointer"><NavLink to='/GetBaking/about'>Our Aim</NavLink></li>
                                <li class="px-3 hover:underline hover:cursor-pointer"><NavLink to='/GetBaking/contact'>Contact Us</NavLink></li>
                        </ul>
                        </Animated>
                </nav>
        </div>

    );
  }

  export default Navbar;