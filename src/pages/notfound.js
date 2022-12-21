import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import PageHead from '../components/pagehead'
import PageList from '../components/pagelist';
import { Outlet } from 'react-router-dom';

export default class NotFound extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <PageHead contit="An Error Has Occured"/>
                <Footer />
            </div>
        )
    }
}