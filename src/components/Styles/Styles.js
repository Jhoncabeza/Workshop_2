import { Link } from 'react-router-dom'
import styled from 'styled-components'

// Header
export const DivHeader = styled.div`
   display: flex;
   flex-direction: row;  
   align-items:center;
   justify-content: space-between;
   margin: 30px;
`
export const DivCarrito = styled.div`
    width: 6rem;
    height: 4rem;
    border-radius:10px;
    background-color:#630A10;
    color: white;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-around;
`

export const H1Logo = styled.h1`
    font-family: 'Inter', sans-serif;
    color: #630A10;
    font-size: 30px;
`

// Main
export const DivMain = styled.div`
    width: 100%;
    height: auto;
`

export const ImgMain = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;   
    border-radius:20px;
`

//Cards

export const DivCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const DivCard = styled.div`
    display: grid;
    place-items: center;
    margin: 30px;
    width: 12rem;
    background-color: #FCF0C8;
    padding:20px;
    border-radius: 20px;
`

export const ImgCards = styled.img`
    width:10rem;
    height:10rem;
    border-radius: 20px;
`

export const H6Cards = styled.h6`
    font-size: 24px;
    margin-top: 5px;
    font-family: 'Shippori Antique B1', sans-serif;
`

export const H5Cards = styled.h5`
    font-size: 18px;
    font-family: 'Shippori Antique B1', sans-serif;
`

export const ButtonCards = styled.button`
    border-radius: 10px;
    width:10rem;
    height: 4rem;
    background-color:#630A10;
    color: white;
    font-size: 20px;
`

export const LinkCard = styled(Link)`
    text-decoration: none;
    color: black;
`
//detalles 

export const DivDetalles = styled.div`
    display: flex;
    justify-content: center;
`

