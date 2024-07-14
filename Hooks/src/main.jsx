import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import Toggle from './Toggle.jsx'
import './index.css'
//import CounterB from "./CounterB.jsx"
import Count from './Count.jsx'
import ContextR from './ContextR.jsx'
//import Fetch from './Fetch.jsx'
import FetchR from './FetchR.jsx'
import Counter from './Counter.jsx'
import Memo from './Memo.jsx'
import UseRef from './UseRef.jsx'
import CustomHooks from './CustomHooks.jsx'
import CustomHooks2 from './CustomHooks2.jsx'
import Form from './Form.jsx'
//import CallBack from './CallBack.jsx'
//import Toggle from './Toggle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toggle/>
    <Count/>
<ContextR/>
{/*<Fetch/>*/}
<FetchR/>
<Counter/>
<Memo/>
<UseRef/>
<CustomHooks/>
<CustomHooks2/>
<Form/>

  </React.StrictMode>,
)
