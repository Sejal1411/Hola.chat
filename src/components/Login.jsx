import { Button, TextField } from '@mui/material';

const Login = () => {
  return (
    <div className="login-container"> 
       <div className="image-con">
        <img src="chat2.png" alt="Logo" />

       </div>
      <div className="login-box">
      <p>Login to your Account!</p>
      <TextField 
        id="outlined-basic" 
        label="Enter User Name" 
        variant="outlined" 
      />
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
     />
     <Button variant="contained">LOG IN</Button>
      </div>
   </div>
  )
}

export default Login
