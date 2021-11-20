import React from 'react'
import { Link } from 'react-router-dom'
import { DivHeader } from '../Styles/Styles'
import Logo from './Logo'
import LogoCarrito from './LogoCarrito'


function Header() {
    return (
        <DivHeader >
            <Logo/>
            <Link to='/Carrito'><LogoCarrito /></Link>
            
        </DivHeader>
    )
}

export default Header