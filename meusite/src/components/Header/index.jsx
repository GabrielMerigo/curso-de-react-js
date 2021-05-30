import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <h1>Header da página</h1>
      <Link to="/contato">Ir para contato</Link>
    </>
  )
}

export default Header