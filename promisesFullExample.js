// //https://scotch.io/tutorials/javascript-promises-for-dummies

// const isHubbyHappy = true
// new Promise(
//     function (successCallback, failedCallback) {
//         if (isHubbyHappy) {
//             console.log('Hubby saiying: let me run to the store, it will take only 3 sec....')
//             /// take some time 
//             setTimeout(function () {
//                 console.log('I am back, 3 secs passed by and I will give you the ring');
//                 const ring = 'Tiffany ring'
//                 successCallback(ring);
//             }, 3000);
//         } else {
//             setTimeout(function () {
//                 var reason = new Error('Hubby is not happy to get the ring for you, you should cook little better.');
//                 failedCallback(reason)
//             }, 1500);
//         }
//     }
// ).then((result) => {
// //     console.log(`Tanya said:I have it!!!!${result}`)
// // })
// //     .catch((error) => console.log(error.message))

// // console.log('While running to the store tanya is cooking')

// const isHubbyHappy = true
// const willGetRing = new Promise(
//     function (successCallback, failedCallback) {
//         if (isHubbyHappy) {
//             console.log('Hubby saiying: let me run to the store, it will take only 3 sec....')
//             /// take some time 
//             setTimeout(function () {
//                 console.log('I am back, 3 secs passed by and I will give you the ring');
//                 const ring = 'Tiffany ring'
//                 successCallback(ring);
//             }, 3000);
//         } else {
//             setTimeout(function () {
//                 var reason = new Error('Hubby is not happy to get the ring for you, you should cook little better.');
//                 failedCallback(reason)
//             }, 1500);
//         }
//     }
// )
// console.log('While running to the store tanya is cooking')
// const result = await willGetRing
// console.log(`Tanya said:I have it!!!!${result}`)
// console.log('Nothing happens here unless i will the ring')


const wifeIsHappy = true
const sayTheWord = new Promise(
    function (successCallback, failedCallback) {
        if (wifeIsHappy) {
            console.log('I will say I love you')
            setTimeout(function () {
                console.log('3 sec passed by before i said anythin and now i want to say it...');
                const love = 'I love you'
                successCallback(love);
            }, 3000);
        } else {
            setTimeout(function () {
                var reason = new Error('I am not happy');
                failedCallback(reason)
            }, 1500);
        }
    }
)
const meal = new Promise(
    function (mealCooked, mealNotCooked) {
        if (wifeIsHappy) {
            console.log('I will cook the meal')
            setTimeout(function () {
                console.log('5 sec passed to cook the dish')
                const dish = 'Here is your steak'
                mealCooked(dish);
            }, 5000);
        } else {
            setTimeout(function () {
                var reason2 = new Error('I will not cook');
                mealNotCooked(reason2)
            }, 2000);
        }
    }
)
console.log('Hubby is waiting for the word')
const resultingMeal = await meal
const resultingWord = await sayTheWord
console.log(resultingMeal)
console.log(`Tanya listing and got the reply:${resultingWord}!!!!`)

