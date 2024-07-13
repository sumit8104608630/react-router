import { useState ,useEffect} from 'react'
import Toggle from './Toggle'
import axios from "axios"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [num,setNum]=useState(0)
  const [array,stArray]=useState({})
  const [text,setText]=useState("")
  const [id,setId]=useState(1)
console.log(num)
const counter=()=>{
}
const fetch=()=>{
console.log(text)
setId(text*1)

}
useEffect(()=>{
  console.log("mount")
  axios.get(`https://jsonplaceholder.typicode.com/posts/${text}`).then(res=>{
    stArray(res.data)
  }).catch(err=>err)
  return ()=>{console.log("unmount")}
},[id])



  return (
      <div>
        <h1>Counter function</h1>
        <p>Count: {count}</p>
       <div> <input min={0} max={10} value={num} step={1} onChange={(e)=>setNum(e.target.value)} type='range'/></div>
        <button onClick={counter}> count</button>
        <div>{/*array.map((item,i)=>{return<li key={i}>{item.title}</li>})*/}</div>
        <br/>
        <br/>
        <div>
          <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
          <button onClick={fetch}>Fetch</button>
        </div>
        <div><p>id : {array.id} <br/>title : {array.title}</p></div>
      </div>
  )
}

export default App
