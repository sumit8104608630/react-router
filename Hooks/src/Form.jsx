//import React from 'react'
//import { useState } from "react"
import Input from "./Input"
function Form() {
    const [name,bindN]=Input('')


    const [lastName,bindL]=Input('')
const pop=()=>{
    alert("Hello "+name+" "+lastName)
}
  return (
    <div>
        <h1>Form</h1>
        <label >Name</label>
    <input type="text" {...bindN}/>
    <label>lastName</label>
    <input type="text" {...bindL}/>
    <button onClick={pop}>Click</button>
    </div>
  )
}

export default Form