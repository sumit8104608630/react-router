import React from 'react'

function Button2({increment2}) {
    console.log("button 2")
  return (
    <div>
        <button  onClick={increment2}>count2</button>
    </div>
  )
}

export default React.memo(Button2)