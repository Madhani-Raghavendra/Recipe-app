import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Favourite() {
  const loggedIUser = localStorage.getItem('userId')

  const [savedRecipe, setSavedRecipe] = useState([]);
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:3007/recipe/fav/${loggedIUser}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setSavedRecipe(data.savedRecipe));
  }, []);
  console.log(savedRecipe);

  return (

    <div>
      {savedRecipe.map((recipe) => (
        <Card sx={{
          display: 'flex',
          width: '60%',
          boxShadow: "5px 5px 10px #ccc",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          }
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ padding: '3rem', flex: '1 0 auto' }}>
              <Typography component="div" variant="h5" sx={{ padding: '3rem' }}>
                {recipe.RecipeName}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ padding: '1rem' }}>
                {recipe.Ingredients}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ padding: '1rem' }}>
                {recipe.process}
              </Typography>
            </CardContent>

          </Box>
          <CardMedia
            component="img"
            sx={{ width: 350, height: 400, paddingTop: '40%' }}
            image={recipe.image}
            alt="Live from space album cover"
          />
        </Card>
      ))}
    </div>
  );
}
