
// const people = require('./people.json');
const people = [
    {
        "id": 1,
        "first_name": "Jeanette",
        "last_name": "Penddreth",
        "email": "jpenddreth0@census.gov",
        "gender": "Female",
        "ip_address": "26.58.193.2"
    },
    {
        "id": 2,
        "first_name": "Giavani",
        "last_name": "Frediani",
        "email": "gfrediani1@senate.gov",
        "gender": "Male",
        "ip_address": "229.179.4.212"
    },
    {
        "id": 3,
        "first_name": "Noell",
        "last_name": "Bea",
        "email": "nbea2@imageshack.us",
        "gender": "Female",
        "ip_address": "180.66.162.255"
    },
    {
        "id": 4,
        "first_name": "Willard",
        "last_name": "Valek",
        "email": "wvalek3@vk.com",
        "gender": "Male",
        "ip_address": "67.76.188.26"
    }
]
const l = (myParam) => console.log(myParam)

const myFilter = function (person) {
    console.log(person.first_name)
}

//const denis = { "first_name": "Denis" }
//const bb = { age: 38, "first_name": 'kuku' }
//const myPeople = [denis, bb]
//myFilter(bb)

people.forEach(function (person) { console.log(person.email) })

const condition = (person) => person.ip_address.endsWith("2")
console.log(people.filter(condition).length);

const myFunnk = function () { }
const myFunk2 = () => { }

console.log(people.length)


const getFirstlast = function (person) {
    return { first_name: person.first_name, last_name: person.last_name }
}
const getFirstshort = (person) => ({ first_name: person.first_name, last_name: person.last_name })

console.log(people.map((person) => ({ first_name: person.first_name, last_name: person.last_name })))
const myCond = (person) => person.first_name.startsWith('J')

//console.log(people.find((person)=> (person.first_name.startsWith('J'))))
console.log(people.find(myCond))

console.log(typeof "")
console.log(typeof 5)
console.log(typeof {})
console.log(typeof (() => { }))

const myCar = { brand: 'BMW', year: 2020 };
const myCar2 = { brand: 'Audi', year: 2019 };
const myOwner = { name: 'Denis', age: 40, cars: [myCar, myCar2] };

const findBybrand = (myParam) => (myParam.brand === 'BMW')

console.log(myOwner.cars.find((myParam) => (myParam.brand === 'BMW')))

const myOwner2 = { name: 'Tanya', age: 43, cars: [myCar] }
const adr1 = { street: 'Secken', number: 77 }
const adr2 = { street: 'Valentin', number: 6 }
myOwner.address = adr1

console.log(myOwner2)
myOwner2.address = adr2
console.log(myOwner2)
console.log(myOwner.cars)

const myFunk3 = (car) => {
    console.log(car.brand)
}
console.log("here")
myOwner.cars.forEach((car) => console.log(car.brand))

const myCond4 = false
const myCond5 = myCond4 && false
if (myCond5) {
    const positive = 'Say yes'
    console.log(positive)
} else {
    const negative = 'Say no'
    console.log(negative)
}

const alwaysTrue = true || false
const alwaysFalse = !true && false && true && true
const doubleNegation = !!undefined
// null, undefined, '', "", = false 

if (doubleNegation) {
    console.log('Double negation')
}

console.log(alwaysTrue)
console.log(alwaysFalse)
console.log(doubleNegation)

const isTrue = () => true
const isFalse = () => false
if (isTrue() && isFalse()) {
    console.log('enter if')
} else {
    console.log('enter else');
}

const isLongstring = (stringParam) => {
    if (stringParam.length >= 5) {
        console.log('is long string')
    } else {
        console.log('is not long string')
    }
}
isLongstring('kukareku');
console.log(isLongstring.length)



const islongsentence = (sentenceParam) =>{
if (sentenceParam.length >=10) {
    console.log('is long sentence')
} else {
    console.log('is  not long sentence')
}
}
islongsentence('ja vas lubil, chego ghe bolee, cnto ja mogu eshe skazat?')


function log(params) {
    console.log(params)
}
const human1 = { name: 'Denis', age: 17 }
const human2 = { name: 'tanya', age: 20 }
const isGrownup = (person) => {
    if (person.age > 18) {
        console.log('is grown up')
        return true
    } else {
        console.log('is not grown up')
        return false
    }

}


const human3 = { name: 'Denis', age: 17, address: { street: '123 Main', country: 'Germany' } }
const human4 = { name: 'tanya', age: 20, address: { street: '125 Main', country: 'Russia' } }


const myHash = {
    myKey1: 'myValue',
    myKey2: human3,
    myKey3: [human1, human2],
}

const myArr = ['Denis', 'BB', 'Olga']

console.log(myHash.myKey1)


console.log(myHash['myKeyx'])
console.log(myArr[8])







const isLivingineu = (person) => {
    if (person.address.country === 'Germany') {
        return true
    }
    return false
}


console.log(isLivingineu(human4))

const describePerson = (human) => {
    if (isLivingineu(human)) {
        console.log('Yes, is living there')
    } else {
        console.log('Noch')
    }
}
describePerson(human4)

const humans = [human3, human4]
console.log(humans.length)

const myTask = (human) => {
    console.log(human.name)
}

humans.forEach(myTask)
humans.forEach((human) => (console.log(human.name)))



const myTransformtask = (human) => {
    return human.address
}
console.log(humans.map(myTransformtask))


const myObject1 = {
    brand: 'Calvin Klein',
    item: 'bra',
    size: 38
}

const isGoodbra = (bra) => {
    if (bra.brand === 'Calvin Klein') {
        return true
    }
    return false
}
console.log(isGoodbra(myObject1))

const myObejct2 = {
    brand: 'Volvo',
    doors: 4,
    fuel:'diesel'
}
const isGoodcar = (car) => {
    if (car.brand === 'Volvo'){
        return false
    }return true
}
console.log(isGoodcar(myObejct2))