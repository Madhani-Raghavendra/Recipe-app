import mongoose from "mongoose"
import Recipe from "../models/Recipe.js"
import User from "../models/User.js"


export async function getAllRecipe(req, res) {
    let recipes
    try {
        recipes = await Recipe.find().populate('user')
    } catch (err) {
        return console.log(err)
    }
    if (!recipes) {
        return res.status(404).json({ msg: 'No Recipe Found' })
    }
    return res.status(200).json({ recipes })
}

export async function addRecipe(req, res) {
    const { RecipeName, Ingredients, process, image, user } = req.body

    let existingUser
    try {
        existingUser = await User.findById(user)
    } catch (err) {
        return console.log(err)
    }
    if (!existingUser) {
        return res.status(402).json({ msg: 'No User Found By This Id' })
    }

    const recipe = new Recipe({
        RecipeName: RecipeName,
        Ingredients: Ingredients,
        process: process,
        image,
        user,
    });
    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        await recipe.save({ session })
        existingUser.recipes.push(recipe)
        await existingUser.save({ session })
        await session.commitTransaction()
    } catch (err) {
        console.log(err)
        return res.status(500).json({ err })
    }
    return res.status(200).json({ recipe })
}

export async function updateRecipe(req, res) {
    const { RecipeName, Ingredients, process } = req.body
    const recipeId = req.params.id
    let recipe
    try {
        recipe = await Recipe.findByIdAndUpdate(recipeId, {
            RecipeName, Ingredients, process
        })
    } catch (err) {
        console.log(err)
    }
    if (!recipe) {
        return res.status(402).json({ msg: 'Unable To Update The Recipe' })
    }
    return res.status(200).json({ recipe })
}

export async function deleteRecipe(req, res) {
    const id = req.params.id;
    let recipe;
    try {
        console.log("hi")
        recipe = await Recipe.findByIdAndRemove(id).populate("user");
        await recipe.user.recipes.pull(recipe);
        await recipe.user.save();
    } catch (err) {
        console.log(err);
    }
    if (!recipe) {
        return res.status(500).json({ message: "Unable To Delete" });
    }
    return res.status(200).json({ message: "Successfully Delete" });
};

export async function getById(req, res) {
    const id = req.params.id;
    let recipe;
    try {
        recipe = await Recipe.findById(id);
    } catch (err) {
        return console.log(err);
    }
    if (!recipe) {
        return res.status(404).json({ message: "No Recipe Found" });
    }
    return res.status(200).json({ recipe });
}

export async function getByUserId(req, res) {
    const userId = req.params.id;
    let userRecipe;
    try {
        userRecipe = await User.findById(userId).populate("recipes");
    } catch (err) {
        return console.log(err);
    }
    if (!userRecipe) {
        return res.status(404).json({ message: "No Recipe Found" });
    }
    return res.status(200).json({ user: userRecipe });
}

export async function deletefav(req, res) {
    const id = req.params.id;
    let recipe;
    try {
        console.log("hi")
        recipe = await Recipe.findByIdAndRemove(id).populate("user");
        await recipe.user.savedRecipe.pull(recipe);
        await recipe.user.save();
    } catch (err) {
        console.log(err);
    }
    if (!recipe) {
        return res.status(500).json({ message: "Unable To Delete" });
    }
    return res.status(200).json({ message: "Successfully Delete" });
}


export async function addfav(req, res) {
    const {userID} = req.body
    
    try {
    const recipe = await Recipe.findById(req.params.id);
    const user = await User.findByIdAndUpdate(userID,{$push:{
        savedRecipe: recipe
    }});
     
      res.status(201).json({ savedRecipe: user});
    } catch (err) {
      res.status(400).json(err);
    }}

export async function getAllfav(req, res) {
    try {
        const user = await User.findById(req.params.userId);
        const savedRecipe = await Recipe.find({
          _id: { $in: user.savedRecipe },
        });
        console.log(savedRecipe);
        res.status(201).json({ savedRecipe });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
}