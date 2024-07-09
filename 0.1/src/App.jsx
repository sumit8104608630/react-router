//import { useState } from 'react'
//import {Component} from 'react'
import './App.css'
import ChildComponent from './component/Btn'

function Button(){
  localStorage.setItem("name",'sumit');
  let name=localStorage.getItem("name")
  console.log(name)
  let objects=['sumit','suchitta','subodh','sachin','sumit']
  let object=objects.map((name,i)=><h1 key={i}>{name}</h1>)

//  let info=objects.map((info)=>`my name is ${info.name} age is ${info.age}`)
  return <ChildComponent List={object}/>
}

export default Button;