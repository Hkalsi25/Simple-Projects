const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function(buttons) {
    buttons.addEventListener("click", function(Color) {
        if (Color.target.id === "grey") {
            body.style.backgroundColor = Color.target.id;
    }
    if (Color.target.id === "Black") {
        body.style.backgroundColor = Color.target.id;
}
if (Color.target.id === "Blue") {
    body.style.backgroundColor = Color.target.id;
}
if (Color.target.id === "Green") {
    body.style.backgroundColor = Color.target.id;
}
if (Color.target.id === "Yellow") {
    body.style.backgroundColor = Color.target.id;
}
});
});
