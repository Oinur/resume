import React from 'react';
import logo from './logo.svg';
import { useRef, useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import './App.css';
import Navigation from './Navigation';
import CounterApp from './apps/counter/CounterApp'
import CalculatorApp from './apps/calculator/CalculatorApp';
import ToDoList from './apps/toDoList/toDoListApp';
import CalendarApp from './apps/calendar/CalendarApp';
import ApiApp from './apps/api/ApiApp';


function App() {
  let [isActive, setIsActive] = useState<boolean>(false)
  let htmlRef = useRef<HTMLDivElement>(null);
  let cssRef = useRef<HTMLDivElement>(null);
  let jsRef = useRef<HTMLDivElement>(null);
  let tsRef = useRef<HTMLDivElement>(null);
  let reactRef = useRef<HTMLDivElement>(null);
  let burgerBtnRef = useRef<HTMLButtonElement>(null)
  let navRef = useRef<HTMLDivElement>(null)
  let [visible, setVisible] = useState<boolean>(false)
  let [activeApp, setActiveApp] = useState<null | string>(null)

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
       
        setTimeout(() => {
          htmlRef!.current?.classList.add('animation')
          cssRef!.current?.classList.add('animation')
          jsRef!.current?.classList.add('animation')
          tsRef!.current?.classList.add('animation')
          reactRef!.current?.classList.add('animation')
          
        },700)
        
        setIsActive(true)
      }
    }

      window.addEventListener('scroll', onScroll)
      return () => {
        window.removeEventListener('scroll', onScroll)
      }


  },[isActive])

  const openApp = (app: string) => setActiveApp(app);
  const closeApp = () => setActiveApp(null);

  const onClick = () => {
    if (!visible) {
        navRef.current!.classList.add('visible')
        setVisible(true)
        
      }
      else{
        setVisible(false)
        navRef.current!.classList.remove('visible')
      }
  }



  useEffect(() => {

    burgerBtnRef.current!.addEventListener('click', onClick)

  return () => {
    burgerBtnRef.current!.removeEventListener('click', onClick)
  }
    
  },[visible])
    

  
  






  return (
    <div className='main-page'>
      <button ref={burgerBtnRef} className='burger-btn'>☰</button>


      <div ref={navRef} className='navigation-bar'>
            <nav className='nav'>
              <NavLink to="/counter" className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => openApp("counter")}
              >
                Счётчик
              </NavLink>
              <NavLink to="/calculator" className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => openApp("calculator")}
              >
                Калькулятор
              </NavLink>
              <NavLink to="/todo" className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => openApp("toDo")}
              >
                To-do
              </NavLink>
              <NavLink to="/calendar" className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => openApp("calendar")}
              >
                Календарь
              </NavLink>
              <NavLink to="/api" className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => openApp("api")}
              >
                Api
              </NavLink>
            </nav>                
          </div>

          {activeApp && (
        <div className="modal-backdrop" onClick={closeApp}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeApp}>X</button>
            {activeApp === "counter" && <CounterApp /> }
            {activeApp === "calculator" && <CalculatorApp />}
            {activeApp === "toDo" && <ToDoList />}
            {activeApp === "calendar" && <CalendarApp />}
            {activeApp === "api" && <ApiApp />}
          </div>
        </div>
      )}


        <div className='profile-section'>
          <div className='profile1'>
            <div className='profile-image'></div>
            <h1 className='profile-titles'>Привет, я Айнур Аглиуллин</h1>
          </div>
          <div className='profile2'>
            <div className='profile-image2'></div>
            <h1 className='profile-titles'>Junior Frontend разработчик</h1>
          </div>
          <div className='profile3'>
            <div className='profile-image3'></div>
            <h1 className='profile-titles'>Стаж работы - 6 месяцев</h1>
          </div>
        </div>

        <div className='about-section'>
          <div className='about-title'>
            <h1>Обо мне</h1>
          </div>
          <div className='about-content'>
            <p>&nbsp; &nbsp; Здравствуйте, я начинающий Frontend-разработчик с базовыми навыками HTML, CSS, JavaScript и React. Закончил обучение по специальности в колледже им. В. Д. Поташова и проходил практику в одной из крупных IT-компаний моего города — IT Park.

            <br/> &nbsp; &nbsp; После обучения продолжил развиваться самостоятельно, создавая проекты и изучая современные подходы к разработке. В моём портфолио на GitHub — 5 React-проектов: счётчик, калькулятор, ToDo-лист с localStorage, календарь, приложение с API пользователей. Недавно начал разработку игры “динозаврик” с рандомной генерацией препятствий.

            <br/> &nbsp; &nbsp; Я быстро осваиваю новые технологии, довожу проекты до конца и с интересом решаю нестандартные задачи. Буду рад пройти собеседование и обсудить, чем могу быть полезен вашей компании.</p>
          </div>
        </div>
        



        <div className='skills-section'>
          <div className='skills-title'>
            <h1>Мои навыки</h1>
          </div>
          <div className='skills-content'>
            <div className='skills-percents'>
                <span>100%</span>
                <span>80%</span>
                <span>60%</span>
                <span>40%</span>
                <span>20%</span>
                <span>0%</span>
            </div>
            <div className='section html-section'>
               <div className='htmlLogo'></div>
              <div ref={htmlRef} className='html-column'></div>
             
            </div>
            <div className='section css-section'>
              <div className='cssLogo'></div>
              <div ref={cssRef} className='css-column'></div>
              
            </div>
            <div className='section js-section'>
              <div className='jsLogo'></div>
              <div ref={jsRef} className='js-column'></div>
              
            </div>
            <div className='section ts-section'>
              <div className='tsLogo'></div>
              <div ref={tsRef} className='ts-column'></div>
              
            </div>
            <div className='section react-section'>
              <div className='reactLogo'></div>
              <div ref={reactRef} className='react-column'></div>
              
            </div>
          </div>
        </div>


    </div>
  );
}

export default App;
