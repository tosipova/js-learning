// objects.js


const tanya = {
    isGronwUp: true, last: 'Lutz', first: 'Tanya'
}
const kate = {
    isGronwUp: false, last: 'Lutz', first: 'Kate'
}

const myArr = [tanya, kate]

myArr.forEach(element => {
    console.log(element.first)
});