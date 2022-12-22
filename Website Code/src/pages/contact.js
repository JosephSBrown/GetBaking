import React from 'react';
import '../index.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import PageHead from '../components/pagehead';
import { Animated } from 'react-animated-css';


function submitted(){
    alert("Thank You, We Will Be In Touch!...")
}


export default class Contact extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <Animated animationIn='fadeInUp'>
                    <PageHead contit="Contact Us" />
                </Animated>
                <Animated animationIn='fadeInUp'>    
                    <div class="my-4 mx-4 bg-white rounded-md px-4 py-4">
                        <form class="grid grid-cols-5">
                            <div class="col-span-2 col-start-3 my-4 row-span-1">
                                <label/>Name<br/>
                                <input type='text' class='bg-pink-400 text-white p-2 rounded-md'/>
                            </div>
                            <div class="col-span-2 col-start-3 my-4 row-span-1">
                                <label/>Email<br/>
                                <input type='email' class='bg-pink-400 text-white p-2 rounded-md'/>
                            </div>
                            <div class="col-span-2 col-start-3 my-4 row-span-1">
                                <label/>Subject<br/>
                                <input type='text' class='bg-pink-400 text-white p-2 rounded-md'/>
                            </div>
                            <div class="col-span-2 col-start-3 my-4 row-span-1">
                                <label/>Message<br/>
                                <textarea class='bg-pink-400 text-white p-2 rounded-md'/>
                            </div>
                            <div class="col-span-2 col-start-3 my-4 row-span-1">
                                <input type='submit' class='bg-green-400 text-white p-1 rounded-md mx-4 px-4 py-2' onClick={submitted}/>
                                <input type='reset' class='bg-red-600 text-white p-1 rounded-md mx-4 px-4 py-2'/>
                            </div>
                        </form>
                    </div>
                </Animated>   
                <Footer />
            </div>
        )
    }
}