import React from 'react';
import '../index.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';

export default class Blog extends React.Component {
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