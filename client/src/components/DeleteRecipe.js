import React from 'react'
import {Avatar,Box,Card,CardContent,CardHeader,CardMedia,IconButton,Typography,
} from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function DeleteRecipe({ RecipeName, Ingredients, process, image, userName, isUser, id }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/MyRecipe${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:3007/recipe/delete/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;

    
  };

  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/Recipes"));
  };


  console.log(isUser)

  return (
    <div>
      {" "}
      <Card
        sx={{
          width: "40%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <ModeEditOutlineIcon color="warning" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon color="error" />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
            >
              {userName ? userName.charAt(0) : ""}
            </Avatar>
          }
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        />

        <CardContent>
          <hr />
          <br />
          <Typography
            variant="body2"
            color="text.secondary"
          >
            RecipeName= {RecipeName}
          </Typography>
        </CardContent>

        <CardContent>
          <hr />
          <br />
          <Typography
            variant="body2"
            color="text.secondary"
          >
            Ingredients= {Ingredients}
          </Typography>
        </CardContent>

        <CardContent>
          <hr />
          <br />
          <Typography
            variant="body2"
            color="text.secondary"
          >
            process= {process}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}