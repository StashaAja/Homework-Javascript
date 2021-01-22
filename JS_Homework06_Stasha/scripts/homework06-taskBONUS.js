

let tableButton = document.getElementById("button");

let body = document.getElementsByTagName("body")[0];

function Table() {

    let numberRows = document.getElementById("numberOfRows");

    let numberColumns = document.getElementById("numberOfColumns");

    let nRows = parseInt(numberRows.value);
    let nColumns = parseInt(numberColumns.value);

    console.log(nRows);
    console.log(typeof (nRows));
    let tableElement = document.createElement("table");
    tableElement.setAttribute("border", "2");
    let tableBody = document.createElement("tbody")

    for (let i = 0; i < nRows; i++) {

        let newRow = document.createElement("tr");

        for (let j = 0; j < nColumns; j++) {

            let newColumns = document.createElement("td");

            newColumns.innerText = "Row" + (i + 1) + "Column" + (j + 1);

            console.log(newColumns.innerText);

            newRow.appendChild(newColumns);
        }

        tableBody.appendChild(newRow);

    }

    tableElement.appendChild(tableBody);
    body.appendChild(tableElement);

}

tableButton.addEventListener("click", Table);
