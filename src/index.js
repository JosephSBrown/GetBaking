import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import Halfcontainer from './components/halfcontainer';
import Fullcontainer from './components/fullcontainer';
import reportWebVitals from './reportWebVitals';

const nav = ReactDOM.createRoot(document.getElementById('nav'));
nav.render(
    <NavBar />
);

const halfcon = ReactDOM.createRoot(document.getElementById('halfcon'));
halfcon.render(
    <Halfcontainer />
);

const blog = ReactDOM.createRoot(document.getElementById('blogcard'));
blog.render(
    <Fullcontainer />
);

const seasonal = ReactDOM.createRoot(document.getElementById('seasonalcard'));
seasonal.render(
    <Fullcontainer />
);

const popular = ReactDOM.createRoot(document.getElementById('popularcard'));
popular.render(
    <Fullcontainer />
);

const footer = ReactDOM.createRoot(document.getElementById('footer'));
footer.render(
    <Footer />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
