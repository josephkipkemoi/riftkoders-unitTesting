 function sum(a,b) {
    return a + b
}

/*
    ES-Module
    This is a mechanism for splitting Javascript programs into seperate modules that can be imported when needed
    The first thing you do to get access to module features is to export them, this is done using the export statement
*/

// function isEvenOrODd(n) {
//     if (n % 2 != 0) {
//         console.log("odd")
//     } else {
//         console.log("even")
//     }
//     n % 2 === 0 ? "even" : "odd"
// }

// isEvenOrODd(910)

let x = "#"
let y = "#"
module.exports = sum