const TemplateExpressions = () => {
    const name = 'Igor'
    const data = {age: 26, job: 'programmer'}

    return (
        <div>
            <h1>Ola {name}, tudo bem com ?</h1>
            <p>Voce atua como: {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log('JSX React')}</p>
        </div>
    )
}

export default TemplateExpressions