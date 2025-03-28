import { useState } from 'react'

const HookUseState = () => {
    // 1 - useState
    let userName = 'Joao'
    const [name, setName] = useState('Matheus')

    const changeNames = () => {
        userName = 'Joao Souza'
        setName('Matheus Souza')
    }

    // 2 - useState e input
    const [age, setAge] = useState(18)

    // evitar o reload da pagina, SPA
    const handleSubmit = (e) => {
        e.preventDefault()

        // envio a uma API
        console.log(age)
    }

    return (
        <div>
            {/* 1 - useState */}
            <h2>useState</h2>
            <p>Variavel: {userName}</p>
            <p>useState: {name}</p>
            <button onClick={changeNames}>Mudar nomes!</button>
            <hr />
            {/* 2 - useState e input */}
            <p>Digite a sua idade: </p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={age} 
                    onChange={(e) => setAge(e.target.value)} 
                />
                <input type="submit" value="Enviar" />
            </form>
            <p>Voce tem {age} anos!</p>
            <hr />
        </div>
    )
}

export default HookUseState