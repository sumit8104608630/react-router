//import React from 'react'
import { useState ,useCallback} from "react"
import Button from "./Button";
import CountAge from "./CountAge";
import Count2 from "./Count2";
import Button2 from "./Button2"
function Counter() {
    const [count,setCount]=useState(0);
    const increment=useCallback(()=>{
        setCount(count+1)
    },[count])
    const [count2,setCount2]=useState(0);
    const increment2=useCallback(()=>{
        setCount2(count+1)
    },[count2])
  return (
    <div>
     <CountAge age={count}></CountAge>
     <Button increment={increment}></Button>
        <Count2 count2={count2} ></Count2>
        <Button2 increment2={increment2}></Button2>
    </div>
  )
}

export default Counter