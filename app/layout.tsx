import React from 'react';
import './globals.css'
import {Lato} from "next/font/google"
import Header from './components/header';

const lato = Lato({subsets:["latin"],weight:["100","300","400","700","900"]})


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
