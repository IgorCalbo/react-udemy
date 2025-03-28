import CarDetails from '../../../3_AVANCANDO_EM_REACT/avancando/src/components/CarDetails'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {

  const cars = [
    { brand: 'VW', year: 2011, color: 'green', km: 50000 },
    { brand: 'Ferrari', year: 2015, color: 'red', km: 0 },
    { brand: 'Renault', year: 2020, color: 'black', km: 3500 }
  ]

  return (
    <>
      <h1>Detalhes dos Carros</h1>
      <div className="car-container">
        {cars.map((car) => (
          <MyComponent car={car} />
        ))}
      </div>

    </>
  )
}

export default App
