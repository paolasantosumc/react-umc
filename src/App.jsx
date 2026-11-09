import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="page">
      <section className="hello-card">
        <div className="eyebrow">MEU PRIMEIRO PROJETO COM REACT</div>
        <div className="react-mark" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit orbit-three" />
          <span className="nucleus" />
        </div>
        <h1>Hello World, Paola Santos!</h1>
        <p className="subtitle">Meu primeiro projeto utilizando React e Vite.</p>
        <div className="counter">
          <p>Você clicou {count} {count === 1 ? 'vez' : 'vezes'}.</p>
          <button onClick={() => setCount((current) => current + 1)}>
            Clique aqui
          </button>
        </div>
        <footer>Desenvolvido com React + Vite</footer>
      </section>
    </main>
  )
}

export default App
