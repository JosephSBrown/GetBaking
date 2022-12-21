import React, { useEffect } from 'react';
import '../index.css';
import PageHead from '../components/pagehead'
import { useParams } from 'react-router-dom';
import blogposts from '../blogposts.json'
import TwoOne from '../components/twoand1';
import AuthorCard from '../components/authorcard';
import { Link } from 'react-router-dom';
import OneThird from '../components/onethird';
import { Animated } from 'react-animated-css';

function BlogPage() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    
    let { postSlug } = useParams();

    useEffect(() => {

    }, [postSlug]);

    var blogpost = blogposts;

    for (var i = 0; i < blogpost.length; i++) {
        var obj = blogpost[i];
        if (obj.uuid === postSlug) {
            var Name = obj.name;
            var Author = obj.author;
            var Image = obj.images;
            var AP = obj.authorpicture;
            var Datetime = obj.created;
            var content = obj.postcontents;
            console.log(Datetime);
        }
    }  

    return(
        <div class="w-screen px-3">
            <Animated animationIn='fadeInUp' animationInDelay={100}>
                <PageHead contit={Name}>
                </PageHead>
            </Animated>
            
            <Animated animationIn='fadeInUp'>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 my-4">
                    <div class="col-span-1 lg:col-span-2">
                        <TwoOne content3={<img src={Image[1]} class="w-2/3 lg:w-1/2 h-auto mx-auto" />} cont={<AuthorCard image={AP} author={Author}/>}/>
                    </div>  
                    <div class="col-span-1 row-span-1">
                        <OneThird cont={<AuthorCard image={AP} author={Author} />} />
                    </div>  
                        <div class="col-span-1 lg:col-span-2"><TwoOne content={content} /></div>
                        <div class="col-span-1">
                            <OneThird contit2="Other Posts" cont={blogpost.slice(0, 2).map(blogpost => (
                                <Link to={`/GetBaking/blog/${blogpost.uuid}`} onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}>
                                    <Animated animationIn='fadeIn' animationInDelay={500}>
                                        <div key={blogpost.uuid} class="drop-shadow-2xl block rounded-lg bg-white px-8 lg:px-16 py-8 my-3 text-black w-11/12 mx-auto hover:cursor-pointer hover:bg-gray-200">
                                            <img src={blogpost.images} alt={blogpost.name} class="h-20 w-20 lg:h-32 lg:w-32 md:h-44 md:w-44 mx-auto lg:mx-3 text-black rounded-md lg:float-left"/>     
                                            <div class="my-4 md:my-auto block ">
                                                <h1 class="block text-sm mx-auto">{blogpost.name}</h1>
                                                <h2 class="block text-sm mx-auto">Written by {blogpost.author}</h2>
                                                <p class="block text-sm my-2">{blogpost.description}</p>
                                            </div>
                                        </div>
                                    </Animated>
                                    
                                </Link>         
                            ))}/>
                        </div>
                    </div>
            </Animated>
                
                
        </div>
    );
}

export default BlogPage;
