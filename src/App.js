import React, { Component } from 'react';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        App
        {this.props.children}
      </div>
    );
  }
}

export default App;