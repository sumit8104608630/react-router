import  { Component } from 'react'
import { Consumer } from './Context'
export class C extends Component {
  render() {
    return (
      <div>
        <h1>C component</h1>
        <Consumer>
            {value=><h1 onMouseOver={value.marks}>Marks {value.count}</h1>}
        </Consumer>
      </div>
    )
  }
}

export default C