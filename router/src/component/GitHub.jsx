import React, { useState } from 'react'
import { useEffect } from 'react'
import "../App.css"
function GitHub() {
    const [follower,setFollower]=useState()
    const[imgUrl,setUrl]=useState('')
    useEffect(()=>{
        fetch("https://api.github.com/users/sumit8104608630")
        .then(res=>res.json())
        .then((data)=>{
            setFollower(data["followers"])
            setUrl(data["avatar_url"])
        })
    },[])
    console.log(follower)
    console.log(imgUrl)

  return (
    <div></div>
  )
}

export default GitHub