const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [...arr1, ...arr2]
console.log(arr3)

const arr4 = [0, ...arr1, 4]
console.log(arr4)


const carName = {name: 'Gol'}
const carBrand = {brand: 'VW'}
const otherInfos = {km: 1000, price: 49000}
const car = {...carName, ...carBrand, ...otherInfos, wheels: 4}
console.log(car)