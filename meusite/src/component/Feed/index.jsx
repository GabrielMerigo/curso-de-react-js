import React, {Component} from 'react';

class Feed extends Component{
  render(){
    return(
      <div key={this.props.key}>
        <h1>Seu usuário é: {this.props.username}, tens {this.props.curtidas} {this.props.curtidas === 1 ? 'Curtida' : 'Curtidas'} e {this.props.comentarios}  {this.props.comentarios === 1 ? 'Comentário' : 'Comentários'}</h1>
      </div>
    )
  }
}

export default Feed