// Find Exercise
// Instructions: Create an array of at least five numbers. 
// Write code to find the first element that is greater than 10.

const numbers = [56, 5, 987, 52, 698, 8, 65]
const found = numbers.find((number) => {
    return number > 10
})
console.log(found)
