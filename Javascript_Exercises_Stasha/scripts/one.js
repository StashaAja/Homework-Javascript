let exampleArray = [2,5,["a","b","c"],"sedc"];
let exampleArraySecond = [2, NaN , 7, ['a', 'b', 'c'], null, "sedc", 0];

console.log(typeof(["a","b","c"])); //object
console.log(typeof(NaN));//number
console.log(typeof(underfined)); //underfined
console.log(typeof(null)); // object

function testFalsyReturnGood (array){
    let arrayRight = [];
    for(let a of array){
        if(!!a){
            arrayRight.push(a);
        }
    }
    return arrayRight;
}

console.log(testFalsyReturnGood (exampleArraySecond));

//---------------------------------------------


function testFalsyReturnFalsy (arrayOne){

    let arrayFalsy = [];

    for(a of arrayOne){
        if (!a){
            arrayFalsy.push(a);
        }
    }
    return arrayFalsy;
}

console.log(testFalsyReturnFalsy (exampleArraySecond));
