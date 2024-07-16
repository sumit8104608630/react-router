import React from 'react'
import { useState } from 'react';
import Child from './Child';
function Parent() {
    const [count,setCount]=useState(0);
    console.log("sumit");
  return (
    <div>Parent
        <h1>{count}</h1>
        <button onClick={()=>setCount(5)}>increment</button>
        <button onClick={()=>setCount(5)}>decrement</button>
        <button onClick={()=>setCount(0)}>reset</button>
        <Child/>
    </div>
  )
}

export default Parent