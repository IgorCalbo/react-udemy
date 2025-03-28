import { useState } from 'react'
import './App.css'
import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'

function App() {
  const userName = useState("Jorge")

  const car = [
    { id: 1, brand: "Ferrari", color: "Amarela", km: 0, newCar: true },
    { id: 2, brand: "KIA", color: "Branco", km: 30000, newCar: false },
    { id: 3, brand: "Renault", color: "Azul", km: 21000, newCar: false }
  ]

  function showMessage() {
    console.log("evento do componente pai!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const users = [
    {id: 1, nome: 'Igor', idade: 26, profissao: 'dev'},
    {id: 2, nome: 'Maria', idade: 44, profissao: 'advogada'},
    {id: 3, nome: 'Murilo', idade: 16, profissao: 'estudante'}
]


  return (
    <div>
      <h1>Avancando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitamento */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
      {/* loop em array de objetos */}
      {car.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children */}
      <Container myValue="testing">
        <p>E este e o conteudo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>
      {/* executar funcao */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* desafio userDetails */}
      {users.map((user) => (
        <UserDetails key={user.id} nome={user.nome} idade={user.idade} profissao={user.profissao}/>
      ))}
    </div>
  )
}

export default App
