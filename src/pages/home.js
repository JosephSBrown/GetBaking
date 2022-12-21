import React from 'react';
import '../index.css';
import Fullcontainer from '../components/fullcontainer';
import Halfcontainer from '../components/halfcontainer';
import gblogo from '../assets/getbakinglogo.png';
import RecipeContainer from '../components/card';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import recipes from '../recipes.json'
import SingleCard from '../components/singlecard';
import { Animated } from 'react-animated-css';
import TwoOne from '../components/twoand1';
import BlogContainer from '../components/blogfeature';

var obj_keys = Object.keys(recipes);
var ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
var selectedrecipe = recipes[ran_key];  

export default class Home extends React.Component {
    render(){
        return(
            <div class="w-full">
                <Navbar />
                <Animated animationIn='fadeInUp' animationInDuration={1000}>
                    <Halfcontainer Logo={gblogo} alt="Get Baking Logo" contit1='Our Mission' contit2='Random Recipe Selector' content="At Get Baking! our mission is to provide amazingly simple, yet delicious recipes for bakers worldwide. Whether you're a beginner or a seasoned pro, we have something for everyone.">
                        <SingleCard image={selectedrecipe.images} name={selectedrecipe.name} author={selectedrecipe.author} difficulty={selectedrecipe.difficulty} />
                    </Halfcontainer>
                    <Fullcontainer contit='Blog'>
                        <BlogContainer/>
                    </Fullcontainer>
                    <Fullcontainer contit='Popular Seasonal Recipes'>
                        <RecipeContainer/>
                    </Fullcontainer>
                    <Fullcontainer contit='Bake by Popular Demand'>
                        <RecipeContainer/>
                    </Fullcontainer>
                </Animated>
                    
                <Footer />
            </div>
        )
    }
}