// 1 - var, let e const
// let/const = escopo de bloco
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)

let i = 100

for (let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)


function logName() {
    const name = 'Matheus'
    console.log(name)
}
logName()

const  name = 'Pedro'
console.log(name)

