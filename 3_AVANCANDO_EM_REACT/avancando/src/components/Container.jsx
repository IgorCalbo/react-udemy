import React from 'react'

const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Esse e o titulo do container</h2>
      {children}
      <p>O valor e {myValue}</p>
    </div>
  )
}

export default Container