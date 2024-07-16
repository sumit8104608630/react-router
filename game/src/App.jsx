import  "./index.css"
import { useState,useEffect } from "react"


import React from 'react'



  function App() {
    const [array,setArray]=useState(Array(9).fill(null))
    const [currentTurn,setTrun]=useState("x")
    const [winner, setWinner] = useState(null);
 const displayContent=(e)=>{
      console.log(e)
      let new_array=[...array]
      new_array[e]=currentTurn
       setArray(new_array)
       setTrun(currentTurn=="x"?"o":"x")
       console.log(new_array)
    }
   // console.log(array[0],"sss")
   const checkWinner = () => {
    const winConditions = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Top-left to bottom-right diagonal
      [2, 4, 6], // Top-right to bottom-left diagonal
    ];

    for (const condition of winConditions) {
      const [a, b, c] = condition;
      if (array[a] && array[a] === array[b] && array[a] === array[c]) {

        setWinner(array[a]);
      }
    }
   
  };
    useEffect(checkWinner,[array])
    if(winner!==null){
      alert("winner is "+winner)
      location.reload()
      return
    }
  return (
  
    <div className="flex flex-col border-2 border-black w-max rounded-lg p-5">
    <div className="flex">
      <div  onClick={()=>displayContent(0)} className="w-20 border-2 text-6xl flex justify-center items-center  border-black m-2 rounded-lg cursor-pointer h-20">{array[0]}</div>
      <div  onClick={()=>displayContent(1)} className="w-20 border-2 text-6xl flex justify-center items-center  border-black m-2 rounded-lg cursor-pointer h-20">{array[1]}</div>
      <div  onClick={()=>displayContent(2)} className="w-20 border-2 text-6xl flex justify-center items-center  border-black m-2 rounded-lg cursor-pointer h-20">{array[2]}</div>
    </div>
    <div className="flex">
      <div  onClick={()=>displayContent(3)} className="w-20 border-2 text-6xl flex justify-center items-center  border-black m-2 rounded-lg cursor-pointer h-20">{array[3]}</div>
      <div  onClick={()=>displayContent(4)} className="w-20 border-2 text-6xl flex justify-center items-center  border-black m-2 rounded-lg cursor-pointer h-20">{array[4]}</div>
      <div  onClick={()=>displayContent(5)} className="w-20 border-2 text-6xl flex justify-center items-center  border-black m-2 rounded-lg cursor-pointer h-20">{array[5]}</div>
    </div>
    <div className="flex">
      <div  onClick={()=>displayContent(6)} className="w-20 border-2 text-6xl flex justify-center items-center  border-black m-2 rounded-lg cursor-pointer h-20">{array[6]}</div>
      <div  onClick={()=>displayContent(7)} className="w-20 border-2 text-6xl flex justify-center items-center  border-black m-2 rounded-lg cursor-pointer h-20">{array[7]}</div>
      <div  onClick={()=>displayContent(8)} className="w-20 border-2 text-6xl flex justify-center items-center  border-black m-2 rounded-lg cursor-pointer h-20">{array[8]}</div>
    </div>
    </div>
  )
}

export default App