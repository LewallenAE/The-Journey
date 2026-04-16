let myName = "Anthony"

console.log(`My name is: ${myName}`)


let tally = 0

function countTally() {

    const _ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    for (let i of _ARR) {
        tally += i

        
    }

    return tally

   
}

console.log(`The tally total is: ${tally}`) // this is acting as expected because we are calling tally which is 0

// We need to call the function

console.log(`The total tally is: ${countTally()}`)