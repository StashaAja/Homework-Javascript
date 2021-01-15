//HOMEWORK 2:

let FiveNumbers = [22,7,5,32,55];

function SumOfFiveNumbers(input){

    let counter = 0;

    let sum = 0;
    let b = 5;


    while (counter<b) {


        sum = sum + input[counter];

        counter++;
    }

    return sum;  
}

console.log(SumOfFiveNumbers(FiveNumbers))

//-----------------------------------------------------------------------------------------------------------

//HOMEWORK 2 BONUS: 

let FiveNumbersTwo = [22, 8, 54, 36, 52];

function ValidateNumber (input){

    for(let counter=0; counter<input.length; counter++){

        let a = input[counter];

        let b = isNaN(a)

        if ( b == false){

             console.log(`This number ${input[counter]} is a valid number!`);
        }

        else if (b == true){
            console.log(`This number ${input[counter]}  is not a valid number!`);
        }
    }
}   

console.log (ValidateNumber (FiveNumbersTwo));









