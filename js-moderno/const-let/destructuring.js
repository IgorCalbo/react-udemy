// destructuring com arrays
const frutas = ['banana', 'maca', 'laranja']
const [f1, f2, f3] =  frutas
console.log(f1)
console.log(f2)
console.log(f3)


// destructuring com objetos
const product = {
    name: "Mouse",
    price: 19.99,
    category: "Periferico",
    color: "Cinza"
}

const {name: nameProduct, price, category = categoryProduct, color} = product
console.log(`O nome do produto e ${nameProduct}, custa R$${price}, pertence a categoria ${category} e tem a cor ${color}`)