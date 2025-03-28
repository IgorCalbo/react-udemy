const Events = () => {

    const handleClick = () => {
        console.log('Ativou o evento')
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Tambem posso renderizar isso</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleClick}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log(2 + 2)}>Clique aqui para somar 2 + 2</button>
                <button onClick={() => {
                    // eslint-disable-next-line no-constant-condition
                    if (true) {
                        console.log('Isso nao deveria existir')
                    }
                }}>Clique aqui por sua conta e risco</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events