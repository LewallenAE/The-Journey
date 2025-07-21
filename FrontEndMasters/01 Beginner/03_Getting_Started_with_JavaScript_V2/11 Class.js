class Workshop {
    constructor(teacher) {
        this.teacher = teacher;
    }
    ask(question) {
        console.log(this.teacher, question);
    }
}

var deepJs = new Workshop("Funky-butt");
var reactJs = new Workshop("Stanky-boots");

deepJs.ask("whoa");
reactJs.ask("Hrrrrrrr");