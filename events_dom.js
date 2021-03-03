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
    let rowsA = document.getElementById("myTable").getElementsByTagName("tr");
    let rows = rowsA.length + 1;
    let row = document.createElement("tr");
    row.id = "row" + rows;
    document.getElementById(sampleTable).appendChild(row);
    let childs = document.getElementById("row1").childElementCount;
    for (let i = 0; i < childs; i++){
        let id = "row" + rows;
        let cell = document.createElement("td");
        cell.innerHTML = "Row " + rows + " Column " + i;
        document.getElementById(id).appendChild(cell);
    }
}

function insertColumns() {
    let table = document.getElementById("sampleTable");

}

// let table = document.getElementById("sampleTable");
// let row = table.insertRow(-1);
// let rowsA = document.getElementById("myTable").getElementsByTagName("tr");
// let rows = rowsA.length;
// let childs = document.getElementById("row1").childElementCount;
// console.log(rows + " " + childs);
// for (let i = 0; i < childs; i++) {
//     let casilla = row.insertCell(i);
//     casilla.innerHTML = "Row " + (rows) + " column " + (i + 1);
// }