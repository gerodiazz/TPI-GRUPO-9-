import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'
import PropTypes from 'prop-types';
const ProductCard = ({product}) => {
    
    const {price, name, thumbnail, id} = product
    return (
        <div className='product-card'>
            <h3>{name}</h3>
            <div className='image-container'>
                <img src={thumbnail} alt={name}/>
            </div>
            <div className='product-controls'>
                <span><span className='bold'>Precio:</span> ${price}</span>
                <Link className='btn-primary' to={'/product/detail/' + id}>Ver detalle</Link>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
};

export default ProductCard