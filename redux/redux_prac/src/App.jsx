
import './App.css'
import{increment,decrement,reset} from "./slice/counterScli.js"
import {useSelector,useDispatch} from "react-redux"
function App() {
  const dispatch=useDispatch()
const count=useSelector((state)=> state.counter.count)
  return (
   <>
   <h1>counter {count}</h1>
<button onClick={()=>dispatch(increment())}>increment</button>
<button onClick={()=>dispatch(decrement())}>decrement</button>
<button onClick={()=>dispatch(reset())}>reset</button>

   </>
  )
}

export default App
