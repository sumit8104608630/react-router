import  { Component } from 'react'
import subject from './App'
//import App from './App'

export class Marks extends Component {
    constructor(props){
        super(props)
        this.state={marks:0}
    }
  
  render() {
    return (
      <div onMouseOver={this.props.increment}>Sumit {this.props.hocsub} </div>
    )
  }
}

export default subject(Marks)