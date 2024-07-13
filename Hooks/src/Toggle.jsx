import {useState} from "react"
import App from "./App"
function Toggle() {
const [toggle,setToggle]=useState(false)
    const change=()=>{
        setToggle(!toggle)
      }
      

  return (
    <div><button onClick={change}>Toggle</button>
    {toggle?<App/>:null}
    </div>

  )
}

export default Toggle