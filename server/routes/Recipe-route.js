import { Router } from "express";
import * as comp from '../controlers/Recipecontroller.js'

const routes = Router()


routes
    .get('/', comp.getAllRecipe)
    .put("/update/:id", comp.updateRecipe)
    .delete('/delete/:id', comp.deleteRecipe)
    .post('/add', comp.addRecipe)
    .get("/:id", comp.getById)
    .get("/user/:id", comp.getByUserId)
    .get("/fav/:userId", comp.getAllfav)
    .delete('/deletefav/:id', comp.deletefav)
    .post('/addfav/:id', comp.addfav)
export default routes