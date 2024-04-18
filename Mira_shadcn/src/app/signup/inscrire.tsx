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

const Inscrit = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [statut, setSexe] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [identifient, setIdentifient] = useState('');
  const [identifientError, setIdentifientError] = useState(false);
  const [identifientHelperText, setIdentifientHelperText] = useState('');
  const [dateDeDelivrance, setDateDeDelivrance] = useState('');
  const [dateDeDelivranceError, setDateDeDelivranceError] = useState(false);
  const [dateDeDelivranceHelperText, setDateDeDelivranceHelperText] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');
  const [telephone, setTelephone] = useState('');
  const [telephoneError, setTelephoneError] = useState(false);
  const [telephoneHelperText, setTelephoneHelperText] = useState('');
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

  const handleDateDeDelivranceChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setDateDeDelivrance(value);

    const today = new Date();
    const selectedDate = new Date(value);
    if (selectedDate.getTime() >= today.getTime()) {
      setDateDeDelivranceError(true);
      setDateDeDelivranceHelperText('La date de délivrance doit être antérieure à la date d\'aujourd\'hui');
    } else {
      setDateDeDelivranceError(false);
      setDateDeDelivranceHelperText('');
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

  const handleTelephoneChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setTelephone(value);

    const tunisianPhoneRegex = /^\+216\d{8}$/;
    if (!tunisianPhoneRegex.test(value)) {
      setTelephoneError(true);
      setTelephoneHelperText('Veuillez saisir un numéro de téléphone tunisien valide (par exemple, +21612345678)');
    } else {
      setTelephoneError(false);
      setTelephoneHelperText('');
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
    
    // Add further validations if needed

    if (isValid) {
      try {
        // Extract last 8 digits of telephone number
        const cleanedTelephone = telephone.substring(4);

        const response = await axios.post('http://127.0.0.1:8000/users/register/', {
          cin: identifient,
          phoneNumber: cleanedTelephone, // Send only the last 8 digits
          email: email,
          password: password,
          statut: statut,
          firstName: nom,
          lastName: prenom,
          dateDeDelivrance: dateDeDelivrance, // Include date_de_delivrance in the request
        });
        const respons = await axios.post('http://localhost:8000/profil/create/', {
          cartCin: identifient,
          phoneNumber: cleanedTelephone, // Envoyez uniquement les 8 derniers chiffres
          email: email,
          firstName: nom,
          lastName: prenom,
          dateDeDelivrance: dateDeDelivrance,
          
            
      });

        console.log('User registered successfully!', response.data);
        console.log('Profile created successfully!', respons.data);
       
        // Affichage du toast
        toast.success('Votre inscription a été complétée avec succès. Veuillez patienter pendant que administrateur vérifie votre compte.  !');
        // Reset form fields
        router.replace('/information');


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
               id="nom"
               label="Nom"
               variant="outlined"
               value={nom}
               onChange={(e) => setNom(e.target.value)}
            />
<TextField
  id="prenom"
  label="Prénom"
  variant="outlined"
  value={prenom}
  onChange={(e) => setPrenom(e.target.value)}
/>
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
              id="date-delivrance"
              label="Date de délivrance"
              type="date"
              variant="outlined"
              value={dateDeDelivrance}
              onChange={handleDateDeDelivranceChange}
              error={dateDeDelivranceError}
              helperText={dateDeDelivranceHelperText}
              required
            />
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
            <TextField
              id="telephone"
              label="Telephone"
              type="text"
              variant="outlined"
              value={telephone}
              onChange={handleTelephoneChange}
              error={telephoneError}
              helperText={telephoneHelperText}
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

            
            
            <FormControl>
              <FormLabel id="sexe-label">Role</FormLabel>
              <Select
                labelId="sexe-label"
                id="statut"
                value={statut}
                onChange={(e) => setSexe(e.target.value)}
                variant="outlined"
              >
                <MenuItem value="etudiant">Etudiant</MenuItem>
                <MenuItem value="enseignant">Enseignant</MenuItem>
                <MenuItem value="administratif">Adminstratif </MenuItem>
              </Select>
            </FormControl>
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
            S'inscrire
          </Button>
            Déjà inscrit ? <a href="/">Connectez-vous ici</a>
          </div>
        </>
      </Grid>
    </Grid>
        
      </CardContent>
      </Card>

    
  );
};

export default Inscrit;
