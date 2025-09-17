import React, {useRef , useState, useEffect} from "react";
import reactDom from "react-dom";
import { Link } from "react-router-dom";
import './BlockApp.css'

function BlocksApp() {
    const [count, setCount] = useState(0);
  console.log('🔁 App рендерится'); // будет вызываться каждый раз

  return (
    <div>
      <p>ы</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
   
}


export default BlocksApp;