const ball = document.querySelector('.ball');
popmotion.animate({
    from: "0px",
    to: "300px",
    repeat: Infinity,
    repeatType: "mirror",
    type: "spring",
    onUpdate (update) {
        ball.style.left = update;
    }
});

//# sourceMappingURL=01 JavaScript Libraries.c36f364e.js.map
