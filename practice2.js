////

function printColors(color1, color2, color3, color4) {
    return `My colors are ${color1},${color2},${color3},${color4}`;
}
let color1 = 'red'
let color2 = 'white'
let color3 = 'braun'
let color4 = 'schwratz'

console.log(printColors(['red',' white','lila', 'scWwartz']))



let myArr4 = [color1, color2, color3, color4]
function printColors(colors) {
    colors.forEach(function (color) {
        console.log(color)
    })
}
printColors(myArr4)
