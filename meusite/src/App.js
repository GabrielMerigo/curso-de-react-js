import React, { Component } from 'react';

class Equipe extends Component {
  render(){
    return (
      <div>
        <h2>Olá {this.props.name} </h2>
      </div>
    )
  }
}

function App () {
  return (
    <div>
      <h2>Conheça a nossa equipe</h2>
      <Equipe name="Gabriel"/>
    </div>
  )
}
export default App