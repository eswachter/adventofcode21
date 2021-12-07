// Part 1
// Forward increases horizontal with x units
// Down increases depth with x
// up decreases depth with x
// if forward, var horizontal + x
// if down, var depth + x
// if up, var depth -x
// movement = horizontal * depth
const fs = require('fs')
var data = fs.readFileSync('./day2data.txt', 'utf8').toString().split("\r\n") //data split every new line

data = data.map(e => e.split(" "))

var horizontal = 0
var depth = 0
for(let i=0; i<data.length; i++) {
    [move, rawnumber] = data[i]
    number = parseInt(rawnumber)
    if (move === 'down') {
        depth = depth + number
    }
    else if (move === 'up') {
        depth = depth - number
    }
    else {
        horizontal = horizontal + number
    }
}
var movement = horizontal * depth

console.log(movement)

// part two
//    down X increases your aim by X units.
//    up X decreases your aim by X units.
//    forward X does two things:
//        It increases your horizontal position by X units.
//        It increases your depth by your aim multiplied by X.
//
//loop maken voor var aim var horizontal en var depth
//die door de items gaat en dan
//check of i down, up of forward is
//if down, var aim + x
//if up, var aim - x
//if forward
//    var horizontal + x
//    var depth = var aim * x
//movement = var horizontal * var depth




var aim = 0
var horizontal = 0
var depth = 0
for(let i=0; i<data.length; i++) {
    [move, rawnumber] = data[i]
    number = parseInt(rawnumber)
    if (move === 'down') {
        aim = aim + number
    }
    else if (move === 'up') {
        aim = aim - number
    }
    else {
        horizontal = horizontal + number
        depth = depth + (aim * number)
    }
}

var movement = horizontal * depth
console.log(aim)
console.log(horizontal)
console.log(depth)
console.log(movement)
