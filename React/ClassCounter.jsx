import React, { Component } from 'react';

// 1 class component
class ClassCounter extends Component {
  constuctor(props) {
    super(props)

    // 2 create a state variable
    this.state = {
      count: 0
    }
  }

  // 3 create a method that is capable of setting the state var
  imcrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.imcrementCount}>Count {this.state.count}</button>
      </div>
    )
  }

}

export default ClassCounter;