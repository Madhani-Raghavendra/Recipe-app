import { useLocation } from 'react-router-dom'
import { Box, Card, CardContent, Typography, CardHeader, Avatar, CardMedia, Button } from '@mui/material';
import AllRecipe from './AllRecipe';
import { Link } from 'react-router-dom';
import * as React from 'react';


export default function TotalDisplay() {

    const location = useLocation()
    const data = location.state.data
    return (
        <div>
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
                }}>

                <CardHeader
                    avatar={
                        <Avatar
                            sx={{ bgcolor: "red" }}
                            aria-label="recipe"
                        >
                            {data.username ? data.username.charAt(0) : ""}
                        </Avatar>
                    }
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={data.photo}
                    alt="Paella dish"
                />
                <CardContent>
                    <hr />
                    <br />
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        RecipeName= {data.recipeName}
                    </Typography>
                </CardContent>

                <CardContent>
                    <hr />
                    <br />
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        Ingredients= {data.ingredients}
                    </Typography>
                </CardContent>

                <CardContent>
                    <hr />
                    <br />
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        process= {data.process}
                    </Typography>
                </CardContent>

                <Button><Link to='/Recipes' element={<AllRecipe />}>BACK</Link></Button>
            </Card>
            {/* <Card sx={{
                display: 'flex',
                width: '60%',
                paddingLeft: '10rem'
            }} style={{ backgroundColor: "black", color: 'white' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            RecipeName= {data.recipeName}

                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" style={{ color: 'white' }}>
                            Ingredients= {data.ingredients}

                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={data.photo}
                        alt="Live from space album cover"
                    />
                </Box>
                <CardContent sx={{ boxShadow: "10px 10px 10px #ccc", }} style={{ backgroundColor: "white" }}>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        process= {data.process}
                    </Typography>
                </CardContent>
                <Button><Link to='/Recipes' element={<AllRecipe />}>BACK</Link></Button>
            </Card> */}

        </div>
    )
}
