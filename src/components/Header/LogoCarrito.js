import React from 'react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DivCarrito } from '../Styles/Styles'

const LogoCarrito = () => {
    
    
    return (
        <DivCarrito>
            <FontAwesomeIcon icon={faShoppingCart} /> 
        </DivCarrito>
    )
}

export default LogoCarrito
