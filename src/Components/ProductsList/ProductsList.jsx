import React, { useEffect, useState } from 'react'
import { getProducts } from '../../Fetching/productsFetching'
import ProductCard from '../ProductCard/ProductCard'
import Loader from '../Loader/Loader'
import './ProductList.css'

const ProductsList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading ] = useState(true)
    useEffect(()=> {
        getProducts()
        .then(products => {
            setLoading(false)
            setProducts(products)
        })
    }, [])

    return (
        <>
            {
                loading 
                ? 
                <Loader />
                : 
                (
                    products.length === 0 
                    ?
                    <h2>No hay productos que coincidan con esa busqueda</h2>
                    :
                    <div className='product-list'>
                        {
                            products.map(product => (
                                <ProductCard product={{...product, price: Number(product.price)}} key={product.id}/>
                            ))
                        }
                    </div>
                    
                )
            }
        </>
    )
}

export default ProductsList