import React from 'react'

function InputBox({
    label,
    amount,
    onchangeAmount,
    disableAmount=false,
    selectOption="USD",
    options=[],
    onchangeSelectOption, 
}) {
  return (
   <div>
    <label>{label}</label>
    
   </div>
  )
}

export default InputBox