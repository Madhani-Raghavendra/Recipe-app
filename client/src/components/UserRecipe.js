import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteRecipe from "./DeleteRecipe";


export default function UserRecipe() {

  const [recipes, setRecipeS] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:3007/recipe")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setRecipeS(data.recipes));
  }, []);
  console.log(recipes);

  return (
    <div>
      {recipes &&
        recipes.map((recipe, index) => (
          <DeleteRecipe
            id={recipe._id}
            isUser={localStorage.getItem("userId") === recipe.user._id}
            RecipeName={recipe.RecipeName}
            Ingredients={recipe.Ingredients}
            process={recipe.process}
            image={recipe.image}
            userName={recipe.user.name}
          />
        ))}
    </div>
  );
}
