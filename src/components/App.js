import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detalle from './DetalleProducto/Detalle';
import Formulario from './Formulario/Formulario';
import Home from './Home/Home';


function App() {
  const [producto, setProducto] = useState([])

  useEffect(() => {
    cargarData()
  }, [])

  const cargarData = async () => {
    const url = "https://workshop-tiendita.herokuapp.com/productos"
    const data = await fetch(url)
    const response = await data.json()
    setProducto(response)
  }

  return (
    <div>
      <Router> 
        <Routes>
          <Route exact path="/"            element = {<Home category={producto} />} />
          <Route exact path="/Detalle/:id" element = {<Detalle detail={producto} />} />
          <Route exact path="/Carrito"     element = {<Formulario />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
