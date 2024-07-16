import  { Component ,} from 'react'
import { Provider } from './Context'
import B from "./B"
import C from "./C"
 class A extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"sumit",
            marks:0,
        }
    }
    increment=()=>{
        this.setState((prev)=>({
            marks:prev.marks+1
        }))
    }

  render() {
    const onj={
        count:this.state.marks,
        marks:this.increment,
    }
    return (
      <div>
        <h1>A component</h1>
        <h2>{this.state.name}</h2>
        <Provider value={onj}>
            <B/>
            <C/>
        </Provider>
       
      </div>
    )
  }
}

export default A