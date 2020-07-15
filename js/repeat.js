// postroit object tree / derevo obektov nested objects
// 5 person Address, list mashin 2/3 mashina , famili arrau= deti , kahdii child imeet  age i name first and last kak primitivnie, Mamulkin club, danilka 
// sosdat konstrukti createw person s defoltami, kak v metodax defolti ispolyovat * disctructiruing0 create person create car create address / germanz



const createAddress = ({ street, city = 'Mannheim', country = 'Germany' }) => {
    return { street, city, country }
}
const createKid = ({ firstName, age = 2 }) => {
    return { firstName, age }
}

const mumsClub = [
    {
        name: 'Tanya',
        age: 43,
        address:
            createAddress({ street: 'Sekenheimer' }),
        carPark:
            [
                {
                    brand: 'BMW',
                    cost: 18000,
                },
                {
                    brand: 'Mercedes',
                    cost: 10000,
                }

            ],

        children:
            [
                createKid({ firstName: 'Katya' })
            ]

    },

    {
        name: 'Danilka',
        age: 37,
        address:
            createAddress({ street: 'Main St', city: 'Freiburg' }),
        carPark:
            [
                {
                    brand: 'BMW',
                    cost: 18000,
                },
                {
                    brand: 'Mercedes',
                    cost: 8000,
                }
            ],

        children:
            [
                createKid({
                    firstName: 'Dalia',
                    age: 8
                }),
                createKid({
                    firstName: 'Ben',
                    age: 4
                })
            ]
    },
    {
        name: 'Olya',
        age: 35,
        address:
            createAddress({ street: 'Brunnenpfad 58' }),
        carPark:
            [
                {
                    brand: 'BMW',
                    cost: 45000,
                },
                {
                    brand: 'Mercedes',
                    cost: 35000,
                }

            ],

        children:
            [
                createKid({ firstName: 'Chris' })
            ]

    },
    {
        name: 'Luda',
        age: 39,
        address:
            createAddress({ street: 'Downer st' }),
        carPark:
            [
                {
                    brand: 'BMW',
                    cost: 7000,
                },
                {
                    brand: 'Mercedes',
                    cost: 3000,
                }

            ],

        children:
            [
                createKid({ firstName: 'Albert' })
            ]

    },
    {
        name: 'Natasha',
        age: 44,
        address:
            createAddress({ street: 'Erotica 22', city: 'Vienna', country: 'Austria' }),
        carPark:
            [
                {
                    brand: 'BMW',
                    cost: 86000,
                },
                {
                    brand: 'Mercedes',
                    cost: 100000,
                }

            ],

        children:
            [
                createKid({ firstName: 'Kirya', age: 11 }),
                createKid({ firstName: 'Dasha', age: 8 }),
                createKid({ firstName: 'Masha', age: 5 })
            ]

    },
]
console.log(Object.keys(mumsClub))
console.log(Object.values(mumsClub))
console.log(Object.entries(mumsClub))

for (let value of Object.values(mumsClub)) {
    alert(value)
}



const result = mumsClub.filter(mumsClub => mumsClub.age > 40);



console.log(result);

const printKids = (mumsClub) => {
    mumsClub.forEach(parent => {
        parent.children.forEach((child) => {
            console.log(child.firstName)
            if (child.age <= 3) {
                console.log(child.firstName + ' is going to kita ')

            } else if (child.age < 6) {
                console.log(child.firstName + ' is going to kindergarten')

            }
            else if (child.age > 7) {
                console.log(child.firstName + ' is going to schule')
            }
        })
    });
}


const printCars = (mumsClub) => {
    mumsClub.forEach(parent => {
        parent.carPark.forEach(
            (car) => {
                console.log(car.brand)
                if (car.brand === 'Mercedes' && car.cost <= 20000) {
                    console.log(parent.name + ' has cheap car')
                } else if (car.cost > 21000) {
                    console.log(parent.name + ' has an expensive car')
                }

            })
    })
}
const printAddress = (mumsClub) => {
    mumsClub.forEach(parent => {
        console.log(parent.address)
        if (parent.address.country !== 'Germany') {
            console.log(parent.name + ' is not living in Germany ')

        }
    })
}

Object.keys

printKids(mumsClub)
printCars(mumsClub)
printAddress(mumsClub)