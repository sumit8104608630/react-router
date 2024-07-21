import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
function GitHub() {
    const [follower,setFollower]=useState()
    const[imgUrl,setUrl]=useState('')
    useEffect(()=>{
        fetch("https://api.github.com/users/sumit8104608630")
        .then(res=>res.json())
        .then((data)=>{
            setFollower(data["followers"])
            console.log(data)
            setUrl(data["avatar_url"])
        })
    },[])
    console.log(follower)
    console.log(imgUrl)

  return (
    <div className='flex flex-col items-center '>
        <h1 className='xl:text-5xl text-2xl px-2 flex text-center  my-10 font-bold  text-gray-700'>Welcome To My GitHub Small Introduction</h1>
        <div className=' flex xl:flex-row flex-col gap-10 w-2/3 text-center xl:text-start  justify-center items-center my-5'>
            <div className='w-full rounded-full drop-shadow-2xl flex justify-center'><img className='rounded-full drop-shadow-2xl' src={imgUrl}/></div>
            <div>
                <span className='font-semibold text-gray700 mb-5 flex justify-center  text-3xl'>Hii, I'm Sumit</span><span className='mx-5  font-semibold text-gray700  bg-gray-800 px-5 py-1 text-center rounded-lg text-white text-lg xl:text-2xl'>Followers : {follower}</span>
                <p className='font-medium my-5  xl:text-xl'>
I am a skilled web developer proficient in a wide range of technologies, including React.js, ReactRouter, Tailwind, Node.js, Express.js, MongoDB, SQL, Git, GitHub, and Bootstrap. I have a strong foundation in version control and problem-solving, which I apply to create efficient and effective web solutions. In my free time, I enjoy sketching, showcasing my creative side.
                </p>
                <a href='https://github.com/sumit8104608630' className='xl:justify-start flex justify-center'><div className='font-semibold justify-center text-white bg-gray-800 rounded-lg w-max px-8 py-2 text-lg xl:text-2xl'>View More</div></a>
                
            </div>
        </div>
    </div>
  )
}

export default GitHub