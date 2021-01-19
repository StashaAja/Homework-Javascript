let numbers = [2, 34, 5, 6];

let NumbersDiv = document.getElementById("listDiv");



function PrintAllNumbers(array, element) {

    let sum = 0;

    element.innerHTML = "";

    element.innerHTML = `<h2>Here is the list of numbers from the given array: </h2>`;

    let UlElement = document.createElement("ul");

    for (i in array) {

        let item = document.createElement("li");

        item.innerText = `${array[i]}`;

        UlElement.appendChild(item);

    }

    element.appendChild(UlElement);

    let SumParagraph = document.createElement("p");

    for (a of array) {
        sum += a;
        SumParagraph.innerText = `The sum is : ${sum}`;
    }


    element.appendChild(SumParagraph);

}

PrintAllNumbers(numbers, NumbersDiv);


// Bonus: 

function PrintSring(element){

let sum = 0;

let MEparagraph = document.createElement("p");

let elementsString = "";

for (a of numbers) {

    elementsString += a + '+' + '';

    MEparagraph.innerText = "";

    sum += a;

    MEparagraph.innerText = `This is the BONUS: ${elementsString} = ${sum} `; // QUESTION: 2+34+5+6+ = 47 znam deka ne treba da ima plus posle 6-kata Kako da go sredam toa?
}

element.appendChild(MEparagraph);

}
PrintSring (NumbersDiv);


