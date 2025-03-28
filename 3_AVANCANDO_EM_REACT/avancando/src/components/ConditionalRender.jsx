import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false)

    const [nome, setNome] = useState("Breno")

    return (
        <div>
            <h1>Isso sera exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x e falso!</p>}
            <h1>if ternario</h1>
            {nome === "Maria" ? (
                <div>
                    <p>O nome e Maria</p>
                </div>
            ) : (
                <div>
                    <p>Nome nao encontrado</p>
                </div>
            )}
            <button onClick={() => setNome("Maria")}>Mudar nome para Maria</button>
        </div>
    )
}

export default ConditionalRender