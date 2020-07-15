const denis = { name: "Denis", age: 40 };
const tanya = { name: 'Tanya', age: 25 };

const people = [denis, tanya]


const sayName = (human) => console.log('I am  ' + human.name)
console.log(sayName(denis))

people.forEach(sayName)