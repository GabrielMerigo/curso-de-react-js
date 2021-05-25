import React, { Component } from 'react';
import Membro from './component/Membro'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true
    }
  }

  render() {
    return (
      <div>
        { this.state.status ?
          <div>
            <h2>Bem-vindo ao sistema!</h2>
          </div> : 
          <div>
            <h2>Olá Visitante. Faça o login.</h2>
          </div>
          
        }
      </div>
    )
  }
}

export default App;