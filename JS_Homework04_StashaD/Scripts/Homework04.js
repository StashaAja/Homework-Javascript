
//Na dva nachina probav:
//Prv nachin: koga kje zadadam array i type (Samo rezultatot go dava posebno parni edno pod drugo, a neparni edno do drugo)
//Vtor nachin: koga kje ima default vrednosti bez niza 

//Prv nachin

function OneTillTwentyFirst(array, type) {


    let Result = " "

    if (type === 'even') {



        for (i of array) {

            if (i % 2 == 0) {

                Result += `${i}` + "\n";

            }
        }


    }

    else if (type === 'odd') {



        for (i of array) {

            if (i % 2 != 0) {

                Result += `${i}` + " ";

            }

        }

    }

    return Result;
}


console.log(OneTillTwentyFirst([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'even'));
console.log(OneTillTwentyFirst([1, 2, 3, 4, 5, 6, 23, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 'odd'));

//---------------------------------- Vtor nachin:



function OneTillTwentySecond() {


    let EmptyString = " "


    for (i = 1; i <= 20; i++) {

        if (i % 2 == 0) {

            EmptyString += `${i}` + "\n";


        }

        else if (i % 2 != 0) {

            EmptyString += `${i}` + " ";
        }

    }
    return EmptyString;
}

console.log(OneTillTwentySecond());





