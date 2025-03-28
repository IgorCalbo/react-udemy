const arr = [1, 2, 3, 4, 5]

const highArr = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highArr)


const users = [
    { name: "Igor", available: true },
    { name: "Pedro", available: false },
    { name: "Julia", available: false },
    { name: "Maria", available: true },
]

const usrDisponiveis = users.filter((user) => user.available)
const usrIndisponiveis = users.filter((user) => !user.available)

console.log(usrDisponiveis)
console.log(usrIndisponiveis)