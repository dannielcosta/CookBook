import { useState } from 'react'
import recipes from '../data/recipes.json'
import {Routes, Route} from 'react-router-dom';
import React from 'react'
import NotFound from '../pages/NotFound'
import { Link } from 'react-router-dom';
import About from '../pages/About';
import AddNewRecipe from '../pages/AddNewRecipe';
function Sidebar(){
    return(
        <div className="Sidebar">
            <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/AddNewRecipe"><li>Add New Recipe</li></Link>
            <Link to="/AllRecipes"><li>All Recipes</li></Link>
            </ul>
        </div>
    )
}

export default Sidebar