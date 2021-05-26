import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      nome: '',
      email: '',
      senha: ''
    }

    this.changeNome = this.changeNome.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.cadastrar = this.cadastrar.bind(this)
  }

  changeNome(e){
    const valorNomeDigitado = e.target.value
    this.setState({nome: valorNomeDigitado})
  }

  changeEmail(e){
    const valorEmailDigitado = e.target.value;
    this.setState({email: valorEmailDigitado})
  }

  cadastrar(e){
    const {nome, email, senha} = this.state
    e.preventDefault()

    if(!nome || !email || !senha){
      alert('por favor, preencha todos os dados.')
      return false
    }

    alert(`Dados inseridos no banco de dados -
       Nome: ${this.state.nome}
       E-mail: ${this.state.email}
       Senha: ${this.state.senha}`
    )
  }

  render() {
    return (
      <div>
        <h1>Formulário</h1>
        <form onSubmit={this.cadastrar}>
          Nome: <input type="text" value={this.state.nome} onChange={this.changeNome}/> <br/>
          E-mail: <input type="email" value={this.state.email} onChange={this.changeEmail}/><br/>
          Senha: <input type="text" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value })}/><br/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default App;