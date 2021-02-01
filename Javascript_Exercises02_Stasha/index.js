//=====================================================================================
//Exercise level 1:
// Create a javascript function which will accept an array of numbers as input and insert dashes (-) between each two even numbers.
// Make sure to implement validation of the input array.
// Example: if you accept [0,2,5,4,6,8] the output should be [0,-,2,5,4,-,6,-,8].

let exampleArray = [0, 2, 5, 4, 6, 8];
let validationArray = [0, 2, 5, 4, "love", 6, 8];

function dashes(array) {

    let resultArray = [];

    for (i= 0; i < array.length; i++) {

        let b = isNaN(array[i]);

        if (b == false) {

            if (array[i] % 2 != 0) {
                resultArray.push(array[i]);

            } else if (array[i] % 2 == 0 && array[i + 1] % 2 == 0) {
                resultArray.push(array[i]);
                let newItem = "-"
                resultArray.push(newItem);
                resultArray.push(array[i + 1]);

            }
        } else {
            console.log(`This array ${array} can not be processed, because this element ${array[i]} is not a number`)
            return array;
        }
    }
    return resultArray;
}



console.log(dashes(exampleArray)); //RESULT:[0, "-", 2, 5, 4, "-", 6, 6, "-", 8] Question nz kako da ja popravam 6kata za zal. 
// console.log(dashes(validationArray));

//=====================================================================================