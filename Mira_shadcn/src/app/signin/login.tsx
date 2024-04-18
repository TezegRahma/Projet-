"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {
  Paper,
  Grid,
  Stack,
  TextField,
  Button,
  Card,
  IconButton,
  InputAdornment,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const router = useRouter();
  const [userType, setUserType] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [identifient, setIdentifient] = useState('');
  const [identifientError, setIdentifientError] = useState(false);
  const [identifientHelperText, setIdentifientHelperText] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0); // Ajouter cette ligne
  const [disableLogin, setDisableLogin] = useState(false); // Ajouter cette ligne

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
    if (value.length < 6) {
      setPasswordError(true);
      setPasswordHelperText('Le mot de passe doit contenir au moins 6 caractères');
    } else {
      setPasswordError(false);
      setPasswordHelperText('');
    }
  };

  const handleSubmit = async () => {
    if (loginAttempts >= 4) { // Vérifie si le nombre de tentatives de connexion est supérieur ou égal à 3
      setDisableLogin(true); // Désactive le bouton de connexion
      setTimeout(() => {
        setLoginAttempts(0); // Réinitialise le nombre de tentatives après 20 minutes
        setDisableLogin(false); // Réactive le bouton de connexion
      }, 20 * 60 * 1000); // 20 minutes
      setErrorMessage('Vous avez dépassé le nombre maximal de tentatives de connexion. Veuillez réessayer dans 20 minutes.');
      return;
    }


    try {
      const response = await axios.post('http://127.0.0.1:8000/users/login/', {
        cin: identifient,
        password: password
      });

      const { access, refresh, user_type } = response.data;
      
      // Stockage des tokens dans le stockage local
      // Stockage des tokens et du type d'utilisateur dans le stockage local
localStorage.setItem('accessToken', access);
localStorage.setItem('refreshToken', refresh);
localStorage.setItem('userType', user_type);
localStorage.setItem('userCin', response.data.cin);


      // Redirection vers le dashboard après connexion
      switch (user_type) {
        case 'enseignant':
          router.replace('/Enseignant/dashboard');
          break;
        case 'etudiant':
          router.replace('/Etudiant/dashboard');
          break;
        case 'administratif':
          router.replace('/Administratif/dashboard');
          break;
        default:
          router.replace('/Administrateur/dashboard'); // Modifier la route pour le dashboard de l'administrateur
      }

      // Affichage d'un message de succès
      toast.success('Connexion réussie !');
      setLoggedIn(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response.status === 401 && error.response.data.message === "Ce compte n'est pas activé") {
          toast.info("Votre compte n'est pas encore activé. Veuillez patienter pour son activation.");
        } else {
          setErrorMessage('Identifiant ou mot de passe incorrect.');
          console.error('Erreur lors de l\'authentification :', error.message);
        }
      } else {
        setErrorMessage('Une erreur inconnue s\'est produite.');
        console.error('Erreur inconnue :', error); 
      }
    }
  };

  return (
    
   

    
    <Grid container spacing={3}>
      <Grid item xs={12} lg={12}>
        <>
          <Stack spacing={3}>
          
            <TextField
              id="identifient"
              label="carte identité nationale"
              variant="outlined"
              value={identifient}
              onChange={handleIdentifientChange}
              error={identifientError}
              helperText={identifientHelperText}
              InputProps={{
                inputProps: { maxLength: 8 },
              }}
              required
            />
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

             <div style={{ marginTop: '20px' }}>
               <a href="/forgetpassword">Mot de passe oublié ?</a>
             </div>
             
          </Stack>
          <br />
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          <Button className="btn btn-primary" onClick={handleSubmit} disabled={disableLogin}> {/* Ajouter l'attribut disabled */}
            Se connecter
          </Button>
          <ToastContainer />
          <div style={{ marginTop: '20px' }}>
            Vous n'avez pas de compte ? <a href="/signup">Inscrivez-vous ici</a>
          </div>
        </>
      </Grid>
    </Grid>
    
  );
};

export default Signin;
