import React, { useState } from 'react';
import recipesJSON from '../recipes.json';
import Collapsible from 'react-collapsible';

function RecipeGenerator() {
    const [ingredient, setIngredient] = useState('');

    const findRecipes = async () => {
        const newItem = { ingredient };
        const response = await fetch('/recipes', {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };
    return (
        <div className="mt-8">
            <h2 className="text-xl font-semibold leading-normal mt-0 text-gray-800">Recipe Generator</h2>
            <p className="text-gray-800 text-sm mb-2">Enter an ingredient and click "Search for recipes" to get recipe ideas.</p>
            <p className="text-gray-800 text-sm mb-2">If you don't find a recipe you like, click the "Search for recipes" button again to generate three new recipes.</p>
            <input
                className="max-w-md mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 py-1 px-2"
                type="text"
                placeholder="Enter ingredient to search"
                value={ingredient}
                onChange={e => setIngredient(e.target.value)} />
            <button
                className="bg-purple-800 text-white py-2 text-sm px-3 rounded mr-3 mt-4"
                onClick={findRecipes}
            >Search for recipes</button>
            <p className="mt-4 text-gray-800 text-sm mb-2">Click on a recipe name to see the ingredients and steps for that recipe. Click a recipe's name again to hide the details.</p>
            <div className="p-3 border border-gray-200 mt-3 mb-4">
                {recipesJSON.error ? <p className="text-red-600">{recipesJSON.error}</p> :
                    recipesJSON.recipes.map((recipe) =>
                        <div className="recipes">
                            <Collapsible tabIndex="0" trigger={<h2 className="bg-white border border-b-0 transition duration-300 ease-in-out hover:bg-gray-100 w-full py-4 px-5 text-lg font-semibold leading-normal text-gray-800">{recipe.name}</h2>}>
                                <p className="font-semibold">Ingredients</p>
                                <p className="mb-2">{recipe.ingredients_raw_str.replace(/['"]+/g, '').replace(/[\]}[{]/g, '').replace(/,/g, ', ')}</p>
                                <p className="font-semibold">Directions</p>
                                <p className="mb-10">{recipe.steps.replace(/['"]+/g, '').replace(/[\]}[{]/g, '').replace(/,/g, ', ').replace(/,/g, '')}</p>
                            </Collapsible>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default RecipeGenerator
