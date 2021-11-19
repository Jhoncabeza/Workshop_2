import React from 'react'
import { DivHeader } from '../Styles/Styles'
import Logo from './Logo'
import LogoCarrito from './LogoCarrito'


function Header() {
    return (
        <DivHeader >
            <Logo />
            <LogoCarrito />
        </DivHeader>
    )
}

export default Header