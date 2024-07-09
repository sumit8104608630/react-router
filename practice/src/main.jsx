import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hover from './Hover.jsx'
import User from './User.jsx'
//import Marks from './Marks.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <User render={(count,counter)=>(<Hover count={count} counter={counter}/>)}/>
    <User render={(count,counter)=>(<App count={count} counter={counter}/>)}/>

  </React.StrictMode>,
)
