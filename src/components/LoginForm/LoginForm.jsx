import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    function handleValues (){
        let user = {
            email,
            password
        }
        console.log(user);
    }
    return (
        <div>
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} height={"70vh"}>
            <Typography variant="h3" component="h2">Login</Typography>
            <TextField value={email} onChange={(e)=>setEmail(e.target.value)} style={{width:"40%",margin:"10px" }} id="outlined-basic" label="Email" variant="outlined" />
            <TextField value={password} onChange={(e)=>setPassword(e.target.value)} style={{width:"40%", margin:"10px"}} id="outlined-basic" label="Password" variant="outlined" />
            <Button variant="contained" style={{width:"40%",margin:"10px" }} onClick={handleValues}>Login</Button>
                </Box>
            

        </div>
    );
};

export default LoginForm;