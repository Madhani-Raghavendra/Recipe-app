import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const loggedIUser = localStorage.getItem('userId')

export default function AllRecipeMore(props) {

  const navigate = useNavigate()


  const { photo, process, ingredients, recipeName, Id, username, isuser } = props


  const favReq = async () => {

    try{
      const res = await axios
      .post(`http://localhost:3007/recipe/addfav/${Id}`,{
        userID:loggedIUser
      })
      console.log(res,'this is the response')
    } catch(err){
      console.log(err)
    }
  }

  console.log(isuser)

  // const handlefav = () => {
  //   favReq()
  //     .then(() => navigate('/liked'))
  // }

  return (
    <>
      <Card
        sx={{
          display: 'flex',
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

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
   
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {recipeName}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {ingredients}
            </Typography>

            {isuser && (
          <Box display="flex">
            <IconButton onClick={favReq} sx={{ marginLeft: "auto" }}>
              <BookmarkBorderIcon color="warning" />
            </IconButton>
          </Box>
        )}
          </CardContent>
          <Button type="button"><Link className="text-decoration-none" to={`/user/${recipeName}`} state={{ data: props }}>MORE</Link></Button>

        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={photo}
          alt="Live from space album cover"
        />
      </Card>
    </>
  )
}
