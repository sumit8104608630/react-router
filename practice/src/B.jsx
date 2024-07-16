import { Component } from 'react'
//import{Context} from "./A"
import axios from "axios"
import { Consumer } from './Context'
 class B extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         post:[],
         array:[],
      }
    }
  async  componentDidMount (){
        
       const result=await axios.get("https://jsonplaceholder.typicode.com/posts").then((data)=>data).catch((err)=>err)
       this.setState({array:result})
       //console.log(result.data)
       this.setState({
        array:result.data
       })
    }
  render() {
    console.log(this.state.array)
    return (
    <div>
        <h1>B component</h1>
        <Consumer>
            {value=><button onClick={value.marks}>Marks {value.count}</button>}
        </Consumer>
        <div>
            {this.state.array.map((item,i)=><li key={i}>{item.title}</li>)}
        </div>
    </div>
    )
  }
}

export default B