'use client'
import { FormEvent } from "react"
import { CustomButton, CustomInput, CustomText } from "@/atoms"
import { useRouter } from "next/navigation"


export const RegisterForm = () => {

  const router = useRouter()

  const handleRegister = async (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    const formData = {
      nombre: new FormData(e.currentTarget).get('nombre'),
      correo: new FormData(e.currentTarget).get('correo'),
      usuario: new FormData(e.currentTarget).get('usuario'),
      contraseña: new FormData(e.currentTarget).get('contraseña'),
    }

    try {
      const registerResponse = await fetch(
        '/api/register',
        {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          cache: 'no-cache',
          body: JSON.stringify(formData)
        }
      )
      if(registerResponse.status == 200){
        const loginResponse = await fetch(
          '/api/login',
          {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            cache: 'no-cache',
            body: JSON.stringify({
              correo: formData.correo, 
              contraseña: formData.contraseña
            })
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
            <CustomButton bg="white" colorText="black" bold={true} hoverColor="white" hoverBg="rgb(23 37 84)"  type="submit" content="Registrarme ahora" action="userRegistration"/>
        </div>
    </form>
  )
}
