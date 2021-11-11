import { useState } from 'react'

const useCounter = () => {

    const [counter, setCounter] = useState(0) //este es el estado

    const handleSumar = () => {
        setCounter(counter + 1)
    }

    const handleRestar = () => {
        setCounter(counter - 1)
    }

    const handleReiniciar = () => {
        setCounter(0)
    }

    return { //the return is AN OBJECT, so {} are used. not ()
        counter,
        handleSumar,
        handleRestar,
        handleReiniciar
    }
}

export default useCounter;