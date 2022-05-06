import React, { Component } from 'react'

export class IncDec extends Component {
   constructor(props) {
     super(props)
   
      this.state = {
        value : 1,
    }
   }
   
  render() {
      const State = this.state; 
    return (
      <div className="d-flex justify-content-center align-items-center">
                <button onClick={() => this.setState({value : State.value-1})} type="button"  class="btn btn-primary">-</button>
                    <span className='px-3'>{State.value}</span>
                <button onClick={() => this.setState({value : State.value+1})}  type="button" class="btn btn-success">+</button>
          </div>
    )
  }
}

export default IncDec