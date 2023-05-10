import React from 'react'
import './Sass/Shopping.scss'
import { Link } from 'react-router-dom'

const ShoopIcon = () => {
  return (
    <div className='open-shopping'>
        <div className="right-open-shopping">
            
        </div>
        <div className="btn-geri">
            <Link to="/Product" className='link'>
            <button>
            <i class="bi bi-box-arrow-in-left"></i> <span>Geriyə</span> 
            </button>
            </Link>
        </div>

    </div>
  )
}

export default ShoopIcon