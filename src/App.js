import React, { Fragment, useState, useEffect } from "react";
import { Cards } from "./components/Cards";
import './App.css';

function App() {
    // State de getCountriesAPs
  const [tiendas, guardarTiendas] = useState({});

  const consultarAPI = async () => {
    const api = await fetch("https://apitest.cooltra.com/ob/getCountries");
    const tiendas = await api.json();
    // console.log(getCountriesAP);
    guardarTiendas(tiendas);
  };

  // Cargar una getCountriesAP
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Fragment>
        <Cards tiendas={tiendas} />
    </Fragment>
  );
}

export default App;