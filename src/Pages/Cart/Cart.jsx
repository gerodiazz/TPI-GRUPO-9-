import React, { useEffect } from 'react'
import { Navbar, ProductCounter } from '../../Components'
import { useCartContext } from '../../Context'
import { Link, useNavigate } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
  const {cart, handleBuyCart} = useCartContext()
  const navigation = useNavigate()

  useEffect( () => {
    if(!cart){
      navigation('/login')
    }
  }, [])


  return (

    <main>
      <Navbar/>
      <section className='cart-section'>
      {
      cart ? 
      (
        cart.length === 0 ? 
        <>
          <h2>Aun no has comprado productos :( </h2>
          <Link className='btn-primary' to={'/'}>Ir a inicio</Link>
        </>
        :
        
        cart.map(item => (
          <div key={item.id} className='cart-item'>
            <div>
              <h2>{item.name}</h2>
              <span><span className='bold'>Precio: </span>${item.price}</span>
            </div>
            <ProductCounter pid={item.id} quantity={Number(item.quantity)}/>
          </div>
        ))
      )
      
      : <h1>Carrito no encontrado</h1>
      }

      {
        cart?.length !== 0 
        &&
        <button className='btn-primary' onClick={()=>{ 
          handleBuyCart()
          navigation('/')
          
        }}>Confirmar Carrito</button>
      }
     </section>
    </main>
  )
}

export default Cart