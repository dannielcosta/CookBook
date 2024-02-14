import {useState} from 'react';
import AddRecipe from '../components/AddRecipe'; // importing the AddRecipe (form) component

function AddNewRecipe() {

    return (
        <div className="AddNewRecipe">
            <h1>Add a New Recipe</h1>
            <AddRecipe />
        </div>
    );
}

export default AddNewRecipe;