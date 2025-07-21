var workshop = {
    teacher: "Anthony",
    age: 39,
    weight: "Incalculable",
    ask(question) {
        console.log(this.teacher, question, this.age, this.weight);
    },
};
workshop.ask("What is an example of implicit binding?");

function ask(question) {
    console.log(this.teacher, this.age, question);
}

function otherClass() {
    var myContext = {
        teacher: "Antman",
        age: 39,
    };
    ask.call(myContext, "Why?");
    }
otherClass();