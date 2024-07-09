import  { Component } from 'react'

class Hover extends Component {

  render() {
    const {count,counter}=this.props

    return (
      <div onMouseOver={counter}>Hover {count}</div>
    )
  }
}

export default Hover