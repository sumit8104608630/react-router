//import React from 'react'
import { useState } from 'react'
//import CustomHooks2 from './CustomHooks2';
function Counter3(intialValue=0,val) {
    const[count,setCount]=useState(intialValue);
    const increment =()=>{
        setCount(count+val)
    }
    const decrement=()=>{
        setCount(count-val)
    }
    const reset=()=>{
        setCount(intialValue)
    }
    return [count,increment,decrement,reset]
}

export default Counter3