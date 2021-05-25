import React, { Component } from 'react';
import Feed from './component/Feed';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {id: 1, username: 'Matheus', curtidas: 10, comentarios: 4},
        {id: 2, username: 'Lucas', curtidas: 152, comentarios: 24},
        {id: 4, username: 'Amanda', curtidas: 140, comentarios: 15},
        {id: 4, username: 'Amanda', curtidas: 1, comentarios: 1}
      ]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.feed.map((user) => {
            return(
              <Feed key={user.id} username={user.username} 
              curtidas={user.curtidas} comentarios={user.comentarios} />
            )
          })
        }
      </div>
    )
  }
}

export default App;