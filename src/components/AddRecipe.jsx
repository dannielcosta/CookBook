import { useState } from 'react';
import {AiOutlinePicture} from "react-icons/ai";


function AddRecipe(props) {

    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [image, setImage] = useState("");

    function handleSubmit(e){

        /* Prevent the default action of a form submission (like refreshing the page) */
        /* Why? with the refresh of a page the state values go to original */
        e.preventDefault(); 
    
        // Create a new object (recipe) with the values from the form
        const newRecipe = {name, calories, servings, ingredients, instructions};

        // This way we add a new recipe to the recipe list parent component.
        props.addNewRecipe(newRecipe);

        // Reset the state, so I dont have to delete all the fields if I want to create a new movie.
        setName("");
        setCalories("");
        setServings("");
        setIngredients("");
        setInstructions("");
        setImage("");
    }


    return (
       <section className="AddRecipe-form">
        <form onSubmit={handleSubmit}>
            
            <label>
                Recipe Name:
            </label>
            <input className="input-name" type="text" name="name" value= {name} onChange={(e)=> setName(e.target.value)}/>
            
            <label>
               Calories:
            </label>
            <input className="input-calories" type="number" name="calories" value= {calories} onChange={(e)=> setCalories(e.target.value)}/>

            <label>
                Picture:
            </label>
            <input type="file" name="img" value= {image}  onChange={(e)=> setImage(e.target.value)}  />

            <label>
                Servings:
            </label>
            <input className="input-servings" type="number" name="servings" value= {servings} onChange={(e)=> setServings(e.target.value)}/>

            <label>
                Ingredients:
            </label>
            <input className="input-ingredients" type="text" name="ingrredients" value= {ingredients} onChange={(e)=> setIngredients(e.target.value)}/>

            <label>
                Instructions:
            </label>
            <input className="input-instructions" type="text" name="instructions" value= {instructions} onChange={(e)=> setInstructions(e.target.value)}/>

            <button type= "submit">Add Recipe</button>

        </form>
       </section>
    )
}

export default AddRecipe;