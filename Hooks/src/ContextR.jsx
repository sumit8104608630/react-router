import CounterB from "./CounterB"
import React, {useReducer} from "react"
export const Countext=React.createContext()


function ContextR() {

//import  from 'react'

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
   // const [counts,dispatches]=useReducer(reducer,initialValue)

    


  return (
    <div>ContextR
        <Countext.Provider value={{value:count,fun:dispatch}}>
        <CounterB />
        </Countext.Provider>
    </div>
  )
}

export default ContextR