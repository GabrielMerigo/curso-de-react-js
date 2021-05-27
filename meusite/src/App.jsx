import React, { useState } from 'react';


function App() {
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React Hooks'
  ]);

  const [input, setInput] = useState('')

  function adicionarTarefa(){
    setTarefas([...tarefas, input])
    setInput('')
  }
  

  return (
    <div>
      <ul>{tarefas.map((tarefa) => <li key={tarefa}>{tarefa}</li>)}</ul>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button type="button" onClick={adicionarTarefa}>Adicionar Tarefa</button>
    </div>
  )
}

export default App