import {Component} from "react"

class App extends Component{

  render(){
    const {count,counter}=this.props
    return<>
    
    <button onClick={counter}>count {count}</button>
    </>
  }
}
export default App