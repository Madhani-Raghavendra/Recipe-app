import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AllRecipeMore from './AllRecipeMore';

export default function AllRecipe() {

  const [recipes, setRecipes] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:3007/recipe")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setRecipes(data.recipes));
  }, []);
  console.log(recipes);

  return (
    <div>
      {recipes &&
        recipes.map((recipe, index) => (
          <AllRecipeMore
            photo={recipe.image}
            process={recipe.process}
            ingredients={recipe.Ingredients}
            recipeName={recipe.RecipeName}
            Id={recipe._id}
            username={recipe.user.name}
            isuser={localStorage.getItem("userId") === recipe.user._id}
          />
        ))}
    </div>
  );
}
