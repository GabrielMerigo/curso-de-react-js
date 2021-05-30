import { Link } from 'react-router-dom'

function Contato() {
  return(
    <>
      <h1>Estamos na pagina Contato</h1>
      <Link to="/">Voltar para home</Link> <br />
      <Link to="/sobre">Voltar para Sobre</Link>
    </>
  )
}

export default Contato