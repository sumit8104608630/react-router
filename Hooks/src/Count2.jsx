import React from 'react'

function Count2({count2}) {
    console.log("counter 2")
  return (
    <div>
        <h1>Count2 {count2}</h1>
    </div>
  )
}

export default React.memo(Count2)