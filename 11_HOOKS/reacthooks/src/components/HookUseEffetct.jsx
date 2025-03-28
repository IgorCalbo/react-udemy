import { useEffect, useState } from 'react'

const HookUseEffetct = () => {
  // 1 - useEffect, sem dependencias - sempre que a pagina for renderizada novamente
  useEffect(() => {
    console.log('Estou sendo executado!')
  })

  const [number, setNumber] = useState(1)

  const changeSomething = () => {
    setNumber(number + 1)
  }

  // 2 - array de dependencias vazio - 1x na renderizacao inicial
  useEffect(() => {
    console.log('Serei executado apenas uma vez!')
  }, [])

  // 3 - item no array de dependencias - sempre que alterar o valor 
  const [anotherNumber, setAnotherNumber] = useState(0)

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log('Executado quando o anotherNumber muda!')
    }
  }, [anotherNumber])

  // 4 - cleanup do useEffect 
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log("Hello World")
  //     setAnotherNumber(anotherNumber + 1)
  //   }, 2000)

  //   return () => clearTimeout(timer)
  // }, [anotherNumber])

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber!</button>
      <hr />
    </div>
  )
}

export default HookUseEffetct