// import React from 'react';
// import { useState } from 'react';
// import propTypes from 'prop-types';
// // Trabajando con functional components

// type AppProps = {
//   saludo: string,
//   subtitulo?: string
// } & typeof defaultProps;

// const defaultProps = {
//   subtitulo: 'Soy un subtitulo',
// };

const PrimeraApp = () => {
  const number: number = 0;
  return (
    <>
      <h1>Hola mundo</h1>
      <h3>{number}</h3>
      <button>
        Aumentar
      </button>
    </>
  );
}
// PrimeraApp.defaultProps = defaultProps
export default PrimeraApp;