function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (const [_, val] of array.entries()) {
    console.log(`Processing index: ${_} with value: ${val}`);
    output.push(instructions(val));
  }
  return output;
}

function multiplyBy2(input) {
  return input * 2;
}
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
console.log(result);
