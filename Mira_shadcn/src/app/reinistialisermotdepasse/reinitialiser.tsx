"use client"

import {
  Paper,
  Grid,
  Stack,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  InputAdornment,
  IconButton,
} from '@mui/material';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import axios, { AxiosError } from "axios";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const Reinitialiser = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [identifient, setIdentifient] = useState('');
  const [identifientError, setIdentifientError] = useState(false);
  const [identifientHelperText, setIdentifientHelperText] = useState('');
  
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [rePasswordError, setRePasswordError] = useState(false);
  const [rePasswordHelperText, setRePasswordHelperText] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  
  const handleIdentifientChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setIdentifient(value);

    if (value.length !== 8) {
      setIdentifientError(true);
      setIdentifientHelperText('Identifient doit contenir 8 caractères');
    } else {
      setIdentifientError(false);
      setIdentifientHelperText('');
    }
  };


  const handlePasswordChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setPassword(value);
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/;
    if (value.length < 8 || !passwordRegex.test(value)) {
      setPasswordError(true);
      setPasswordHelperText('Le mot de passe doit contenir au moins 8 caractères, une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial');
    } else {
      setPasswordError(false);
      setPasswordHelperText('');
    }
  };
  

  const handleRePasswordChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setRePassword(value);

    if (value !== password) {
      setRePasswordError(true);
      setRePasswordHelperText('Les mots de passe doivent correspondre');
    } else {
      setRePasswordError(false);
      setRePasswordHelperText('');
    }
  };

  const handleSubmit = async () => {
    let isValid = true;
    console.log('handleResetPassword', localStorage.getItem('useremail'))
    // Add further validations if needed
    const storedemail = localStorage.getItem('useremail');
    // Assuming `code` is the user-input code
      console.log('Stored email:', storedemail);

    if (isValid) {
      try {
        // Extract last 8 digits of telephone number
        
        const response = await axios.put('http://localhost:8000/users/reset_password/', {
          email: storedemail,
          new_password: password,
        });

        console.log('Mot de passe initialiser avec success!', response.data);
       
        // Affichage du toast
           router.replace('/');


      } catch (error: AxiosError | any) {
        if (axios.isAxiosError(error)) {
          console.error('Error registering user:', error.message);
          // Handle Axios errors
        } else {
          console.error('Unknown error:', error);
          // Handle other errors
        }
      }
    }
  };

  return (

    <Card className=" w-[350px] mt-5 mb-5 ml-5 mr-5">
      <CardTitle className = "  mt-5 mb-5 ml-10 mr-5" >
      Inscription
      </CardTitle>
      <CardContent>
        
      <Grid container spacing={3}>
      <Grid item xs={12} lg={12}>
        <>
          <Stack spacing={3}>
          
          
            
          <TextField
  id="password"
  label="Password"
  type={showPassword ? 'text' : 'password'}
  variant="outlined"
  value={password}
  onChange={handlePasswordChange}
  error={passwordError}
  helperText={passwordHelperText}
  required
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={togglePasswordVisibility} edge="end">
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </InputAdornment>
    ),
  }}
/>
<TextField
  id="re-password"
  label="entrez mot de passe"
  type={showPassword ? 'text' : 'password'}
  variant="outlined"
  value={rePassword}
  onChange={handleRePasswordChange}
  error={rePasswordError}
  helperText={rePasswordHelperText}
  required
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={togglePasswordVisibility} edge="end">
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </InputAdornment>
    ),
  }}
/>

           
            
          </Stack>
          <br />
          
          {/* Toast Container */}
          <ToastContainer />
          {/* Div for Login Link */}
          
          {/* Toast Container */}
          <ToastContainer />
          {/* Div for Login Link */}
          <div style={{ textAlign: 'center' }}>
          <Button className="btn btn-primary mr-20 "  onClick={handleSubmit}>
            Re-initialiser
          </Button>
          </div>
        </>
      </Grid>
    </Grid>
        
      </CardContent>
      </Card>

    
  );
};

export default Reinitialiser;
