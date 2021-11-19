import React from 'react'
import { useNavigate, useParams } from 'react-router';

import { ButtonCards, DivCard, DivDetalles, H5Cards, H6Cards, ImgCards } from '../Styles/Styles';

const Detalle = ({detail}) => {

    const navegar = useNavigate();
    
    const params = useParams();
    const {id} = params;
   
    const busq = detail.find(product => product.id === id)
    
    const {precio,nombre,img} = busq

    return (
        <DivDetalles>
            {
                <DivCard >
                    <ImgCards src={img} alt="" />
                    <H5Cards>$ {precio} /kg</H5Cards>
                    <H6Cards>{nombre}</H6Cards>
                    <ButtonCards to="/" 
                    onClick={() => navegar(`/`)}
                    >Regresar</ButtonCards>
                </DivCard>
            }
        </DivDetalles>
    )
}

export default Detalle
