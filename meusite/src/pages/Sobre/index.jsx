import { Link } from 'react-router-dom'

function Sobre(){
  return(
    <div>
      <h1>Estamos na página Sobre</h1>
      <Link to="/">Voltar para a Home</Link>
      <Link to="/contato">Ir para contato</Link>
    </div>
  )
}

export default Sobre