// Some Exercise
// Instructions: Create an array of at least five numbers.
// Write code to check if some of the numbers are even.

const numbers = [56, 5, 987, 52, 698, 8, 65]
const even = numbers.some(num => {
    if (num % 2 === 0)
        return true
})
console.log(even)