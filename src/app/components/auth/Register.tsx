"use client"

import React, { useState } from 'react'
import { TextField, Typography, Button } from '@mui/material'
import { register } from './services/authService'
import { useRouter } from 'next/navigation'

const Register = () => {

  const [name, setName] = useState<string>('')
  const [document, setDocument] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const router = useRouter()

  const sendRegister = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    try {
      const result = await register(name, document, email, phone, password)
      console.log('respuesta registro: ', result.message);
      setName('')
      setDocument('')
      setEmail('')
      setPhone('')
      setPassword('')
      router.push('/login')
        
    } catch (error) {
      console.log('error: ', error);
      
    }

  }

  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <Typography variant="h2" gutterBottom>
        Registro
      </Typography>
      <form onSubmit={sendRegister}> 
        <TextField
          label="Nombre"
          variant='outlined'
          fullWidth
          margin='normal'
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
        <TextField
          label="Número de cédula"
          variant='outlined'
          fullWidth
          margin='normal'
          value={document}
          onChange={(e) => setDocument(e.target.value)} 
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Télefono"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
          Enviar
        </Button>
      </form>
    </div>
  )

}
export default Register