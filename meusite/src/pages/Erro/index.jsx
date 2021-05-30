import { Link } from 'react-router-dom'

function Sobre(){
  return(
    <div>
      <h1>Hmmm, parece que não foi encontrado.</h1> <br />

      <span>Você pode estar procurando:</span> <br />
      <Link to="/">Home</Link> <br />
      <Link to="/sobre">Sobre</Link> <br />
      <Link to="/contato">Contato</Link>
    </div>
  )
}

export default Sobre