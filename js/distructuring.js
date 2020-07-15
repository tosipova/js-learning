// 
// const { name, age } = denis
// console.log(name)

// const introduce = (person) => {
//     const { name, age } = person
//     console.log(`Hi, my name is ${name}  and age is ${age}`)
// }
// introduce(denis)

// const introduce = ({ name, age }) => {
//     // const { name, age } = person
//     console.log(`Hi, my name is ${name}  and age is ${age}`)
// }
// introduce(denis)

// introduce({ name: 'Tanya', age: 20 })

// const sayHi = ({ name, age }) => {
//     console.log(`Hi, my name is ${name}  and age is ${age}`)
// }
// const vova = { name: 'Vova', age: 55 }

// sayHi(vova)

// create massiv s nested objet adress i mashina. u adressa est uliza i nome, i mashini marka i zena.ves massiv nao raspechatati metodom print people i kashdi chelovek 
//printperson i print car.vse metodi dolyhni rabotatti s distrucuringom. interpolyzia



// const person1 =
// {
//     name: 'Denis',
//     age: 30,
//     address:
//     {
//         streetName: 'Sekenheimer',
//         number: 77
//     },
//     car: {
//         brand: 'BMW',
//         price: 25000
//     }
// }
// const person2 =
// {
//     name: 'Denis',
//     age: 30,
//     address:
//     {
//         streetName: 'Sekenheimer',
//         number: 77
//     },
//     car: {
//         brand: 'BMW',
//         price: 25000
//     }
// }
// const persons = [person1, person2]

// const printPeople = (persons) => {
//     for (let index = 0; index < persons.length; index++) {
//         const person = persons[index];
//         printPerson(person)
//     }
// }

// const printAddress = ({ streetName, number }) => {
//     return `${streetName},${number}`
// }
// const printCar = ({ brand, price }) => {
//     return `${brand},${price}`
// }
// const printPerson = ({ name, age, address, car }) => {
//     console.log(`Hi,my name is ${name} and my age is ${age} and my address is ${printAddress(address)} and my car is ${printCar(car)}.`)
// }

// printPeople(persons)

const student1 =
{
    name: 'Denis',
    age: 22,
    grade: 3,
    address:
    {
        streetName: 'Sekenheimer',
        city: 'Mannheim'
    }
}

const student2 =
{
    name: 'Tanya',
    age: 23,
    grade: 4,
    address:
    {
        streetName: 'Main',
        city: 'Boston'
    }
}
const student3 =
{
    name: 'Daniel',
    age: 25,
    grade: 3,
    address:
    {
        streetName: 'Solombola',
        city: 'Michigan'
    }
}
const myStudents = [student1, student2, student3]
const printStudents = (studentsParam) => {
    let startsWithM = 0
    let startsWithD = 0
    let startsWithS = 0
    for (let index = 0; index < studentsParam.length; index++) {
        const student = studentsParam[index];
        if (student.address.city.startsWith('M')) {
            startsWithM = startsWithM + 1
        }
        if (student.name.startsWith('D')) {
            startsWithD = startsWithD + 1
        }
        if (student.address.streetName.startsWith('S')) {
            startsWithS=startsWithS+1
        }

    }
    console.log(startsWithM)
    console.log(startsWithD)
    console.log(startsWithS)
}

printStudents(myStudents)


