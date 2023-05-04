import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    RecipeName: {
        type: String,
        required: true,
    },
    Ingredients: {
        type: String,
        required: true,
    },
    process: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

export default mongoose.model("Recipe", RecipeSchema);