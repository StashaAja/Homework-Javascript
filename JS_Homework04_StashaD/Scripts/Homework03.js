let Flowers = ['Today', 'the', 'Flowers', 'are', 'wonderfull']; // so 5 elementi 

let Tommorow = ['Tommorow', 'will', 'be', 'better']; //so 4 elementi 


function OneBigString(input) {

    let Result = "";

    for (a of input) {

        let ResultArrays = [`${a}`];

        b = `${ResultArrays}` 

        Result += b + ' ';

        // console.log(typeof(Result)); //string
    } 
    return Result;
}

console.log(OneBigString(Tommorow)); 
console.log(OneBigString(Flowers));









