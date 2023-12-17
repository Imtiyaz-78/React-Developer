
import React from 'react'
import Student from './Student'
class Unmount extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.show ? <Student /> : <h1>Component is removed</h1>

        }
        <button onClick={() => this.setState({ show: false })}> Toogle Student Component</button>
      </div>
    )
  }
}

export default Unmount;
