import { useState } from "react"

const ManageData = () => {

    // inicializando state com valor 15
    const [number, setNumber] = useState(15);

    return (
        <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(25)}>Alterar o valor</button>
        </div>
    )
}

export default ManageData