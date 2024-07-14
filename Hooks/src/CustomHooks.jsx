//import React from 'react'
import { useState } from 'react'
import ChangeTitle from './ChangeTitle'
function CustomHooks() {
    const [count, setCount] = useState(0)
        ChangeTitle(count)
  return (<div>
    <div>CustomHooks</div>
    <button onClick={()=>setCount(prev=>prev+1)}>count</button>
    </div>
  )
}

export default CustomHooks