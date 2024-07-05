import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoIosMenu, IoMdClose } from "react-icons/io";

import './Navbar.css'

const Navbar = () => {
  const navigation = useNavigate()
  const token = localStorage.getItem('auth-token')
  const role = localStorage.getItem('role')
  const [open, setOpen] = useState(false)
  const handleLogout = () => {
    localStorage.removeItem('auth-token')
    localStorage.removeItem('role')
    navigation('/login')
  }
  return (
    <header>
      <h2>Mateando.oeste</h2>
      <nav>
        <NavLink to={'/'}>
          Home
        </NavLink>
        {
          token && 
          <NavLink to={'/cart'}>
            Carrito
          </NavLink>
        }
        {
          role === 'superadmin' && 
          <NavLink to={'/product/new'}>
            Crear Producto
          </NavLink>
        }
        
        {
          !token &&
          <>
            <NavLink to={'/login'}>
              Login
            </NavLink>
            <NavLink to={'/register'}>
              Registro
            </NavLink>
          </>
        }
        {
          token && <button className='btn-primary' onClick={handleLogout} >Cerrar sesion</button>
        }
        
      </nav>
      <nav className={open ? 'menu-open' : 'menu-close'}>
      <NavLink to={'/'}>
          Home
        </NavLink>
        {
          token && 
          <NavLink to={'/cart'}>
            Carrito
          </NavLink>
        }
        {
          role === 'superadmin' && 
          <NavLink to={'/product/new'}>
            Crear Producto
          </NavLink>
        }
        
        {
          !token &&
          <>
            <NavLink to={'/login'}>
              Login
            </NavLink>
            <NavLink to={'/register'}>
              Registro
            </NavLink>
          </>
        }
        {
          token && <button className='btn-primary' onClick={handleLogout} >Cerrar sesion</button>
        }
        
      </nav>
      <button className='menu-btn' onClick={() => setOpen(!open)}> {open ? <IoMdClose/> : <IoIosMenu/>}</button>
    </header>
  )
}

export default Navbar