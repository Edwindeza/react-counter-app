import React from 'react';
import { useState } from 'react';
import propTypes from 'prop-types';
// Trabajando con functional components

type AppProps = {
  saludo: string,
  subtitulo?: string
} & typeof defaultProps;

const defaultProps = {
  subtitulo: 'Soy un subtitulo',
};

const PrimeraApp = ({saludo, subtitulo}: AppProps) => {
  const number: number = 0;
  return (
    <>
      <h1>{saludo}</h1>
      <h2>{subtitulo}</h2>
      <h3>{number}</h3>
      <button>
        Aumentar
      </button>
    </>
  );
}
PrimeraApp.defaultProps = defaultProps
export default PrimeraApp;