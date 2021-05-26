import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Formulário</h1>
        <form>
          <input type="text" value={this.state.nome}/>
        </form>
      </div>
    )
  }
}

export default App;