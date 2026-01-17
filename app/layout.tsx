import React from 'react';
import './globals.css'
import {Lato} from "next/font/google"
import Header from './components/header';
import type {Metadata} from 'next'
const lato = Lato({subsets:["latin"],weight:["100","300","400","700","900"]})

export const metadata:Metadata = {
  title:"NACOS LASU",
  icons:'/logo.png'
}
function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">

      <body className={lato.className}>
        <Header/>
             {children}
      </body>
    </html>
  )
}

export default RootLayout
