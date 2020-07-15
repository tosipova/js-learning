//const myTask = (taskNumber) => 'Execute task: ' + taskNumber
// console.log(myTask(2))
// console.log(myTask(25))
// const myFank = (param1, param2) => 'Summa budet ' + (param1 + param2)

// console.log(myFank(1, 5))
// console.log(myFank('ku', 'ku'))
// const firstParam = 2
// const secondParam = 17497493474
// console.log(myFank(firstParam, secondParam))
//

// const myExecuter = function (task) {
//     task('idi v banu')
// }
// const printSmth = function (printContent) {
//     console.log(printContent)
// }
// myExecuter(printSmth)

// const slowCooker = (task1, task2) => {
//     task1();
//     task2();
// }
// const cookSoup = () => console.log('I am cooking soup...')
// const cookKasha = () => console.log('I am cooking kasha...')

// slowCooker(cookSoup,cookKasha)
// const myTask = () => 'do it'


// const myExecuter = (callback1) => {
//     console.log('Executing ' + callback1())
// }


// myExecuter(myTask)
// console.log(myTask())

// const peopleList = {
//     people: ["Denis", "Tanya"],
//     foreach: function (callback) {
//         const denis = this.people[0]
//         const tanya = this.people[1]
//         callback(denis)
//         callback(tanya)
//     }
// }
// const callback = (person) => {
//     console.log(person)

// }
// peopleList.foreach(callback)


// const foodlist = {
//     maincourse: ['meat', 'fish', 'soup', 'veggies'],
//     myFunk: function (callback) {
//         const meat = this.maincourse[0]
//         const fish = this.maincourse[1]
//         callback(meat)
//         callback(fish)
//     }
// }
// const callback = (food) => {
//     console.log('I love to eat ' + food)
// }
// foodlist.myFunk(callback)

// const cleaningAppartment = function (task1, task2) {
//     task1();
//     task2();
// }
// const floorCleaning = () => console.log('I am cleaning the floor')
// const kitchenCleaning = () => console.log('I am cleaning the kitchen')

// cleaningAppartment(floorCleaning, kitchenCleaning)


// const myExecuter = function (task) {
//     task('idi v banu')
// }
// const printSmth = function (printContent) {
//     console.log(printContent)
// }
// myExecuter(printSmth)

// const students = [
//     { name: 'Mary', score: 90, school: 'East' },
//     { name: 'James', score: 100, school: 'East' },
//     { name: 'Steve', score: 40, school: 'West' },
// ]

// let processStudents = function (studentList, callback) {
//     for (let index = 0; index < studentList.length; index++) {
//         const student = studentList[index];
//         callback(student)
//      //  console.log(student)
//     }

// }
// const saySchool = (human) => console.log(human.school)
// processStudents(students, () => (null))

// 
// const people = [
//     {
//         name: "Tanya",
//         age: 25,
//         score: 100,
//         school: 'East'
//     },
//     {
//         name: "Denis",
//         age: 27,
//         score: 90,
//         school: 'West'
//     },
//     {
//         name: "Olga",
//         age: 26,
//         score: 40,
//         school: 'East'
//     },
//     {
//         name: "Luda",
//         age: 75,
//         score: 100,
//         school: 'East'
//     },
//     {
//         name: "Alex",
//         age: 80,
//         score: 100,
//         school: 'West'
//     },
//     {
//         name: "Chris",
//         age: 27,
//         score: 50,
//         school: 'West'
//     },

// ]

// const processPeople = (people, tasksTodoOneEachPerson = []) => {
//     let studentsEastscore = 0
//     for (let index = 0; index < people.length; index++) {
//         const person = people[index];
//         if (person.school === 'East') {
//             studentsEastscore = studentsEastscore + person.score
//         } 
//         if (index===people.length -1) {
//             console.log(studentsEastscore)

//         }
//         const myFunk = (task) => {
//             task(person)
//         }
//         tasksTodoOneEachPerson.forEach(myFunk)
//     }
// }

// const sayAge = (person) => {
//     console.log('Names: ' + person.name)
// }
// const sayName = (person) => {
//     console.log('My name is ' + person.name)
// }
// const tasksTodoOneEachPerson = [sayName, sayAge]
// processPeople(people, tasksTodoOneEachPerson)

// const getEducated = (studentList, studentCourse) => {
//     for (let index = 0; index < studentList.length; index++) {
//         const student = studentList[index];
//         const myFank2 = (course) => {
//             course(student)
//         }
//         studentCourse.forEach(myFank2)
//     }
// }

// const studyMath = (student) => {
//     student.completed.push('Math')
//     console.log('student ' + student.name + ' completed Math')
// }
// const studyProgramming = (student) => {
//     student.completed.push('Programming')
//     console.log('student ' + student.name + ' completed Programming')
// }
// const studentList = [{ name: 'John Brown', age: 21, completed: [] }, { name: 'Jane Star', age: 25, completed: [] }]

// console.log(studentList)
// getEducated(studentList, [studyMath, studyProgramming])
// console.log(studentList)

// const myExecuter =(callback)=>{
//     console.log('bla')
// }
// const myFunk =(printsmth)=>{
//     // console.log(printsmth)
// }
// myExecuter(myFunk)



// const myArr = [1, 'Korsika', 2, 3,'Kuku',4]
// const result = myArr.filter((element) => {
//     return typeof element === 'number'
// }).reduce((previous,current)=>{
//     return previous+current
// },0)

// const numbersOnlyFilter = (element) => typeof element === 'number'
// const result = myArr.filter(numbersOnlyFilter).reduce((previous, current) => (previous + current), 0)
// console.log(result)



// const numbersOnlyFilter = (element) => typeof element === 'number'
// const reducedToSum = (previous, current) => (previous + current)
// const result = myArr.
// filter(numbersOnlyFilter).
// map((element)=>{return element*2})
// console.log(result)

const myExekuter = (mycallback)=>{
  mycallback('idi v banu')
}
const myFunk = (task)=>{
    console.log(task)
}
myExekuter(myFunk)

