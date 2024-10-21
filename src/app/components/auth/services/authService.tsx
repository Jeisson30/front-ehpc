import { AUTHS_URL } from "@/app/constants/urls";

export const login = async (email: string, password: string) => {

  try {
    const response = await fetch(AUTHS_URL.LOGIN, {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({ email, password })
    })
    if (!response.ok) {
      alert('Error en login')
    }
    const data = await response.json()
    console.log('respuesta login: ', data);
    return data
  
  } catch (error) {
      console.error('Error en el servicio de login:', error)
  }
}