import React, { useEffect, useState } from 'react'
import { deleteProduct, getProductById} from '../../Fetching/productsFetching'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Loader, Navbar, ProductCounter } from '../../Components'
import './ProductDetail.css'

const ProductDetail = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const {pid} = useParams()
  const navigation = useNavigate()
  useEffect(()=> {
    getProductById(pid)
    .then(product => {
      setLoading(false)
      setProduct(product)
    })
  }, [])
  const role = localStorage.getItem('role')

  const handleDeleteProduct = () => {
    deleteProduct(product.id)
    navigation('/')
  }
  
  return (
    <main className='product-detail'>
      <Navbar/>
      {
        loading 
        ? 
        <Loader/>
        :
        (
          <div className='product-detail-card'>

            <div className='product-detail-image-container'>
              <img src={product.thumbnail} alt={product.name}/>
            </div>
            <div className='product-detail-info-card'>
              <div className='product-detail-info'>
                <h1>{product.name}</h1>
                <span>Precio: ${product.price}</span>
                <span>Unidades disponibles: {product.quantity}</span>
              </div>
              
              <div className='product-detail-controls'>
                <ProductCounter pid={product.id} quantity={Number(product.quantity)}/>
              </div>
            </div>
            {
              (role === 'superadmin' || role === 'admin') && <Link className='btn-primary' to={'/product/edit/' + product.id} >Editar producto</Link>
            }
            {
              role === 'superadmin' && <button className='btn-primary' onClick={handleDeleteProduct}>Eliminar</button>
            }
          </div>
        )
      }
    </main>
  )
}

export default ProductDetail