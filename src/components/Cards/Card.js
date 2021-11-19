import React from 'react'
import { ButtonCards, DivCard, DivCards, H5Cards, H6Cards, ImgCards, LinkCard } from '../Styles/Styles'

const Card = ({ productos }) => {

    return (
        <DivCards>
            {
                productos.map((product) => (
                    <LinkCard key={product.id} to={`Detalle/${product.id}`} >
                        <DivCard >
                            <ImgCards src={product.img} alt="" />
                            <H5Cards>$ {product.precio} /kg</H5Cards>
                            <H6Cards>{product.nombre}</H6Cards>
                            <ButtonCards>Agregar</ButtonCards>
                        </DivCard>
                    </LinkCard>
                ))
                
            }
        </DivCards>
    )
}

export default Card
