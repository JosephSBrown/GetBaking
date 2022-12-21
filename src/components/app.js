import React from 'react';
import { Routes, Route } from "react-router-dom";
import '../index.css';
import Home from '../pages/home';
import About from '../pages/about';
import Recipe from '../pages/recipes';
import RecipePage from '../pages/recipepage';
import PageList from '../components/pagelist'
import NotFound from '../pages/notfound';
import Blog from '../pages/blog';
import BlogList from './bloglist';
import BlogPage from '../pages/blogpage';

export default class App extends React.Component {
    render(){
        return(
            <Routes>
                <Route exact path="/GetBaking" element={<Home />} />
                <Route path='/GetBaking/about' element={<About />} />
                <Route path='/GetBaking/recipes' element={<Recipe />}>
                    <Route path="" element={<PageList />} />
                    <Route path=":postSlug" element={<RecipePage />} />
                </Route>
                <Route path='/GetBaking/blog' element={<Blog />}>
                    <Route path="" element={<BlogList />} />
                    <Route path=":postSlug" element={<BlogPage />} />
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        )
    }
}