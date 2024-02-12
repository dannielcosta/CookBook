import { useState } from 'react';
import recipes from '../data/recipes.json';
import React from 'react';

function RecipeList() {
    const [cook, setCook] = useState(recipes);

    const deleteRecipe = (recipeId) => {
        const updatedCook = cook.filter((recipe) => recipe.id !== recipeId);
        setCook(updatedCook);
    };

  

    return (
        <div className="RecipePage">
            <div className="RecipeList">
                {cook.map((recipe) => (
                    <div key={recipe.id} className="Recipes">
                        <img src={recipe.image} alt={recipe.name} />
                        <div className="info">
                        <h3>{recipe.name}</h3>
                        <p>{recipe.calories} calories</p>
                        <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                        </div> 
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecipeList;