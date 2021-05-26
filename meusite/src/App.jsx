import React, { Component } from 'react'


class App extends Component{
  constructor(props){
    super(props)

    this.state = {};
  }

  render(){
    return(
      <div>
        <img src={require('./biscoito.png')}/>
      </div>
    )
  }
}

export default App;