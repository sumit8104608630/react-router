import {Component} from 'react'
import "./index.css"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text:"",
            id:0,
            complete:false,
            Time:"",
            delay:false,
            task:[],
            new_task:[],
            complete_task:[],
            unComplete_task:[],
          
        }
    }
    text_change=(event)=>{
        this.setState({
            text:event.target.value
        })
    }
    time_select=(event)=>{
        this.setState({
            Time:event.target.value
        })
    }
 
    checked=(event)=>{
        let Id=event.target.id
        let new_task=this.state.task.map((item,i)=>{
            if(i==Id){
                item.complete=!item.complete
            }
            return item
        })
        this.setState({
            task:new_task
        })
        

    }
    add_text=()=>{
        let obj={
         id:this.state.id,
         text:this.state.text,
         complete:this.state.complete,
         Time:this.state.Time,
         delay:this.state.delay
        }
        this.setState((prevState)=>({
             task:[...prevState.task,obj],
             id:prevState.id+1,
             text:"",
             Time:"",
        }),()=>{
            console.log(this.state.task)
            this.state.task.forEach((item,i)=>{
                localStorage.setItem(i,JSON.stringify(item))
            })
        })
         }
       componentDidMount(){
      let  new_arr=[]
        for(let i=0;i<localStorage.length;i++){
         new_arr.push(JSON.parse(localStorage.getItem(i)))
        }
        console.log(new_arr)
      this.setState({
        task:new_arr
      })
     

        
       }
         componentDidUpdate(){
            this.state.task.forEach((item,i)=>{
                localStorage.setItem(i,JSON.stringify(item))
            })
         
            
         }
         
  render(){
    console.log(this.state.Time)
    console.log(this.state.task)
    console.log(this.state.complete)

    return(<div className='w-2/3 flex flex-col gap-4 bg-gray-800 px-10 py-5 rounded-lg'>
        <div>
            <div className='flex w-full mb-2'>
            <input value={this.state.text} onChange={this.text_change} className='w-full px-2 rounded-l-lg'/>
            <button onClick={this.add_text} className='text-white text-3xl font-semibold rounded-r-lg bg-blue-500 px-4  flex justify-center items-center pb-1'>+</button>
            </div>
            <div>
            <span className='text-xl font-medium text-white'>Time</span>
            <input value={this.state.dateTime} onChange={this.time_select} className='ml-2 rounded-lg px-2' type='time'/>
            </div>
        </div>
        <div className='flex flex-col'>{this.state.task.map((item,i)=>{
           return <div className='w-full mb-2 flex gap-2' key={i}>
            <input id={i} onChange={this.checked} type='checkbox'/>
            <input className='w-full px-2 text-lg font-semibold rounded-lg' value={item.text} readOnly/>
            <button className='text-lg bg-green-700 font-semibold px-2 rounded-lg'>Edit</button>
            <button onClick={this.remove} className='bg-red-600 px-2 rounded-lg'><img className='w-4' src='  	https://static-00.iconduck.com/assets.00/trash-icon-462x512-njvey5nf.png'/></button>
            </div>
        })}</div>
        <span className='text-xl font-medium text-white'>Completed Task : </span>
        <div></div>
        <span className='text-xl font-medium text-white'>Delay Task : </span>
        <div></div>
    </div>)
  }
}

export default App;
