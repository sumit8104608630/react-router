//import  from 'react'
import {useReducer} from "react"
import { useContext } from "react";




function Count() {
    const initialValue={
        firstValue:0,
        secondValue:10,
    };
const reducer=(state,action)=>{
    switch(action.type){
        case'increment':
            return {...state,firstValue: state.firstValue+action.value};
        case 'decrement':
            return {...state,firstValue: state.firstValue-action.value};
        case 'reset':
            return {firstValue:initialValue.firstValue};
        default :
            return state;
    }
}
    const [count,dispatch]=useReducer(reducer,initialValue)
    const [counts,dispatches]=useReducer(reducer,initialValue)

    

  return (
    <div>
        <h1>Count {count.firstValue}</h1>
        <button onClick={()=>dispatch({type:'increment',value:5})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        <h1>Count {counts.firstValue}</h1>
        <button onClick={()=>dispatches({type:'increment',value:5})}>Increment</button>
        <button onClick={()=>dispatches({type:'decrement',value:5})}>Decrement</button>
        <button onClick={()=>dispatches({type:'reset'})}>Reset</button>

    </div>
  )
}

export default Count