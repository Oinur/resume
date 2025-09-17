import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import CounterApp from './apps/counter/CounterApp'
import CalculatorApp from './apps/calculator/CalculatorApp';
import ToDoList from './apps/toDoList/toDoListApp';
import CalendarApp from './apps/calendar/CalendarApp';
import ApiApp from './apps/api/ApiApp';
import './Navigation.css';
function Navigation() {
    return (
    <div className='navigation-bar'>
      <nav className='nav'>
        <NavLink to="/counter" className={({ isActive }) => isActive ? "active" : ""}>
          Счётчик
        </NavLink>
        <NavLink to="/calculator" className={({ isActive }) => isActive ? "active" : ""}>
          Калькулятор
        </NavLink>
        <NavLink to="/todo" className={({ isActive }) => isActive ? "active" : ""}>
          To-do
        </NavLink>
        <NavLink to="/calendar" className={({ isActive }) => isActive ? "active" : ""}>
          Календарь
        </NavLink>
        <NavLink to="/api" className={({ isActive }) => isActive ? "active" : ""}>
          Api
        </NavLink>
      </nav>
            
            <Routes>
                <Route path="/counter" element={<CounterApp />} />
                <Route path="/calculator" element={<CalculatorApp />} />
                <Route path="/todo" element={<ToDoList />} />
                <Route path="/calendar" element={<CalendarApp />} />
                <Route path="/api" element={<ApiApp />} />
            </Routes>
            
    </div>
  );
}


export default Navigation;