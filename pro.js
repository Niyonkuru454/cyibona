function addStudent() {
    let name = document.getElementById("name").value;
    let reg = document.getElementById("reg").value;
    let dept = document.getElementById("dept").value;

    if (name === "" || reg === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("studentTable");

    let row = table.insertRow();
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = reg;
    row.insertCell(2).innerHTML = dept;

    document.getElementById("name").value = "";
    document.getElementById("reg").value = "";
}