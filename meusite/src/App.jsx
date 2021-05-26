import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        nome: '',
        email: '',
        senha: ''
      }
    }

    this.dadosForm = this.dadosForm.bind(this)
  }

  dadosForm(e){
    const { form } = this.state
    form[e.target.name] = e.target.value 
    this.setState({form: form})
  }

  render() {
    return (
      <div>
        <h1>Formulário</h1>
        <form>
          Nome: <input name="nome" type="text" value={this.state.form.nome} onChange={this.dadosForm}/><br/>
          E-mail: <input name="email" type="email" value={this.state.form.email} onChange={this.dadosForm} /><br/>
          Senha: <input name="senha" type="text" value={this.state.form.senha} onChange={this.dadosForm}/><br/>
          <button type="submit">Enviar</button>
        </form>

        <h3>{this.state.form.nome}</h3>
      </div>
    )
  }
}

export default App;