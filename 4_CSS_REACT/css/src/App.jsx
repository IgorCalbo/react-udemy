import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const n = 15
  const [name] = useState('Igor')

  const redTitle = true

  return (
    <>
      {/* css globbal */}
      <h1>React com CSS</h1>

      {/* css componente */}
      <MyComponent />
      <p>Este paragrafo e do App.js</p>

      {/* Inline CSS */}
      <p style={{ color: 'blue', padding: '25px', borderTop: '2px solid red' }}>Este elemento foi estilizado de forma inline</p>
      <p style={{ color: 'magenta', padding: '25px', borderTop: '2px solid green' }}>Este elemento foi estilizado de forma inline</p>

      {/* CSS Inline dinamico */}
      <h2 style={n < 10 ? { color: 'purple' } : { color: 'pink' }}>CSS dinamico</h2>
      <h2 style={n > 10 ? { color: 'purple' } : { color: 'pink' }}>CSS dinamico</h2>
      <h2 style={name === 'Igor' ? { color: 'green', backgroundColor: '#000' } : null}>Teste nome</h2>
      <h2 style={name === 'Maria' ? { color: 'green', backgroundColor: '#000' } : null}>Teste nome</h2>

      {/* Classe dinamica */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Este titulo vai ter classe dinamica</h2>
      <h2 className={redTitle != true ? 'red-title' : 'title'}>Este titulo vai ter classe dinamica</h2>

      {/* CSS Modules */}
      <Title />
    </>
  )
}

export default App
