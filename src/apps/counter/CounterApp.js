import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import './CounterApp.css'

function CounterApp() {
    let [count, setCount] = useState(0)

    
    

    let plusCount = () => {
        setCount(count + 1)
    }

    let minusCount = () => {
        setCount(count - 1)
    }

    return (
        <>
        
        <div className='counterMain'>
        
            <div className='counterContainerBlock'>
                <span style={{fontSize:'150px'} }>Счет</span>
                <span style={{ fontSize: '100px'} }><strong>{count}</strong></span>
                <div className='counterBtns'>
                    <button className='minusBtn' onClick={minusCount}><strong>Уменьшить -</strong></button>
                    <button className='plusBtn' onClick={plusCount}><strong>+ Увеличить</strong></button>
                </div>

            </div>
        </div>
     </>
    )
    


}


export default CounterApp