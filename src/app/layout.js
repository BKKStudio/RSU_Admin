"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  useEffect(()=>{
    import('bootstrap/dist/js/bootstrap');
  },[])
  
  return (

    <html lang="en">
      <head>
        <title>มหาวิทยาลัยรังสิต | RANGSIT UNIVERSITY</title>
      </head>
      <body className={inter.className}>
      {children} 
      </body>
    </html>
  )
}