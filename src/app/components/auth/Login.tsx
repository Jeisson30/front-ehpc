"use client"

import React, { useState } from 'react'
import { TextField, Button, Typography } from '@mui/material'
import { login } from './services/authService'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

const Login = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const router = useRouter()

  const sendLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    try {

      const res = await login( email, password )
      console.log('respuesta: ', JSON.stringify(res))

      if (!email  || !password) {
        Swal({
          title: 'Alerta',
          text: res.message,
          type: 'warning'
        })
        return
      }
      if (res.status) {
        Swal({
          title: res.message,
          type: 'success'
        })
        router.push('/dashboard')
      } else {
        Swal({
          title: 'Error',
          text: res.message,
          type: 'error'
        })
      }      
    } catch (error) {
        console.log('error en el login: ', error)       
    }
  };

  const goToRegister = () => {
    router.push('/register')
  }

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
      <Button variant="contained" color="primary" type="submit" fullWidth onClick={goToRegister}>
        ¿Ya tienes cuenta? Inicia sesión
      </Button>
    </div>
  );
};

export default Login;
