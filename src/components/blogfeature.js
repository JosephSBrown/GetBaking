import { useState, useEffect } from 'react';
import blogposts from '../blogposts.json';
import Button from './button';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';

const BlogContainer = () => {

    const [blogpost, setRecipe] = useState([]);

    useEffect(() => {
        const blogpost = blogposts;
        setRecipe(blogpost);
    })

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    var int = 0;

    if (windowSize.innerWidth <= 640){
        int = 1;
    }
    else if (windowSize.innerWidth <= 1100){
        int = 2;
    }
    else if (windowSize.innerWidth <= 1400){
        int = 3;
    }
    else if (windowSize.innerWidth > 1400){
        int = 4;
    }

    return(
        <div class="flex-wrap">
            <div class="flex">
                {blogpost.slice(0, int).map(post => (
                    <Link to={`/GetBaking/blog/${post.uuid}`}>
                        <Animated animationIn='fadeIn' animationInDelay={500}>
                            <div key={post.uuid} class="drop-shadow-2xl inline-block rounded-md bg-pink-400 px-16 text-white mx-auto md:mx-4 hover:cursor-pointer hover:bg-pink-300">
                            <div class="bg-white h-40 w-40 mx-auto rounded-md">
                                <img src={post.images} alt={post.name} class="h-36 w-36 mx-auto mt-8 pt-4 text-black"/>
                            </div>      
                            <div class="my-12 block">
                                <h1 class="block text-md mx-auto md:w-3/4">{post.name}</h1>
                                <p class="block text-sm mx-auto md:w-3/4">by {post.author}</p>
                            </div>
                        </div>
                        </Animated>
                        
                    </Link>               
                ))} 
                
            </div>
            <Link className="flex items-center justify-center ml-6 lg:ml-20 mt-6" to="/GetBaking/blog">
                <Button title="View More Posts..."/>
            </Link>
        </div>   
    );

}

export default BlogContainer;