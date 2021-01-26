// Tuesday 21, April 2020 Task: 1.define funk. that prints adress parametr 2 strings, 1 number, 1 bullean - small city if esle population city number. 2) create 2 objects that repr. 2 adreseses, wich will have as attributes street, street number, index, city , country, save to varuable, scho in console. 3) create array for each itteration , per each iteration use the method, send paramenters of the objects.

// 1.
function myaddress(city, streetname, number, citySize) {
    let isSmallcity = true
    if (citySize > 500000) {
        isSmallcity = false
    }
    return `The address is ${city}, ${streetname} ${number}, isSmallcity: ${isSmallcity}`
    //return 'my adress is ' + city + ',' + streetname + ',' + number + ',' + 'isSmallcity:' + isSmallcity;
}
console.log(myaddress('Berlin', 'KeiserStrasse.', 128, 300000));

// 2.

const addressFirst = {
    country: 'Germany', streetname: 'Keiserstrasse', mynumber: 128, saycountry: function () { return this.country + ' ' + this.streetname + '  ' + this.mynumber }
}

const addressSecond = {
    country: 'Russia', streetname: 'Lermonovskaya', mynumber: 21, saycountry: function () { return this.country + '    ' + this.streetname + '  ' + this.mynumber }
}

console.log(addressFirst)
console.log(addressSecond)

// 3.
const myArr2 = [addressFirst, addressSecond]
const funcForEach = function (address) { console.log(address.saycountry()) }
myArr2.forEach(funcForEach)


console.log(addressFirst.country)
console.log(addressFirst.saycountry())

//// 4.

function myParameter(name, hight, smartlevel) {
    let isSmart = false
    if (smartlevel > 3) {
        isSmart = true
    }
    return `My name is ${name}, and my height is ${hight}, isSmart: ${isSmart}`
}
console.log(myParameter('Maria', 165, 5)
);
/////

function myFavorite(food, drink, dessert) {
    return `My favorite food is ${food},my favorite drink is ${drink}, and my favorite dessert is ${dessert}`
}
console.log(myFavorite('Plov', ' Tea', 'Shokolad'))

////


function myFriends(name1, name2) {
    return `My girlfreinds in Germany are ${name1}, and ${name2}`
}
let name1 = 'maria'
let name2 = 'vlad'

console.log(myFriends(name1, name2))


let myArr3 = [name1, name2]
function printFriends(friends) {
    friends.forEach(function (friend) {
        console.log(friend)
    })
}

printFriends(myArr3)
//////

function printColors(color1, color2, color3, color4) {
    return `My colors are ${color1},${color2},${color3},${color4}`
}
