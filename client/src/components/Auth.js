import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { authActions } from '../store/reducer'

// export const Auth = () => {

//     const dispatch = useDispatch()
//     const navigate = useNavigate()

//     const [isSignup, setIssignup] = useState(false)
//     console.log(isSignup)
//     const [inputs, setInputs] = useState({
//         name: '',
//         email: '',
//         password: ''
//     })

//     const handlechange = (e) => {
//         setInputs((prevdata) => ({ ...prevdata, [e.target.name]: e.target.value }))
//     }

//     const sendrequest = async (type = 'login') => {

//         const res = await axios.post(`http://localhost:3007/user/${type}`,
//             {
//                 name: inputs.name,
//                 email: inputs.email,
//                 password: inputs.password
//             })
//             .catch((err) => console.log(err))


//         const data = await res.data;
//         console.log(data)

//         console.log("posting data")
//         // console.log(res)

//         return data;
//     }

//     const handlesubmit = (e) => {
//         e.preventDefault()
//         console.log(inputs)


//         if (isSignup) {
//             sendrequest("signup")
//                 // .then((data) => console.log(data, 'this is the handle submit data'))
//                 .then((data) => localStorage.setItem('userId', data.user._id))
//                 .then(() => dispatch(authActions.login()))
//                 .then(() => navigate('/Recipe'))
//         }
//         else {
//             sendrequest()
//                 .then((data) => localStorage.setItem('userId', data.user._id))
//                 .then(() => dispatchEvent(authActions.login()))
//                 .then(() => navigate('/Recipe'))
//         }
//     }
//     return (
//         <div>
//             <form onSubmit={handlesubmit}>
//                 <Box marginTop={12}>
//                     <Typography>
//                         {isSignup ? "signup" : 'login'}
//                     </Typography>
//                     {
//                         isSignup && (<TextField name='name' value={inputs.name} placeholder='Enter your name' onChange={handlechange} />)
//                     }
//                     <TextField name='email' value={inputs.email} placeholder='Enter your email' onChange={handlechange} />
//                     <TextField name='password' value={inputs.password} placeholder='Enter your password' onChange={handlechange} />
//                     <Button type='submit' variant='contained'>SUBMIT</Button>

//                     <Button onClick={() => {
//                         setIssignup(!isSignup)
//                     }}>
//                         change to {isSignup ? 'login' : 'signup'}
//                     </Button>
//                 </Box>
//             </form>
//         </div>
//     )
// }
export const Auth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //getting the form INPUTs data
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    //for changing signup to login and viseverse
    const [isSignup, setIsSignup] = useState(false);

    const handleChange = (e) => {
        setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const sendRequest = async (type = "login") => {

        //sending data to server, by default its login
        const res = await axios.post(`http://localhost:3007/user/${type}`,
            {
                name: inputs.name,
                email: inputs.email,
                password: inputs.password
            })
            .catch((err) => console.log(err));
        const data = await res.data;
        console.log(data);
        console.log("posting data")
        return data;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        if (isSignup) {
            //sending data 
            sendRequest("signup")
                .then((data) => localStorage.setItem("userId", data.user._id))
                .then(() => dispatch(authActions.login()))
                .then(() => navigate("/Recipes"));
        } else {
            sendRequest()
                .then((data) => localStorage.setItem("userId", data.user._id))
                .then(() => dispatch(authActions.login()))
                .then(() => navigate("/Recipes"))
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box marginTop={15}
                    display='flex'
                    flexDirection='column'
                    justifyContent={'space-around'}
                    padding={3}
                    alignItems="center"
                    // justifyContent={"center"}
                    // margin="auto"
                    marginLeft={60}
                    maxWidth={400}
                >
                    <Typography> {
                        // changing the form title based on user click on signup or login
                        isSignup ? "Signup" : "Login"
                    }
                    </Typography>
                    {
                        //if only when isSingup is true show name
                        isSignup && (<TextField name="name" value={inputs.name} placeholder='Enter your name' onChange={handleChange} />)
                    }{" "}
                    <TextField name='email' placeholder='enter your email' value={inputs.email}
                        onChange={handleChange}
                    />
                    <TextField name='password' placeholder='Enter your password' value={inputs.password} onChange={handleChange} />
                    <Button type='submit' variant='contained'>Submit</Button>
                    <Button onClick={() => {
                        // chaning form signup to login
                        setIsSignup(!isSignup)
                    }}>
                        <Button variant="outlined"> Change to {isSignup ? "login" : "Signup"}</Button>
                    </Button>
                </Box>
            </form>
        </div>
    );
};