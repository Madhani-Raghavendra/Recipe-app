import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  recipes: [{
    type: mongoose.Types.ObjectId,
    ref: "Recipe",
    required: true
  }],
  savedRecipe: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe"
  }]

});
export default mongoose.model("User", userSchema);