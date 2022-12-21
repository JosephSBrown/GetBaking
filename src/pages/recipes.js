import React from 'react';
import '../index.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';

export default class Recipes extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        )
    }
}