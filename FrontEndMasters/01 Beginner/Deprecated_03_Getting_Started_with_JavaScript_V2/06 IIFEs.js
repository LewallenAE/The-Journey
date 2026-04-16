
// Immediately Invoked Function Expression

var teacher = "Anthony";

( function anotherTeacher() {
    var teacher = "Suzy";
    console.log(teacher);
})();