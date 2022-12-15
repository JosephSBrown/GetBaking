import React from 'react'

function Footer() {
    return (
        <div class="p-4 shadow md:px-6 md:py-8 bg-pink-400 w-screen">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="./index.html" class="flex items-center mb-4 sm:mb-0">
                    <img src="./Images/Moduro.png" class="mr-3 h-20" alt="Get Baking Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white hover:no-underline">Get Baking!</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
                    <li><a href="#" class="mr-4 text-white hover:bg-white hover:text-black hover:no-underline px-3 py-2 rounded-md text-lg">Home</a></li>
                    <li><a href="#" class="mr-4 text-white hover:bg-white hover:text-black hover:no-underline px-3 py-2 rounded-md text-lg">Our Aim</a></li>
                    <li><a href="#" class="mr-4 text-white hover:bg-white hover:text-black hover:no-underline px-3 py-2 rounded-md text-lg">Recipes</a></li>
                </ul>
            </div>
            <div class="w-screen flex">
                <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
                    <li><a href="#" class="mr-4 text-white px-3 py-2 rounded-md hover:text-black"><i class="fa-brands fa-square-facebook fa-3x"></i></a></li>
                    <li><a href="#" class="mr-4 text-white px-3 py-2 rounded-md hover:text-black"><i class="fa-brands fa-instagram fa-3x"></i></a></li>
                    <li><a href="mailto:p110076169+getbaking@gmail.com" class="mr-4 text-white px-3 py-2 rounded-md hover:text-black"><i class="fa-regular fa-envelope fa-3x"></i></a></li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 w-11/12 sm:mx-auto lg:my-8" />
            <span class="block text-sm text-white sm:text-center">© 2022 <a href="#" class="hover:underline text-white">Get Baking</a></span>
        </div>

    );
  }

  export default Footer;