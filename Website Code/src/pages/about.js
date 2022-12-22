import React from 'react';
import '../index.css';
import gblogo from '../assets/getbakinglogo.png';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import PageHead from '../components/pagehead';
import TwoOne from '../components/twoand1';
import OneThird from '../components/onethird';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';

export default class About extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <Animated animationIn='fadeInUp'>
                    <PageHead contit="Our Aim" />
                </Animated>
                <Animated animationIn='fadeInUp'>
                    <div class="grid grid-cols-3 lg:grid-cols-5 my-4 mx-4 gap-4">
                        <div class="col-span-3 lg:col-span-2 row-span-2">
                                <OneThird cont={
                                    <div>
                                        <img src={gblogo} class="w-96 mx-auto"></img>
                                    </div>}
                                />
                            </div>
                            <div class="col-span-3 lg:col-span-3 row-span-1 bg-white px-4 py-4 rounded-lg">
                                    <div>
                                        <p>
                                            At Get Baking! our mission is to provide amazingly simple, yet delicious recipes for bakers worldwide. Whether you're a beginner or a seasoned pro, we have something for everyone.
                                            <br/><br/>
                                            Fruitcake cake lemon drops liquorice sweet roll carrot cake fruitcake powder. Lollipop biscuit cheesecake bear claw tootsie roll brownie. Muffin ice cream macaroon lemon drops candy liquorice halvah pie. Liquorice marzipan pudding sweet gingerbread apple pie. Caramels biscuit tart sweet roll cake sugar plum caramels. Icing cake gummi bears pastry fruitcake. Gummies carrot cake sweet cupcake chocolate. Cake shortbread pudding carrot cake liquorice gingerbread wafer muffin. Jelly beans gummi bears carrot cake tootsie roll topping. Chocolate bar powder cake donut shortbread cake sesame snaps. Gummies toffee bonbon apple pie lollipop topping pudding. Soufflé cupcake ice cream jelly beans apple pie jelly. Tiramisu gummi bears fruitcake croissant lollipop. Jelly-o tiramisu jujubes cake muffin jelly cupcake cake pudding.
                                            <br/><br/>
                                            These are all Recipes we plan to bring to our Site over time, that's if we haven't already!!
                                        </p>
                                    </div>
                            </div>
                            <Link to='../GetBaking/blog'>
                                <div class="col-span-1 bg-white row-span-1 rounded-lg px-8 py-5 lg:py-20 lg:px-36 lg:text-2xl">
                                    <p> Go To Blog</p>
                                </div>
                            </Link>
                            <Link to='../GetBaking/recipes'>
                                <div class="col-span-1 bg-white rounded-lg px-7 py-5 lg:py-20 lg:px-36 lg:text-2xl">
                                        <p>Go To Recipes</p>
                                </div>
                            </Link>
                            <Link to='../GetBaking/contact'>
                                <div class="col-span-1 bg-white rounded-lg px-6 py-5 lg:py-20 lg:px-36 lg:text-2xl">
                                        <p>Go To Contact</p>
                                </div>
                            </Link>
                    </div>
                </Animated>
                <Footer />
            </div>
        )
    }
}