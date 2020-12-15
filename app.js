// When a user press any key from keyboard
// we will show the key value, key code and that key's character code on screen.

// Let's create variables to be shown on the screen first
let keyValue = document.getElementById("keyValue");
let keyCode = document.getElementById("keyCode");
let charCode = document.getElementById("charCode");
let result = document.getElementById("result");
let heading = document.getElementById("heading");
let boxes = document.getElementsByClassName("key");
//implement eventlistener to get the values and store them in variables
for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.visibility = "hidden"
}
heading.style.marginTop = "200px";
window.addEventListener("keydown", logKey)

function logKey(e) {

        keyValue.textContent = e.key.toLowerCase();
        charCode.textContent = e.which ;
        result.textContent = e.which;

    keyCode.textContent = e.code;
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.visibility = ""
    }
    heading.style.visibility = "hidden";
    heading.style.marginTop = "0";


}
