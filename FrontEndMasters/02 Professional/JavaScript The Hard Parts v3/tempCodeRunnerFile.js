import { copyArrayAndManipulate } from "./01_Execution_Context.js"

function multiplyBy2(input) { return input * 2 }

// const multiplyBy2 = (input) => { return input * 2 }

// const multiplyBy2 = (input) => input * 2

// const multiplyBy2 = input => input * 2

// const output = multiplyBy2(3)
// console.log(output)

// const multiplyBy2 = input => input * 2

const result = copyArrayAndManipulate([1, 2, 3], (input) => input * 2);
console.log(result)