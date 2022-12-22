import { useState, useEffect } from 'react';
import blogposts from '../blogposts.json';
import { Link } from 'react-router-dom';
import PageHead from './pagehead';
import { Animated } from 'react-animated-css';

const BlogList = () => {

    const [blogpost, setBlogPost] = useState([]);

    useEffect(() => {
        const blogpost = blogposts;
        setBlogPost(blogpost);
    })

    return(
        <div class="w-full">
            <Animated animationIn='fadeInRight'>
                <PageHead contit="Blog" />
            </Animated>
            <Animated animationIn='fadeInRight' animationInDelay={150}>
                <div>
                    {blogpost.map(blogpost => (
                        <Link to={`/GetBaking/blog/${blogpost.uuid}`}>
                            <div key={blogpost.uuid} class="flow-root drop-shadow-2xl block rounded-lg bg-white px-8 lg:px-16 py-8 my-3 text-black w-11/12 mx-auto hover:cursor-pointer hover:bg-gray-200">
                                <img src={blogpost.images} alt={blogpost.name} class="aspect-square h-22 w-22 md:h-44 md:w-44 mx-auto text-black rounded-md md:float-left"/>     
                                <div class="my-4 md:my-auto block lg:mx-64">
                                    <h1 class="block text-xl mx-auto">{blogpost.name}</h1>
                                    <h2 class="block text-lg mx-auto">Written by {blogpost.author}</h2>
                                    <p class="block text-lg my-2">{blogpost.description}</p>
                                </div>
                            </div>
                        </Link>           
                    ))}
                        
                        
                    <div class="mb-10"></div>
                </div>
            </Animated>
                
        </div> 
          
    );

}

export default BlogList;