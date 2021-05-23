import React, { Component } from 'react';

class Equipe extends Component {
  render(){
    return (
      <div>
        <h2>Olá {this.props.name} </h2>
        <h2>Seu cargo é {this.props.cargo}</h2>
      </div>
    )
  }
}

function App () {
  return (
    <div>
      <h2>Conheça a nossa equipe</h2>
      <Equipe name="Gabriel" cargo="Programador" idade="18"/>
    </div>
  )
}
export default App