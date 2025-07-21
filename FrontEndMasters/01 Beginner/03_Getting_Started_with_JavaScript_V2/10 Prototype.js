function Workshop(teacher) {
    this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
    console.log(this.teacher, question);
};

var deepJS = new Workshop("John");
var reactJs = new Workshop("Suzy");

deepJS.ask("Why are we even doing this?");
reactJs.ask("What exactly was that?");