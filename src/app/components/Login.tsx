"use client"

import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { login } from './auth/services/authService';

const Login = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const sendLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();

    try {

      const result = await login( email, password )
      console.log('respuesta: ', result.message);
      
    } catch (error) {
        console.log('error en el login: ', error);       
    }

  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={sendLogin} style={{ width: '300px' }}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Iniciar Sesión
        </Button>
      </form>
    </div>
  );
};

export default Login;
