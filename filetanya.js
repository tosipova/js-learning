const name = 'Dennis';
const myname = 'BB';

const age = 40;

function introduce(incomingName, incomingAge) {
    return 'Hello my name is ' + incomingName + ' and my age is ' + incomingAge
}
console.log(introduce('Wowa', 65))
const denisIntroduction = introduce("Denis", 43)
console.log(denisIntroduction)

const tanyaIntroduction = introduce('Tanya', 43)
console.log(tanyaIntroduction)

const lastIntro = introduce(name, age)
console.log(lastIntro)




// ---------------------------------------------------------

const humanTanya = {
    isGronwUp: true, last: 'Lutz', first: 'Tanya', sayName: function () { return this.first + ' ' + this.last }
}
const humanKate = {
    isGronwUp: false, last: 'Lutz', first: 'Kate', sayName: function () { return this.first + ' ' + this.last }
}

const myArr = [humanKate, humanTanya]
myArr.forEach(function (human) { console.log(human.sayName()) })



const myFync = function () {
    const x = 'blabla'
    const y = 'tralala'
    return x + y
}

console.log(myFync())
function sayhello(name, age) {
    return "Hi, my name is " + name + " I am " + age;
}

console.log(sayhello("Tanya", 43));

const myGreeting = sayhello("Denis", 40);
console.log(myGreeting);

function sayhelloinDE(name, age) {
    return "Hallo,Ich bin " + name + " Ich bin " + age + " Jahre alt. ";
}
console.log(sayhelloinDE("Katya", 2));

function introduce(name, age) {
    let isGrown = false;
    if (age > 16) {
        isGrown = true;
    }
    return "Hello,my name is " + name + " I am " + age + " isGrown: " + isGrown;
}
console.log(introduce("Katya", 2
));



