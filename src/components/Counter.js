import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import useCounter from './CounterCustomHook'

const Counter = () => {

    const {counter, handleSumar, handleRestar, handleReiniciar} = useCounter()

    return (
        <div>
            <h1>Contador: {counter}</h1>
            <Button variant="primary" onClick={handleSumar}>Sumar</Button>
            <Button variant="warning" onClick={handleRestar}>Restar</Button>
            <Button variant="danger" onClick={handleReiniciar}>Reiniciar</Button>
        </div>
    )
}

export default Counter
