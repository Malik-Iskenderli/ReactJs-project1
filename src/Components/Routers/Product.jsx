import React, { useState } from 'react'
import './Sass/Product.scss'
import { Link } from 'react-router-dom'

const Product = () => {

  return (
    <div>

      <div className="product-header">
        <div className="product-text">
          <h1>Product</h1>
        </div>
        <div className="shop-icon">
          <Link to="/shopping">
          <button>
            <i class="bi bi-cart3"></i>
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Product