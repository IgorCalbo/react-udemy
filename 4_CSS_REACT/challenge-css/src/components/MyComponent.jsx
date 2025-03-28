import styles from './MyComponent.module.css'

const MyComponent = ({car}) => {
  return (
    <div className={styles.card}>
        <h1>{car.brand}</h1>
        <p>Year: {car.year}</p>
        <p>Color: {car.color}</p>
        <p>KM: {car.km}</p>
    </div>
  )
}

export default MyComponent