import React from 'react'
import PropTypes from 'prop-types'
import product from './product'

const ProductItem = ({ product, total, onAddToCartClicked}) => {
    <div style={{margin:20}}>
        <Product
            title={product.title}
            price={product.price}
            quantity={product.inventory}
            />
        <button
        onClick={onAddToCartClicked}
        disabled={product.inventory>0?'':'disabled'}>
            {product.inventory>0?'Add to cart':'Sold out'}
            </button>    

        
    </div>
}