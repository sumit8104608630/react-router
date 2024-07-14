import React from 'react'
import Counter3 from './Counter3'
function CustomHooks2() {
  const [count,increment,decrement,reset]=Counter3(10,10)

  return (
    <div>
<h1>{count}</h1>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
<button onClick={reset}>Reset</button>
    </div>
  )
}

export default CustomHooks2