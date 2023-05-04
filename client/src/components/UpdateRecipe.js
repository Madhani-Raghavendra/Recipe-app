import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateRecipe({id}) {
  console.log("id",id)

  const navigate = useNavigate();
  const [recipe, setRecipe] = useState();
  const id = useParams().id;
  console.log(id);
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchDetails = async () => {
    const res = await axios
      .get(`http://localhost:3007/recipe/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    fetchDetails().then((data) => {
      setRecipe(data.recipe);
      setInputs({
        RecipeName: data.recipe.RecipeName,
        Ingredients: data.recipe.Ingredients,
        process: data.recipe.process
      });
    });
  }, [id]);

  const sendRequest = async () => {
    const res = await axios
      .put(`http://localhost:3007/recipe/update/${id}`, {
        RecipeName: inputs.RecipeName,
        Ingredients: inputs.Ingredients,
        process: inputs.process
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  console.log(recipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/MyRecipe"));
  };
  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            border={3}
            borderColor="linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
            borderRadius={10}
            boxShadow="10px 10px 20px #ccc"
            padding={3}
            margin={"auto"}
            marginTop={3}
            display="flex"
            flexDirection={"column"}
            width={"80%"}
          >
            <Typography
              fontWeight={"bold"}
              padding={3}
              color="grey"
              variant="h2"
              textAlign={"center"}
            >
              Share Your Recipe
            </Typography>
            <InputLabel sx={labelStyles}>RecipeName</InputLabel>
            <TextField
              name="title"
              onChange={handleChange}
              value={inputs.RecipeName}
              margin="auto"
              variant="outlined"
            />
            <InputLabel sx={labelStyles}>Ingrdients</InputLabel>
            <TextField
              name="description"
              onChange={handleChange}
              value={inputs.Ingredients}
              margin="auto"
              variant="outlined"
            />

            <InputLabel sx={labelStyles}>process</InputLabel>
            <TextField
              name="description"
              onChange={handleChange}
              value={inputs.process}
              margin="auto"
              variant="outlined"
            />

            <Button
              sx={{ mt: 2, borderRadius: 4 }}
              variant="contained"
              color="warning"
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
}
