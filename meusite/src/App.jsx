import { React, useEffect, useState, useMemo, useCallback } from 'react'

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState('')

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas')
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])

  function adicionarTarefa(){
    setTarefas([...tarefas, input])
    setInput('')
  }

  const totalTarefas = useMemo(() => `${tarefas.length}`, [tarefas])

  return (
    <>
      <ul>{tarefas.map((tarefa) => <li key={tarefa}>{tarefa}</li>)}</ul>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button type="button" onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <h1>Você tem {totalTarefas}</h1>
    </>
  )
}

export default App