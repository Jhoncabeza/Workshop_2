import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { DivTablaCarrito, H1Titulo, ImgCards, TablaCarrito, TrCarrito } from '../Styles/Styles'

const Carrito = () => {
    let car = JSON.parse(localStorage.getItem('carrito'))

    return (
        <div>
            <Link to="/"><FontAwesomeIcon icon={faArrowLeft}/></Link>

            <H1Titulo>Carrito</H1Titulo>
            {
                car.map(product => (
                    <DivTablaCarrito key={product.id}>
                        
                        <TablaCarrito>
                            <tbody>
                                <TrCarrito>
                                    <td>{product.nombre}</td>
                                    <td>{product.precio}</td>
                                    <td ><ImgCards src={product.img} alt="" /></td>
                                </TrCarrito>
                            </tbody>
                        </TablaCarrito>
                    </DivTablaCarrito>
                ))
            }
        </div>
    )
}

export default Carrito
