import  { useState } from 'react'
//import { useState } from 'react'
function Input(initial) {
const [value,setValue]=useState(initial)
const reset=()=>{
    setValue(initial)
}
const bind={
    value,
    onChange:e=>{
        setValue(e.target.value)
    }
}
return [value,bind,reset]
}

export default Input