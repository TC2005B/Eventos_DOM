window.addEventListener("mousemove", event => {
    document.getElementById("mousePosition").innerHTML = "Posición del mouse: X= " + event.clientX + "px Y= " + event.clientY + "px";
});

let button_submit = document.forms.button_submit.getElementById("form1");
button_submit.addEventListener("click", getFormvalue);
function getFormvalue() {
    let fullName = document.createTextNode((document.getElementById("fname").value) + " " + (document.getElementById("lname").value));
    document.getElementById("form1").appendChild(fullName);
}