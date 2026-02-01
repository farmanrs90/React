import React from 'react'
import { Outlet, Route } from 'react-router-dom'
import { Header } from '../Client/Header'
import Footer from './Footer'


export default function ClientLayout() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />



    </>
  )
}
