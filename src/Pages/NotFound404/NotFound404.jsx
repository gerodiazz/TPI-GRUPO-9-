import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound404.css'
import { Navbar } from '../../Components'
const NotFound404 = () => {
  return (
    <main className='not-found'>
        <Navbar/>
        <h1>Error 404 pagina no encontrada</h1>
        <Link to={'/'}>Ir a inicio</Link>
    </main>
  )
}

export default NotFound404


