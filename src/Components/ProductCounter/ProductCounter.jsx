import React, { useEffect, useState } from 'react'
import { useCartContext } from '../../Context'
import './ProductCounter.css'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

export const ProductCounter = ({pid, quantity}) => {
    const {handleBuyProduct, handleDeleteProduct, getItemFromCart, cart} = useCartContext()

    const [counter, setCounter] = useState(getItemFromCart(pid))
    useEffect(() => {
        setCounter(getItemFromCart(pid))
    }, [cart])

    const navigation = useNavigate()
   

    return (
        <>
            {
                counter === 0 
                ?
                <button className='btn-primary' onClick={() => handleBuyProduct(pid)}>
                    Comprar
                </button>
                :
                <div className='counter'>
                    <button className='btn-primary' onClick={ () => handleDeleteProduct(pid, navigation)}>-</button>
                    <span>{counter}</span>
                    {
                        quantity === counter 
                        ? <span className='error-text'>Has llegado al limite</span>
                        : <button className='btn-primary' onClick={() => { handleBuyProduct(pid)}}>+</button>
                    }
                </div>
            }
            
        </>
    )
}

ProductCounter.propTypes = {
    pid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    quantity: PropTypes.number.isRequired,
};