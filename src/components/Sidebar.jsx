import { useState } from 'react'
import recipes from '../data/recipes.json'
import {Routes, Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard'
import React from 'react'
import NotFound from '../pages/NotFound'
import { Link } from 'react-router-dom';
import About from '../pages/About';

function Sidebar(){
    return(
        <div className="Sidebar">
            <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            </ul>
        </div>
    )
}

export default Sidebar