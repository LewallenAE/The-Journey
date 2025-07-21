

function ask(question) {
    setTimeout(function waitASec() {
        console.log(question);
    }, 100);
}

ask("What is closure?");