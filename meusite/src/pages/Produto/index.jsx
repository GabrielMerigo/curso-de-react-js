import { useParams } from 'react-router-dom'

function Produto () {
  const { id } = useParams()

  return(
    <>
      <h1>Grade de Produtos</h1> <br />

      <span>Produto Selecionado: {id}</span>
    </>
  )
}

export default Produto