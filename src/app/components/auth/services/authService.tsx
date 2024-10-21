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
    const data = await response.json()
    console.log('respuesta login: ', data);
    return data
  
  } catch (error) {
      console.error('Error en el servicio de login:', error)
  }
}

export const register = async (name: string, cc_document: string, email: string, phone: string, password: string) => {
  try {
    const response = await fetch(AUTHS_URL.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, cc_document, email, phone, password })
    })
    if (!response.ok) {
      console.log('error en el servicio'); 
    }

    const data = await response.json()
    console.log('respuesta register: ', data);
    return data

  } catch (error) {
    console.error('Error en el registro usuario', error)
  }
}