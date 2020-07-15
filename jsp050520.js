const person = {
    firstName: 'Tanya',
    lastName: 'Lutz',
    age: 35
}
console.log(person.firstName);
console.log(person.age)

const colors = ['red', 'blue', 'green']
console.log(colors);
console.log(colors[2]);

const numbers = [5, 77, 88, 'seven', 1, 55]
console.log(numbers.reverse());
console.log(numbers[0] + numbers[2]);
console.log(numbers.length)
console.log(numbers.sort());
numbers.push(200);
console.log(numbers)


for (var i = 0; i < 10; i++) {
    console.log('I love the number' + i);
}
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

const myNumbers = [22, 44, 65, 667, 95757];
console.log(myNumbers.length);

const var1 = 3
const var2 = 4

if (var1 == var2) {
    console.log('This is true');
} else {
    console.log('this is false');
}


function Fruit(name, color, shape) {
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function () {
        return 'A ' + this.name + ' is the color ' + this.color + ' and is the shape ' + this.shape;
    }
}

const apple = new Fruit('apple', 'red', 'round');
const melon = new Fruit('melon', 'green', 'round');
const pineaple =new Fruit('pineaple','yelow','oval');

console.log(melon.color);
console.log(melon.describe());
console.log(pineaple.describe())