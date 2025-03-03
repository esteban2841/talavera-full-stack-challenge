'use client'
import { FormEvent, useContext } from "react"
import { CustomButton, CustomInput, CustomText } from "@/atoms"
import { useRouter } from "next/navigation"
import { StockContext } from "@/context"

export const LoginForm = () => {

  const router = useRouter()
  const { toggleSideBarMenu } = useContext(StockContext)

  const handleRegister = async (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    const formData = {
      correo: new FormData(e.currentTarget).get('correo'),
      contraseña: new FormData(e.currentTarget).get('contraseña'),
    }

    try {
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
        toggleSideBarMenu && toggleSideBarMenu('')
        router.push('/profile')
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Algo salio mal. Por favor intentelo de nuevo'
    }

  }

  return (
    <form onSubmit={(e)=>handleRegister(e)} className='flex flex-col justify-start w-full py-8 rounded-lg items-start gap-4 text-black'>
        <div className='flex flex-col gap-4 text-white rounded-md w-full bg-black p-6'>
            <CustomText content="Inicia sesión" type="subtitle" colorText="'#fff'" bold={true} position="left" />
            <CustomInput name="correo" content="correo" theme="dark" type="text" withLabel={false}/>
            <CustomInput name="contraseña" content="contraseña" theme="dark" type="password" withLabel={false}/>
            <CustomButton bg="white" colorText="black" bold={true} hoverColor="white" hoverBg="rgb(23 37 84)"  type="submit" content="Iniciar sesión" action="userLogin"/>       
        </div>
    </form>
  )
}
