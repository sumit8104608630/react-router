import  { Component } from 'react'

 class App extends Component {
  constructor(props){
    super(props)
    this.state={
     text:"",
     edit:false,
     delay:false,
     id:0,
     task:[],
     time:"",
     completeTask:[],
     incompleteTask:[],
     delayTask:[],
    }
  }
  addTodo=(e)=>{
   // e.preventDefault()
    if(this.state.text==""){
      alert("Please enter a task")
      return
    }
    if(this.state.time==""){
      alert("Please enter a time")
      return
    }
    let obj={
      id:this.state.id,
      text:this.state.text,
      time:this.state.time,
      edit:this.state.edit,
      delay:this.state.delay,
    }
    this.setState((prev)=>({task:[...prev.task,obj]}),()=>{ this.updateLocalStorage() })
    
  }
  updateLocalStorage=()=>{
   
localStorage.setItem("task",JSON.stringify(this.state.task))
    
  }
  componentDidMount(){
    console.log(this.state.task)
  }

  render() {
 //  console.log(this.state.task)
    return (
      <div>
        <h1>Todo List</h1>
      <section>
        <input type='text' onChange={(e)=>this.setState({text:e.target.value.trim()})}/>
        <input type='datetime-local' onChange={(e)=>this.setState({time:e.target.value})}/>
        <button onClick={this.addTodo}>Add</button>
      </section>
      </div>
    )
  }
}

export default App

