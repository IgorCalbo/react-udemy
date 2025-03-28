const soma = function soma(a, b) {
    return a + b
}

console.log(soma(5, 5))

const somaArrow = (a, b) => a + b
console.log(somaArrow(5, 5))



const greeting = (nome) => {
    if (nome) {
        return "Olá " + nome + "!"
    } else {
        return "Olá"
    }
}

console.log(greeting())
console.log(greeting("Igor"))



const testeArrow = () => console.log("testou")
testeArrow()



// nesse caso o pais de function é window, por isso será retornado no this
const user = {
    nome: "Igor",
    sayUserName() {
        setTimeout(function () {
            console.log(this)
            console.log("Username: " + this.nome)
        }, 500);
    },
}

user.sayUserName()

// jeito antigo de resolver
const user2 = {
    nome: "Igor",
    sayUserName() {
        var self = this
        setTimeout(function () {
            console.log(self)
            console.log("Username: " + self.nome)
        }, 500);
    },
}

user2.sayUserName()


// resolvendo com arrow
const user3 = {
    nome: "Igor",
    sayUserName() {
        setTimeout(() => {
            console.log(this)
            console.log("Username: " +  this.nome)
        }, 500);
    }
}

user3.sayUserName()