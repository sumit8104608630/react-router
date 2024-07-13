import React from 'react'
function Button({increment,count}) {
console.log("Button Loaded")
  return (
    <div>
        <button onClick={increment}>count{count}</button>
    </div>
  )
}

export default React.memo(Button)