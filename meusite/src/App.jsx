import React, { Component } from 'react';
import Image from './assets/cronometro.png'
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tempo: 0,
      interval: null,
      nameBtnVai: 'Vai'
    }

    this.vai = this.vai.bind(this)
    this.zerar = this.zerar.bind(this)
  }

  vai() {
    if (this.state.interval !== null) {
      this.setState({nameBtnVai: 'Vai'})
      clearInterval(this.state.interval)
      this.state.interval = null
    } else {
      this.setState({nameBtnVai: 'Pausar'})
      let tempo = this.state.tempo;
      const timer = setInterval(() => {
        tempo += 0.1
        this.setState({ tempo: tempo })
      }, 100)
      this.state.interval = timer;
    }
  }

  zerar() {
    clearInterval(this.state.interval)
    this.setState({tempo: 0, nameBtnVai: 'Vai'})
  }

  render() {
    return (
      <div className="container">
        <img className="img" src={Image} alt="Imagem" />
        <a className="time">{this.state.tempo.toFixed(1)}</a>
        <div className="buttons">
          <a className="go" onClick={this.vai}>{this.state.nameBtnVai}</a>
          <a className="zerar" onClick={this.zerar}>Zerar</a>
        </div>
      </div>
    )
  }
}

export default App