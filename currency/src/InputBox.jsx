import React from 'react'

function InputBox({
    label,
    amount,
    onchangeAmount,
    disableAmount=false,
    selectOption,
    options=[],
    onchangeSelectOption, 
}) {
    console.log(selectOption)
  return (
   <div>
    <div><span>{label}</span><span>Select Currency</span></div>
    <div><input
    type='number'
    placeholder='Amount'
    value={amount}
    disabled={disableAmount}
    onChange={(e)=>onchangeAmount&&onchangeAmount(Number(e.target.value))}
    />
    <select onChange={(e)=>onchangeSelectOption&&onchangeSelectOption(e.target.value.toUpperCase())}>
        {options.map((option)=><option key={option} value={selectOption}>{option}</option>)}
    </select>
    </div>


   </div>
  )
}

export default InputBox