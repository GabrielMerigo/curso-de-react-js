import React, { Component } from 'react'
import Image from './assets/biscoito.png'
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      texto: ''
    };
    
    this.frases = [
      'A vida me ensinou que chorar alivia, mas sorrir torna tudo mais bonito',
      'Nunca troque o que você mais quer na vida pelo que você mais quer no mome.',
      'É preciso coragem para ser diferente e muita competência para fazer a diferença.'
    ]

    this.quebraBiscoito = this.quebraBiscoito.bind(this)
  }

  quebraBiscoito(){
    const randomNumber = Math.round(Math.random() * 2)
    const frases = this.frases 
    this.setState({texto: `"${frases[randomNumber]}"`})
  }

  render() {
    return (
      <div className="container">
        <img src={Image} alt="Favicon" className="img"/>
        <h3 className="textoFrase">{this.state.texto}</h3>
        <Botao acao={this.quebraBiscoito}/>
      </div>
    )
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acao} className="btn">Abrir Biscoito</button>
      </div>
    )
  }
}

export default App;