'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

const Login = () => {
  return (
    <div className='login'>
        <Image 
            src = 'https://links.papareact.com/2i6'
            width={300}
            height={300}
            alt='Logo'
        />
        <button 
         onClick={()=>signIn("google")}
         className='loginButton'> Sign to use ChatGpt</button>
    </div>
  )
}

export default Login