const Challenge = () => {
    const n1 = 11
    const n2 = 13

    return (
        <div>
            <h1>Valor do primeiro numero: {n1} e valor do segundo numero: {n2}</h1>
            <button onClick={() => console.log(n1+n2)}>Somar valores</button>
        </div>
    )
}

export default Challenge

