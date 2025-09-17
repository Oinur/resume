import React, {useRef , useState, useEffect} from "react";
import reactDom from "react-dom";
import { Link } from "react-router-dom";
import './Api.css'






function ApiApp() {
  let [users, setUsers] = useState([])
  let [counter, setCounter] = useState(0);
  let [active, setActive] = useState(false)
    useEffect(() => {
      
      fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => setUsers(prev =>  [...prev, data.results[0]]  ) )

      return () => {
        console.log("очистка")

      }

    },[counter])

    let addHandle = () => {
      setCounter(prev => prev + 1)
      

    }
    let deleteUser = (id) => {
      setUsers(users.filter(item => item.login.uuid != id))

    }
    let toggleClass = () => {
      setActive(prev => !prev)
    }



    
  return(
    <>
      
    <div className="mainContainer">
      <div className="apiAppContainer">
        <div className="apiContent">

          {users.length != 0 ? <ul> {users.map((item) => <li className="apiLi" key={item.login.uuid}><img className="userImage" style={{borderRadius:'50px', height:'80px', width:'80px'}} src={item.picture.large}/>
             {item.name.first} {item.name.last} 
             <button className="deleteBtn" onClick={() => deleteUser(item.login.uuid)} >X</button></li>  ) } </ul> : 
             <>
             
             <p style={{textAlign:'center', fontSize:"1.5em"}}><strong>Что-то здесь пустовато...</strong></p>
             </>
             }

        </div>

          <div className="apiBtnContainer">
      <button className={active ? "addUserBtnPressed" : "addUserBtn"} onClick={addHandle} onMouseDown={toggleClass} onMouseUp={toggleClass}>Добавить</button>
          </div>


      </div>
    </div>


      </>
  )
   
}

export default ApiApp;




