//Part 1, Power consumption
const fs = require('fs')
var data = fs.readFileSync('./day3data.txt', 'utf8').toString().split("\r\n") //data split every new line
//var gamma = []
//for(let i=0; i<data[0].length; i++) {
//    var gammaone = 0
//    var gammazero = 0
//    for (j = 0; j < data.length; j++) {
//        binary = data[j]
//        if (binary[i] === '0') {
//            gammazero = gammazero + 1
//        }
//        else {
//            gammaone = gammaone + 1
//        }
//    }
//    if (gammaone > gammazero) {
//        gamma.push(1)
//    }
//    else {
//       gamma.push(0)
//    }
//}
//var epsilon = []
//for(let k=0; k<gamma.length; k++){
//    if (gamma[k] === 1) {
//        epsilon.push(0)
//    }
//    else {
//        epsilon.push(1)
//    }
//}
//gammaNumber = parseInt(gamma.join(""),2) // change array to number and from binary to number.
//epsilonNumber = parseInt(epsilon.join(""),2)
//powerConsumption = gammaNumber * epsilonNumber
//console.log(powerConsumption)

//Part Two, support rating, Oxygen generator rating times co2 scrubber rating
var gamma = []
var oxygen = data
for(let i=0; i<data[0].length; i++) {
    var gammaone = 0
    var gammazero = 0
    for (j = 0; j < oxygen.length; j++) {
        binary = oxygen[j]
        if (binary[i] === '0') {
            gammazero = gammazero + 1
        }
        else {
            gammaone = gammaone + 1
        }
    }
    if (gammaone >= gammazero) {
        oxygen = oxygen.filter(rho => parseInt(rho[i]) === 1)
    }
    else {
       oxygen = oxygen.filter(rho => parseInt(rho[i]) === 0)
    }
}
console.log(oxygen)

var epsilon = []
var carbondioxide = data

for(let i=0; i<data[0].length; i++) {
    var epsilonone = 0
    var epsilonzero = 0
    for (j = 0; j < carbondioxide.length; j++) {
        binary = carbondioxide[j]
        if (binary[i] === '0') {
            epsilonzero = epsilonzero + 1
        }
        else {
            epsilonone = epsilonone + 1
        }
    }
    if (carbondioxide.length === 1) {
    break
    }
    if (epsilonone > epsilonzero) {
        carbondioxide = carbondioxide.filter(rho => parseInt(rho[i]) === 0)
    }
    else if (epsilonone === epsilonzero) {
        carbondioxide = carbondioxide.filter(rho => parseInt(rho[i]) === 0)
    }
    else {
       carbondioxide = carbondioxide.filter(rho => parseInt(rho[i]) === 1)
    }
}

console.log(carbondioxide)

oxygenNumber = parseInt(oxygen[0],2) // first index of the array, to number
carbondioxideNumber = parseInt(carbondioxide[0],2)
lifeSupportRating = oxygenNumber * carbondioxideNumber
console.log(lifeSupportRating)