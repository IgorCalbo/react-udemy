import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h2>Nome: {nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissao: {profissao}</p>
        {idade >= 18 ? (<p>Pode tirar carteira de motorista</p>) : (<p>Nao pode tirar carteira de motorista</p>)}
    </div>
  )
}

export default UserDetails