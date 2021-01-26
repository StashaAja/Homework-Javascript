let brojche = parseInt(prompt(`Please enter a number:`));

function checkNumberIsPositive(brojche) {
    if (brojche >= 0) {
        alert(`The number ${brojche} is a positive number!`)
    } else if (brojche < 0) {
        alert(`The number ${brojche} is a negative number!`)
    }
}

checkNumberIsPositive(brojche);

function checkNumberDigits(brojche) {

    let digits = brojche.toString().length;
    alert(`Your number  has a total of ${digits} digits!`)
    return digits;
}

checkNumberDigits(brojche);

function checkEvenOdd(brojche) {

    if (brojche % 2 == 0) {
        alert(`The number ${brojche} is even!`)
    } else (
        alert(`The number ${brojche} is odd!`)
    )
}

checkEvenOdd(brojche);



   
