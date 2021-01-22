
let tableRow = document.getElementById("sampleTable");
let tableBody = document.getElementsByTagName("tbody")[0];

function insert_Row() {
    let newRow = document.createElement("tr");
    let newCellOne = document.createElement("td");
    newCellOne.innerText = "Row 3 cell 1";
    newRow.appendChild(newCellOne);

    let newCellTwo = document.createElement("td");
    newCellTwo.innerText = "Row 3 cell 2";
    newRow.appendChild(newCellTwo);

    tableBody.appendChild(newRow);
    tableRow.appendChild(tableBody);
}

