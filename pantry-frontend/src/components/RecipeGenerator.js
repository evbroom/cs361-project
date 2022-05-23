import React, { useState } from 'react';
import recipesJSON from '../recipes.json';

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
        <div>
            <h2 className="text-xl font-semibold leading-normal mt-0  text-gray-800">Recipe Generator</h2>
            <input
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 py-1 px-2"
                type="text"
                placeholder="Enter ingredient to search"
                value={ingredient}
                onChange={e => setIngredient(e.target.value)} />
            <button
                className="bg-purple-800 text-white py-2 text-sm px-3 rounded mr-3 mt-4"
                onClick={findRecipes}
            >Search for recipes</button>
            <div className="p-3 border border-gray-200 mt-3 mb-4">
                {recipesJSON.error ? <p className="text-red-600">{recipesJSON.error}</p> :
                    recipesJSON.recipes.map((recipe) =>
                        <div>
                            <p>{recipe.name}</p>
                            <p>{recipe.ingredients_raw_str}</p>
                            <p>{recipe.steps}</p>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default RecipeGenerator
