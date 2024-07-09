import  { Component } from 'react'

export class User extends Component {
    constructor(props){
        super(props)
        this.state = {
          count:0,
        }
      }
      counter=()=>{
        this.setState((prev)=>({
          count:prev.count+1
        }))
      }
  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.counter)}
      </div>
    )
  }
}

export default User