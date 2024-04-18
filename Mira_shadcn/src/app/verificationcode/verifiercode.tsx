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

const Verifiercode = () => {
  const router = useRouter();
  
  const [message, setMessage] = useState('');
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState(false);
  const [codeHelperText, setCodeHelperText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleCodeChange = (e: { target: { value: any; }; }) => {
    const value = e.target.value;
    setCode(value);
    if (value.length !== 6) {
      setCodeError(true);
      setCodeHelperText('Le code doit être composé de 6 caractères.');
    } else {
      setCodeError(false);
      setCodeHelperText('');
    }
  };
  
  
    console.log('handleResetPassword', localStorage.getItem('code'))
    const handleResetPassword = async () => {
      const storedCode = localStorage.getItem('code');
      const enteredCode = code; // Assuming `code` is the user-input code
      console.log('Stored code:', storedCode);
      console.log('Entered code:', enteredCode);

      if (storedCode === enteredCode) {
        router.replace('/reinistialisermotdepasse');
        console.log('Les codes correspondent, réinitialisation du mot de passe.');
      } else {
        setErrorMessage('Le code saisi est incorrect.');
      }
    };
    
  

  return (
    <Card className="w-[350px] mt-5 mb-5 ml-5 mr-5">
      <CardTitle className="mt-5 mb-5 ml-10 mr-5">
        <div className="mt-5 mb-10 ml-10 mr-5">Code</div>
      </CardTitle>
      <CardContent>
        Veuillez entrer le code 
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <>
              <Stack spacing={3}>
                <TextField
                  id="code"
                  label="Code"
                  variant="outlined"
                  value={code}
                  onChange={handleCodeChange}
                  error={codeError}
                  helperText={codeHelperText}
                  InputProps={{
                    inputProps: { maxLength: 6 },
                  }}
                  required
                />
              </Stack>
              <br />
              {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
              <Button className="btn btn-primary" onClick={handleResetPassword}>Verifier </Button>
              {message && <div>{message}</div>}
              <ToastContainer />
            </>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Verifiercode;
