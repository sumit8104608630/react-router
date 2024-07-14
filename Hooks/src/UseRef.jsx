import React from 'react'
import { useEffect,useState,useRef } from 'react'
function UseRef() {
    let intervalRef=useRef()
        const [time,SetTime]=useState(0);
    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            SetTime(prev=>prev+1)
        },1000)
        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[])
const clear=()=>{
    clearInterval(intervalRef.current)
}

  return (
    <div>UseRef
        <h1>{time}</h1>
        <button onClick={clear}>ClearInterval</button>
    </div>
  )
}

export default UseRef