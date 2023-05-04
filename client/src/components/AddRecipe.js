import React, { useState } from 'react'
import { Box, Typography, InputLabel, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

// export default function AddRecipe() {

// const navigate=useNavigate()

//   const [inputs, setInputs] = useState({
//     RecipeName: "",
//     Ingredients: "",
//     process: "",
//     image: "",
//   });
//   const handleChange = (e) => {
//     setInputs((prevState)=>({...prevState,[e.target.name]:e.target.value}))
//   }

//   const sendRequest = async () => {
//     const res = await axios
//       .post("http://localhost:5000/recipe/add", {
//         RecipeName: inputs.RecipeName,
//         Ingredients: inputs.Ingredients,
//         process:inputs.process,
//         image: inputs.image,
//         user: localStorage.getItem("userId"),
//       })
//       .catch((err) => console.log(err));
//     const data = await res.data;
//     return data;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(inputs)
//     sendRequest()
//     sendRequest()
//       .then((data) => console.log(data))
//       .then(() => navigate("/Recipes"));
//    }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Box
//           border={3}
//           borderColor="linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)"
//           borderRadius={10}
//           boxShadow="10px 10px 20px #ccc"
//           padding={3}
//           margin={"auto"}
//           marginTop={3}
//           display="flex"
//           flexDirection={"column"}
//           width={"80%"}
//         >
//           <Typography
//             fontWeight={"bold"}
//             padding={3}
//             color="grey"
//             variant="h2"
//             textAlign={"center"}
//           >
//             Post Your Recipe
//           </Typography>
//           <InputLabel sx={labelStyles}>
//           RecipeName
//           </InputLabel>
//           <TextField
//             name="RecipeName"
//             onChange={handleChange}
//             value={inputs.title}
//             margin="auto"
//             variant="outlined"
//           />
//           <InputLabel sx={labelStyles}>
//           Ingredients
//           </InputLabel>
//           <TextField
//             name="Ingredients"
//             onChange={handleChange}
//             value={inputs.description}
//             margin="auto"
//             variant="outlined"
//           />
//            <InputLabel sx={labelStyles}>
//             process
//           </InputLabel>
//           <TextField
//             name="process"
//             onChange={handleChange}
//             value={inputs.description}
//             margin="auto"
//             variant="outlined"
//           />
//           <InputLabel sx={labelStyles}>
//             Image
//           </InputLabel>
//           <TextField
//             name="image"
//             onChange={handleChange}
//             value={inputs.imageURL}
//             margin="auto"
//             variant="outlined"
//           />
//           <Button
//             sx={{ mt: 2, borderRadius: 4 }}
//             variant="contained"
//             color="warning"
//             type="submit"
//           >
//             Submit
//           </Button>
//         </Box>
//       </form>
//     </div>
//   )
// }
export default function AddBlog() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    RecipeName: "",
    Ingredients: "",
    process: "",
    image: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post(`http://localhost:3007/recipe/add`, {
        RecipeName: inputs.RecipeName,
        Ingredients: inputs.Ingredients,
        process: inputs.process,
        image: inputs.image,
        user: localStorage.getItem("userId"),
      })
      .catch((err) => console.log("rrrr", err));
    const data =  res.data;
    console.log("resdata",data)
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/Recipes"));
  };
  return (
    <div>
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
            Post Your Recipe
          </Typography>
          <InputLabel sx={labelStyles}>
            RecipeName
          </InputLabel>
          <TextField
            name="RecipeName"
            onChange={handleChange}
            value={inputs.RecipeName}
            margin="auto"
            variant="outlined"
          />
          <InputLabel sx={labelStyles}>
            Ingredients
          </InputLabel>
          <TextField
            name="Ingredients"
            onChange={handleChange}
            value={inputs.Ingredients}
            margin="auto"
            variant="outlined"
          />
          <InputLabel sx={labelStyles}>
            process
          </InputLabel>
          <TextField
            name="process"
            onChange={handleChange}
            value={inputs.process}
            margin="auto"
            variant="outlined"
          />
          <InputLabel sx={labelStyles}>
            Image
          </InputLabel>
          <TextField
            name="image"
            onChange={handleChange}
            value={inputs.image}
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
    </div>
  );
}