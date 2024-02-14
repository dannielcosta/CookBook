//THIS IS GOING TO BE THE MAIN PAGE

import React from "react";
import RecipeList from "../components/RecipeList";
import recipes from "../data/recipes.json";
import { useState } from 'react';


// >>>>> Adicionar condicional rendering to the function.
// >>>>> starter container: if recipe.type === "starter" => render starter recipe cards (in carrousel)
// >>>>> main-course container: if recipe.type === "main-course" => render main course recipes card (in carrousel)
// >>>>> dessert container: if recipe.type === "dessert" => render desserts  recipes cards (in carrousel)

function Dashboard(){

   /*  const [recipe, setRecipe] = useState(recipes);
    const filterByType = (type) => {
        const filteredRecipe = recipe.filter((recipe) => recipe.type === type);
        setRecipe(filteredRecipe);

    } */
    const starterRecipes = recipes.filter((recipe) => recipe.type === "starter");
    const mainCourseRecipes = recipes.filter((recipe) => recipe.type === "main-course");
    const dessertRecipes = recipes.filter((recipe) => recipe.type === "dessert");

    return(
        <div>
            <h2>Starter Recipes</h2>
            <RecipeList recipes = {starterRecipes}></RecipeList>
        </div>
         
     /* 
       <div>
        {recipe.map((recipe) => {
            return(
               <div key={recipe.id}>
                <div>
                {recipe.type === "starter" ? <RecipeList recipe={recipe.id} />: null}
                </div>
                <div>
                {recipe.type === "main-course" ? <RecipeList recipe={recipe.id} />: null}
                </div>
                <div>
                {recipe.type === "dessert" ? <RecipeList recipe={recipe.id} />: null}
                </div>
               </div> 
            );
        })}
       </div>
     
     */
    

      /* 
        <div>
            <RecipeList/>
        </div>
      */
    )

    
}

export default Dashboard