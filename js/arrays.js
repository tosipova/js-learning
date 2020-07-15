let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
myArray;


let myColors = '1, White, brown, red';
myArray = myColors.split(',');
console.log(myArray)
console.log(myArray.length)
console.log(myColors.toString())

let myNewstring = myArray.join(',')
console.log(myArray)
let dogNames = ['Rocket', 'Flash', 'Bella', 'Slugger'];
dogNames.toString(); // Rocket,Flash,Bella,Slugger

const sayHi = (name, age) => `Hi I am ${name} and I am ${age} old.`

console.log(sayHi('denis',40
))

const sayPoka = (name1, age1) => `Bay i am ${name1} and I am ${age1}`
console.log(sayPoka('Tanya',43))
