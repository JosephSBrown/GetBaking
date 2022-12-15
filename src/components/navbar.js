import React, {useState} from 'react'

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    return (
        <div>
            <nav class="bg-pink-400 drop-shadow-xl">
                <div class="flex items-center justify-center px-4 py-4 flow-root">
                    <div class="flex float-left">
                        <a href="./index.html" class="flex items-center mb-4 sm:mb-0 hover:no-underline">
                            <img src="./Images/Moduro.png" class="mr-3 h-20" alt="Get Baking Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Get Baking!</span>
                        </a>
                    </div>
                    <div class="flex space-x-4 py-4 float-right">
                        <a href="#" class="text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:no-underline">Home</a>
                        <a href="#" class="text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:no-underline">Our Aim</a>
                        <a href="#" class="text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:no-underline">Recipe</a>
                        <a href="#" class="text-white px-3 py-2 rounded-md hover:text-black hover:bg-white" onClick={handleClick}><a class={click ? 'fa-solid fa-times fa-lg' : 'fa-solid fa-bars fa-lg'}></a></a>
                    </div>
                </div>
            </nav>
            <nav class={click ? 'block fixed bg-white w-1/4 h-screen right-0 z-50' : 'hidden'} onClick={handleClick}>
                <ul class="px-10 py-10">
                    <h1 class="py-2">Web Pages</h1>
                        <li class="hidden py-3">Home</li>
                        <li class="hidden">Our Aim</li>
                        <li class="hidden">Recipes</li>
                        <li class="px-3">Contact Us</li>
                    <h1 class="py-2 pt-8">Accessibility</h1> 
                        <li class="px-3">Language</li>
                        <li class="px-3">Text Size</li>
                        <li class="px-3">Measurements</li>
                </ul>
            </nav>
        </div>

    );
  }

  export default Navbar;