var nums = [0, 1, 2, 3, 4, 5];
var caps = ['A', 'B', 'C', 'D', 'E'];
var lows = ['a', 'b', 'c', 'd', 'e'];

var options = [nums, caps, lows];

function randomize(array) {
    var randRes = 0;
    randRes = Math.floor(Math.random() * array.length);
    return randRes
}
// console.log(Math.floor(Math.random() * nums.length))
// console.log(nums, 'nums')
console.log(randomize(nums))





var arr = [];

arr.length = 6

// console.log(options)


