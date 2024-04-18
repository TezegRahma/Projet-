"use client"
import axios, { AxiosError, isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import {
  Paper,
  Grid,
  Stack,
  TextField,
  Button,
} from '@mui/material';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ForgetPassword = () => {
  const router = useRouter();
  
  const [message, setMessage] = useState('');
  const [identifient, setIdentifient] = useState('');
  const [identifientError, setIdentifientError] = useState(false);
  const [identifientHelperText, setIdentifientHelperText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');
  
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
  const handleEmailChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setEmail(value);

    if (!value.includes('@') || !value.includes('.')) {
      setEmailError(true);
      setEmailHelperText('Veuillez saisir une adresse e-mail valide');
    } else {
      setEmailError(false);
      setEmailHelperText('');
    }
  };

  
  const handleverficationcode = async () => {
    try {
      const response = await axios.post('http://localhost:8000/users/send_verification_code/', {
        email: email,
      });
  
      console.log('code envoyé avec succès!', response.data);
      const code = response.data.code.toString();
      // Enregistrement du code et de l'ID de l'utilisateur dans localStorage
      
      localStorage.setItem('code', code);
      localStorage.setItem('useremail', email);
      console.log(code);
      
      router.replace('/verificationcode');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Erreur lors de l\'envoi du code de vérification:', error.message);
        // Gérer les erreurs Axios
      } else {
        console.error('Erreur inconnue:', error);
        // Gérer d'autres erreurs
      }
    }
  };
  
  return (

    <Card className=" w-[350px] mt-5 mb-5 ml-5 mr-5">
      <CardTitle className = "  mt-5 mb-5 ml-10 mr-5" >
      Trouvez votre compte
      </CardTitle>
      <CardContent>
      Veuillez saisir votre e-mail  pour rechercher votre compte
    <Grid container spacing={3}>
      <Grid item xs={12} lg={12}>
        <>
          <Stack spacing={3}>
            
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              error={emailError}
              helperText={emailHelperText}
              required
            />
          </Stack>
          <br />
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          <Button className="btn btn-primary" onClick={handleverficationcode}>Envoyer </Button>
          {message && <div>{message}</div>}
          <ToastContainer />
        </>
      </Grid>
    </Grid>
    </CardContent>
    </Card>
  );
};

export default ForgetPassword;
