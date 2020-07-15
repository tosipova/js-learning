function Fashion(style, size) {
    this.style = style
    this.size = size 
    this.introduce = function (){
        const result = `My  style is ${this.style} and my type is ${this.size} .`
        return result
    }
}
console.log (new Fashion('sporty', 38).introduce())



let a = 5
let b = 10
if (a < b) { // true
  console.log(a + ' is less than ' + b)
} else if (a > b) {
  console.log(a + ' is greater than ' + b)
} else {
  console.log(a + ' and ' + b + ' are equal.')
}

const sentence = 'The quick brown fox jumps over the lazy dog.';
sentence.length
console.log(sentence.length)
console.log(sentence.startsWith('The'))
console.log(sentence.endsWith('dog'))

console.log(sentence.slice(0,3))
console.log(sentence.slice(0,9))
console.log( sentence.small(1,7))
console.log(sentence.strike())
console.log(sentence.indexOf('dog'))
console.log(sentence.indexOf('vanilla'))
console.log(sentence.slice(0,35))

// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
 

