/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VOJw9MEXHzN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Paper,
  Grid,
  Stack,
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  InputAdornment,
  IconButton,
} from '@mui/material';
import axios, { AxiosError } from 'axios';
import { DrawerDialogDemo } from '@/components/DrawerDialogDemo';


export default function Reglement() {
  const [userRole, setUserRole] = useState(null);
  const [type, setType] = useState('');
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [identifiant, setIdentifiant] = useState('');
  
  useEffect(() => {
    // Simulated API call to fetch user's role
    const fetchUserRole = () => {
      // Replace this with your actual logic to fetch user's role
      // For example, you might fetch it from a server or from local storage
      const role =  "admin" /* Your logic to fetch user's role */
      setUserRole(role);
    };

    fetchUserRole();
  }, []);

  const isAdmin = userRole === "admin";


  
  const [rules, setRules] = useState([]);

  useEffect(() => {
    // Fetch rules from your Django API
    const fetchRules = async () => {
      try {
        const response = await fetch('http://localhost:8000/documentation/reglements/');
        if (!response.ok) {
          throw new Error('Failed to fetch rules');
        }
        const data = await response.json();
        setRules(data);
      } catch (error) {
        console.error('Error fetching rules:', error.message);
      }
    };

    fetchRules();
  }, []);

 
  const handleSubmit = async () => {
    
      try {
        // Extract last 8 digits of telephone number
        
        const response = await axios.post('http://localhost:8000/documentation/add_rule/', {
          identifiant: identifiant,
          titre: titre,
          description: description,
          type: type, 
          
         });
         window.location.reload();
        console.log('User registered successfully!', response.data);
        
       

      } catch (error: AxiosError | any) {
        if (axios.isAxiosError(error)) {
          console.error('Erreur ajout regle:', error.message);
          // Handle Axios errors
        } else {
          console.error('Unknown error:', error);
          // Handle other errors
        }
      }
    
  };


  return (
    <div>
      <div className="text-4xl font-bold mb-8 text-center pt-20"> Reglement Interieur</div>
      
        <div className="space-y-6">
          {isAdmin && (
            <>
            
             
            <div className="space-y-6">
              <div>Ajouter des reglements .</div>
              <div className="space-y-2">
              
                
               
          <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
          <Stack spacing={3}>
          <Label htmlFor="rule-name">Identifiant</Label>
          <TextField
               id="identifiant"
               label="identifiant"
               variant="outlined"
               value={identifiant}
               onChange={(e) => setIdentifiant(e.target.value)}
            />
            <Label htmlFor="rule-name">Titre</Label>
          <TextField
               id="titre"
               label="Titre"
               variant="outlined"
               value={titre}
               onChange={(e) => setTitre(e.target.value)}
            />
            
            <div className="space-y-2">
              
                <Label htmlFor="rule-name">Description</Label>
          <Textarea
               id="titre"
               value={description}
               onChange={(e) => setDescription(e.target.value)}
            />
            </div>
            
            <FormControl>
              <FormLabel id="sexe-label">Type</FormLabel>
              <Select
                
                id="statut"
                value={type}
                onChange={(e) => setType(e.target.value)}
                variant="outlined"
              >
                <MenuItem value="interieur">Reglement Interieur</MenuItem>
                <MenuItem value="loi">Loi et Cerculaire</MenuItem>
                <MenuItem value="examens">Reglement des Examens </MenuItem>
              </Select>
            </FormControl>
            </Stack>
            </Grid>
            </Grid>
                
              </div>
              
             
              <Button onClick={handleSubmit} className="py-3 px-6">Ajouter</Button>
              
              </div>
              
             
            </>
          )}
        </div>
        <div className="space-y-6">
        <div className="mb-4 text-center">Liste des règlements</div>
      <ul className="space-y-4">
        {rules.map((rule, index) => (
          <li key={index}>
            <div className="border p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-bold mb-8 text-center ">{rule.titre}</div>
                  <div>{rule.description}</div>
                </div>
                {isAdmin && <> <DrawerDialogDemo/> </>}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  
    </div>
  );
}
