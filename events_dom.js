//Ejercicio 1
window.addEventListener("mousemove", event => {
    document.getElementById("mousePosition").innerHTML = "Posición del mouse: X= " + event.clientX + "px Y= " + event.clientY + "px";
});

//Ejercicio 2
function getFormvalue(event) {
    event.preventDefault();
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;

    let fullname = document.getElementById("fullname");

    fullname.innerHTML = fname + " " + lname;
};

//Ejercicio 3
function insertRow() {
    let table = document.getElementById("sampleTable");
    let row = table.insertRow(-1);
    let rows = table.getElementsByTagName("tr").length;
    let childs = document.getElementById("row1").childElementCount;
    for (let i = 0; i < childs; i++) {
        let casilla = row.insertCell(i);
        casilla.innerHTML = "Row " + (rows) + " column " + (i + 1);
    }
};

function insertColumn() {
    let table = document.getElementById("sampleTable");
    let rows = table.getElementsByTagName("tr").length;
    let childs = document.getElementById("row1").childElementCount;
    for (let i = 0; i < rows; i++){
        let casilla = table.rows[i].insertCell(-1);
        casilla.innerHTML = "Row " + (i + 1) + " column " + (childs + 1);
    }
};

//Ejercicio 4 
function changeContent() {
    let row = document.getElementById("ir").value;
    let col = document.getElementById("ic").value;
    let texto = document.getElementById("it").value;
    let rows = document.getElementById("myTable").rows;
    let c = rows[row - 1].cells;
    c[col - 1].innerHTML = texto;
}

//Ejercicio 5
function deleteElement() {
    let dropDown = document.getElementById("colorSelect");

    dropDown.remove(dropDown.selectedIndex);
}
function addElement() {
    let randomNameList = ["Yellow", "Purple", "Orange", "Blue"]
    let dropDown = document.getElementById("colorSelect");
    let newOption = document.createElement("OPTION")
    newOption.text = randomNameList[Math.floor(Math.random() * Math.floor(4))];
    dropDown.appendChild(newOption);
}

//Ejercicio 6
function changeSize()
{
    let img = document.getElementById("cat");
    img.style.height = Math.floor(Math.random() * Math.floor(600)) + "px";
    img.style.width = Math.floor(Math.random() * Math.floor(300)) + "px";

    let img2 = document.createElement("img");
    img2.src = "GatoG.jpg";

    let div = document.getElementById("gatos");
}
