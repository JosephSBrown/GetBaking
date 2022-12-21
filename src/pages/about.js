import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Fullcontainer from '../components/fullcontainer';
import Halfcontainer from '../components/halfcontainer';
import gblogo from '../assets/getbakinglogo.png';
import RecipeContainer from '../components/card';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

export default class About extends React.Component {
    render(){
        return(
            <div>
                <Navbar />

            </div>
        )
    }
}