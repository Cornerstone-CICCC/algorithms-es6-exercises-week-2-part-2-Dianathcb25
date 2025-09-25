// Every Exercise
// Instructions: Create an array of at least five numbers.
// Write code to check if every number in the array is positive.

const numbers = [56, 5, 987, -52, -698, 8, 65]
const positive = numbers.every((num) => {
    if (num >= 0)
        return true
})
console.log(positive)