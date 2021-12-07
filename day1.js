// Part one
const fs = require('fs')
// To read the data of the file
// try {
//  const data = fs.readFileSync('./day1data.txt', 'utf8')
//  //console.log(data)
//} catch (err) {
//  console.error(err)
//}

// Plan to get the answer:
//var x = n+1 - n
//x > 0 = 1
//som(1)

// data put in an array
var data = fs.readFileSync('./day1data.txt', 'utf8').toString().split("\r\n").map(Number) //new line is split

var differences = []
for(let i=0; i<data.length-1; i++) {
  differences.push(data[i+1]-data[i])
}

var increase = []
for(let i=0; i<differences.length; i++) {
    if (differences[i] > 0) {increase.push(1)}
//    else {increase.push(0)}                      // making it simpler, not needed and sumincrease neither
}

//var sumincrease = 0
//for(let i=0; i<increase.length; i++) {
//sumincrease += increase[i]
//}

//console.log(sumincrease)
console.log(increase.length)

// Part two
// compare 123 with 234

data
var compare = []
for(let i=0; i<data.length-2; i++) {
  compare.push(data[i]+data[i+1]+data[i+2])
}

var differences2 = []
for(let i=0; i<compare.length-1; i++) {
  differences2.push(compare[i+1]-compare[i])
}

var increase2 = []
for(let i=0; i<differences2.length; i++) {
    if (differences2[i] > 0) {increase2.push(1)}
    else if (differences2[i] === 0) {increase2.push(0)}
    else {increase2.push(0)}
}

var sumincrease2 = 0
for(let i=0; i<increase2.length; i++) {
sumincrease2 += increase2[i]
}

console.log(sumincrease2)