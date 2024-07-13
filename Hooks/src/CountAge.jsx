import React from 'react'

function CountAge({age}){
     console.log("age is loaded")
  return (
    <div>
        <h1>CountAge {age}</h1>
    </div>
  )
}

export default React.memo(CountAge)