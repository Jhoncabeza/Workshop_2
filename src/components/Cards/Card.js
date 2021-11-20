import React, { useState } from 'react'
import { ButtonCards, DivCard, DivCards, H5Cards, H6Cards, ImgCards, LinkCard } from '../Styles/Styles'

const Card = ({ productos }) => {

    const [carrito, setCarrito] = useState([])

    return (
        <DivCards>
            {
                productos.map((product) => (
                    <div style={{textAlign: 'center'}} key={product.id}>
                        <LinkCard to={`Detalle/${product.id}`} >
                            <DivCard >
                                <ImgCards src={product.img} alt="" />
                                <H5Cards>$ {product.precio} /kg</H5Cards>
                                <H6Cards>{product.nombre}</H6Cards>
                            </DivCard>
                        </LinkCard>

                        <ButtonCards onClick={() => {
                            let articulo = carrito
                            articulo.push(product)
                            setCarrito(articulo)
                            localStorage.setItem("carrito",JSON.stringify(carrito))
                        }}>Agregar</ButtonCards>

                    </div>
                ))
                
            }

        </DivCards>
    )
}

export default Card
