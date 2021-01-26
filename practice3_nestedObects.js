/// task create several ojects  human containing address and car as full ojects

const human = { name: 'bb', car: { brand: 'BMW' } }


const denis = {
    name: 'Denis',
    car: { brand: 'audi' },
    address: { street: 'White', number: 707, city: 'Paris' },
    introduce: function () {
        return `My car is ${this.car.brand} and my address is ${this.address.street},${this.address.number},${this.address.city} .`
    }
}
console.log(denis.introduce())

const tanya = {
    name: 'Tanya',
    car: { brand: 'BMW' },
    address: { street: 'White', number: 707, city: 'Paris' },
    introduce: function () {
        return `My car is ${this.car.brand} and my address is ${this.address.street},${this.address.number},${this.address.city}`
    }
}
console.log(tanya.introduce())
console.log(tanya.age)
tanya.age = 43

console.log(tanya.age)

function Person(nameParam, carParam) {

    this.name = nameParam
    this.car = carParam
    this.introduce = function () {
        const result = `My car is ${this.car} and my name is ${this.name} .`
        return result
    }
    return this
    return { name: nameParam, car: carParam, introduce: function () { return `${this.name} and ${this.car}` } }
}
console.log(new Person('bb', 'bmw').introduce())
console.log(new Person('denis', 'audi').introduce())

const bb = new Person('bb', { brand: 'bmw' })

const olga = new Person('olga', { brand: 'audi' })

console.log(bb)
console.log(olga)

