import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import './Calendar.css'
function CalendarApp() {
    let [cell, setCell] = useState([])
    let fullData = 0;
    let year = 0;
    let month = 0;
    let calendarCells = [];
    let currentRow = [];
    function changeData(e) {
        fullData = e.target.value;
        year = fullData.slice(0, 4)
        month = fullData.slice(-2)
       
    }

    function renderCalendar() {
        if (!year || !month) { return }
        
        let date = new Date(year, month, 0)
        let days = date.getDate()
        let firstDay = new Date(year, month - 1, 1).getDay();
        let startOffset = firstDay == 0 ? 6 : firstDay - 1;
        for (let j = 0; j < startOffset; j++) {
            currentRow.push(<td key={`space-${j}`} ></td>)
        }
        for (let i = 1; i <= days; i++) {
            if (currentRow.length >= 5) {
                currentRow.push(<td key={i} style={{ backgroundColor: 'red', textAlign: 'center', color: 'white' }}>{i}</td>)
            }
            else {
                currentRow.push(<td key={i} style={{ backgroundColor: 'grey', textAlign: 'center', color: 'white' }}>{i}</td>)
            }

            if (currentRow.length == 7 || i == days) {
              if (i == days) {
                    for (let j = currentRow.length; j < 7; j++) {
                        currentRow.push(<td key={`space-${j+10}`} ></td>)
                    }
                }
                calendarCells.push(<tr key={`row-${i}`}>{currentRow}</tr>)
                currentRow = [];
            }

        }
        
        setCell([calendarCells])
    }
    return (
        <>
        
            <div className="calendarBlock">
                <div className="inputBlock">
                    <h2>Выберите месяц</h2><input className="calendarInput" type="month" onChange={changeData}></input><button className="calendarBtn" onClick={renderCalendar}>создать</button>
                </div>



                <div className="calendarContainer">
                    <table className="calendar" border="1">
               <thead><tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr></thead>
                <tbody>{cell}</tbody>
            </table>
                </div>
            </div>
        </>
    )
}



export default CalendarApp