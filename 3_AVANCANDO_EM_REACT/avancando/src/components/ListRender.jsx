import { useState } from 'react'

const ListRender = () => {

    // problema de usar o indice como referencia, e que se eu deletar o Pedro por exemplo, o Josiar ira virar o indice 1
    const [list] = useState(["Matheus", "Pedro", "Josias"])

    const [users, setUsers] = useState([
        { id: 1, name: 'Igor', age: 26 },
        { id: 2, name: 'Joao', age: 31 },
        { id: 3, name: 'Ricardo', age: 44 },
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)
        console.log(randomNumber)

        // prevUsers no caso e como o obj usuarios esta nesse momento, antes da operacao que vem a seguir
        setUsers((prevUsers) => {
            // sera criado um novo array sem o usuario que foi sorteado pelo numero aleatorio
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender