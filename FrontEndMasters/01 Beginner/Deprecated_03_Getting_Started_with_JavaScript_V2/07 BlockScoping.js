

var teacher = "Anthony";

{

    let teacher = "Suzy";
    console.log(teacher);  // Suzy
}

console.log(teacher);  // Anthony

function diff(x,y) {
    if (x > y) {
        let tmp = x;
        x = y;
        y = tmp;
    }
    return y - x;

    }

    console.log(diff(5,2));
    console.log(diff(2,5));

function repeat(fn,n) {
    var result;

    for (let i = 0; i < n; i++) {
        result = fn( result, i);
    }
    return result;
}


function sum(result = 0, i) {
    return result + i;
}

console.log(repeat(sum, 25));