import React from 'react'
import { useState ,useMemo} from 'react'
function Memo() {
const [count,setCount]=useState(0);
const [count1,setCount1]=useState(0);
const increment=()=>{
    setCount(count+1)
}
const increment1=()=>{
    setCount1(count1+1)
}
const checkEvenOdd=useMemo(()=>{
    let i=0
    while(i<2000000000)i++
    return count%2==0
},[count])

  return (
    <div>
        <h1>Memo</h1>
        <span>{checkEvenOdd? "Even":"Odd"}</span>
        <button onClick={increment}>Increment {count}</button>
        <button onClick={increment1}>increment1 {count1}</button>

    </div>
  )
}

export default Memo