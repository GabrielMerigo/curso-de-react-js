import React from 'react';

const Equipe = (props) => {
  return (
    <div>
      <Sobre name={props.name} funcao={props.funcao} idade={props.idade} />
      <Midia
        twitter={props.twitter}
        fb={props.facebook}
        instagram={props.instagram}
      />
      <hr />
    </div>
  )
}

const Sobre = (props) =>
  <p>Esse é o {props.name} ele é o {props.funcao} da equipe com {props.idade} anos.</p>

const Midia = (props) => {
  return (
    <div>
      <h3>Midias Sociais:</h3>
      <p>
        <strong>Facebook:</strong> <a href={props.fb}>GAY</a> <br />
        <strong>Twitter:</strong> {props.twitter} <br />
        <strong>Instagram:</strong> {props.instagram}
      </p>
    </div>
  )
}


function App() {
  return (
    <div>
      <h1>Conheça nosso equipe:</h1>
      <Equipe name="Gabriel"
        funcao="Programador"
        idade="25"
        twitter="@merigod"
        facebook="https://google.com"
        instagram="@gabriel_merigo"
      />
      <Equipe name="Jorge"
        funcao="Designer UX/UI"
        idade="17"
        twitter="@Luquicas_XDXD"
        facebook="https://google.com"
        instagram="@Lucas__prado"
      />
    </div>
  )
}

export default App