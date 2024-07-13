import { Countext } from "./ContextR"
import { useContext } from "react"
function CounterB() {
const count=useContext(Countext)
  return (
    <div>CounterB
        <h1>{count.value.firstValue}</h1>
        <button onClick={()=>count.fun({type:'increment',value:5})}>Increment</button>
    </div>
  )
}

export default CounterB