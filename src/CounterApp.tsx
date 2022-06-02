import propTypes from 'prop-types';
import { useState } from 'react';

type appProps = {
  value: number
}

const CounterApp = ({value}: appProps) => {
  const [counter, setCounter] = useState(value)

  const handleAdd = () => {
    setCounter(counter + 1)
    // setCounter((c) => c + 1)
  }

  const handleReset = () => {
    setCounter(value)
  }

  const handleMinus = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={ handleMinus }>-1</button>
      <button onClick={ handleReset }>Reset</button>
      <button onClick={ handleAdd }>+1</button>
    </>
  )
}
export default CounterApp;