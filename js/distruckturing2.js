const kid1 =
{
    name: 'Denis',
    age: 2,
    address:
    {
        streetName: 'Sekenheimer',
        city: 'Mannheim'
    }
}

const kid2 =
{
    name: 'Katya',
    age: 1,
    address:
    {
        streetName: 'Sosiskina',
        city: 'Moscow'
    }
}
const kid3 =
{
    name: 'Chris',
    age: 3,
    address:
    {
        streetName: 'Salyanka',
        city: 'Moscow'
    }

}
const kid4 =
{
    name: 'Albert',
    age: 4,
    address:
    {
        streetName: 'Solombola',
        city: 'Moscow'
    }

}
const kid5 =
{
    name: 'Myssi',
    age: 3,
    address:
    {
        streetName: 'Kahovskaya',
        city: 'Moscow'
    }

}
const kid6 =
{
    name: 'Dasha',
    age: 3,
    address:
    {
        streetName: 'Kutusovska',
        city: 'Moscow'
    }
}
// const myKids = [kid1, kid2, kid3, kid4, kid5, kid6]
// const printKids = (kidsParam) => {
//     let numberGoingKita = 0
//     let numberNotGoingKita = 0
//     let startsWithM = 0
//     let startsWithS = 0
//     for (let index = 0; index < kidsParam.length; index++) {
//         let kid = kidsParam[index];
//         if (kid.address.city.startsWith('M')) {
//             startsWithM = startsWithM + 1
//         }
//         if (kid.address.streetName.startsWith('S')) {
//             startsWithS = startsWithS +1
//         }

//         if (kid.age > 3) {
//             numberGoingKita = numberGoingKita + 1
//         } else {
//             numberNotGoingKita = numberNotGoingKita + 1
//         }
//     }
//     console.log(numberGoingKita)
//     console.log(numberGoingKita)
//     console.log(startsWithM)
//     console.log(startsWithS)
// }

// printKids(myKids)

const myKids = [kid1, kid2, kid3, kid4, kid5, kid6]
const printKids = (kidsParam) => {
    for (let index = 0; index < kidsParam.length; index++) {
        const kid = kidsParam[index];
        if (kid.age > 3) {
            console.log(`${kid.name} is going to kindergarden`)
        } else console.log(`${kid.name} is going to kita`)
    }
}
// printKids(myKids)


const createAddress = ({ streetName, city = 'Moscow' }) => {
    return { streetName, city }
}
const createKid = ({ name, age = 3, address }) => {
    return { name, age, address }
}
const newKids = [
    createKid({ name: 'Albert', address: createAddress({ streetName: 'Kahovskaya' }), city: 'Mannheim' }),
    createKid({ name: 'Katya', address: createAddress({ streetName: 'Kahovskaya' }) }),
    createKid({ name: 'Denis', age: 40, address: createAddress({ streetName: 'Kahovskaya' }) }),
    createKid({ name: 'Chris', age: 6, address: createAddress({ streetName: 'Kahovskaya' }), city: 'Boston' }),
    createKid({ name: 'Mussi', address: createAddress({ streetName: 'Kahovskaya' }) }),
    createKid({ name: 'Dasha', address: createAddress({ streetName: 'Kahovskaya' }) }),
]


console.log(newKids)
printKids(newKids)