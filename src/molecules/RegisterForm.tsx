'use client'
import { FormEvent } from "react"
import { CustomButton, CustomInput, CustomText } from "@/atoms"
import { useRouter } from "next/navigation"
import axios from "axios"


export const RegisterForm = () => {

  const uri = 'http://localhost:3000'
  
  const router = useRouter()
  
  const handleRegister = async (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log("TCL: RegisterForm -> uri", uri)

    const formData = {
      name: new FormData(e.currentTarget).get('nombre'),
      email: new FormData(e.currentTarget).get('correo'),
      username: new FormData(e.currentTarget).get('usuario'),
      password: new FormData(e.currentTarget).get('contraseña'),
    }
    
    const data = JSON.parse(JSON.stringify(formData))
		console.log("TCL: handleRegister -> data", data)
    try {
      const registerResponse = await axios.post(
        `${uri}/api/auth/register`,
        {
          ...data
        }
      )
      console.log("TCL: handleRegister -> registerResponse", registerResponse)
      if(registerResponse.status == 200){
        const loginResponse = await axios(
          `${uri}/api/auth/login`,
          {
            ...data
          }
        )
        if(loginResponse.status == 200){
          await loginResponse.json()
          router.push('/')
        }
      }
    } catch (error) {
      const errorMessage = (error as any).response?.data?.message || 'Algo salio mal. Por favor intentelo de nuevo'
    }

  }

  return (
    <form onSubmit={(e)=>handleRegister(e)} className='flex flex-col justify-start w-full p-4 rounded-lg items-start gap-4 text-black'>
        <div className='flex flex-col gap-4 text-white rounded-md w-full bg-black p-4'>
            <CustomText content="Registrate" type="subtitle" colorText="'#fff'" bold={true} position="left" />
            <CustomInput name="nombre" content="Nombre" theme="dark" type="text" withLabel={false}/>
            <CustomInput name="correo" content="Correo electronico" theme="dark" type="text" withLabel={false}/>
            <CustomInput name="usuario" content="Usuario" theme="dark" type="text" withLabel={false}/>
            <CustomInput name="contraseña" content="Contraseña" theme="dark" type="password" withLabel={false}/>
            <CustomButton bg="white" colorText="black" bold={true} hoverColor="white" hoverBg="rgb(23 37 84)"  type="submit" content="Registrarme ahora"/>
        </div>
    </form>
  )
}
