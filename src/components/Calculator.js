import React from 'react'
import './Calculator.css'

const Calculator = () => {
    const[number1, setNumber1] = React.useState(0)
    const [number2, setNumber2] = React.useState(1)
    const [result, setResult] = React.useState(0)
    
    return (
        <div className='calculator'>
            
            <h1>Calculator sum of two number:</h1>
            <div className='calculator-form'>
                <input type="number" value={number1} onChange={event => {
                    const value = event.target.value
                    setNumber1(parseInt(value))
                }}/>

                <input type="number" value={number2} onChange={event => {
                    const value = event.target.value
                    setNumber2(parseInt(value))
                }}/>
                <button onClick={() => {
                    setResult(number1 + number2)
                }}> Calculator </button>
            </div>

            <div>
                Result:{result}
            </div>
        </div>
    )
}

export default Calculator
