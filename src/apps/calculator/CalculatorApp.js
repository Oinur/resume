import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import './CalculatorApp.css'

function CalculatorApp() {
    let [input, setInput] = useState('')
    let symbols = ['+', '-', '/', '*'];
            let setText = (e) => {        
                let char = e.currentTarget.textContent
                if (symbols.includes(char)) {
                    if (symbols.some(sym => input.includes(sym))) {
                        return
                    }
                }
                    setInput(prev => prev + char)
            }

            let calculate = () => {
                setInput(String(eval(input).toFixed(1)))

            } 

    function clear() {
        setInput('')
    }

    return (
        <>
            
            <div className="calculatorContainer">
                 
                <div className="calculatorBlock">
                    <span className="calculatorInput"><button className="clearBtn" onClick={clear}>C</button>
                        <input className="calInput" type="text" disabled value={input}></input>
                </span>
                <div className="btnContainer">
                        <button className="numBtn" onClick={setText}>1</button>
                        <button className="numBtn" onClick={setText}>2</button>
                        <button className="numBtn" onClick={setText}>3</button>
                        <button className="numBtn" onClick={setText}>/</button>
                        <button className="numBtn" onClick={setText}>4</button>
                        <button className="numBtn" onClick={setText}>5</button>
                        <button className="numBtn" onClick={setText}>6</button>
                        <button className="numBtn" onClick={setText}>*</button>
                        <button className="numBtn" onClick={setText}>7</button>
                        <button className="numBtn" onClick={setText}>8</button>
                        <button className="numBtn" onClick={setText}>9</button>
                        <button className="numBtn" onClick={setText}>-</button>
                        <button className="numBtn" onClick={setText}>.</button>
                        <button className="numBtn" onClick={setText}>0</button>
                        <button className="numBtn" onClick={calculate}>=</button>
                        <button className="numBtn" onClick={setText}>+</button>
                </div>
                </div>
            </div>


            
        </>
    )
}



export default CalculatorApp;