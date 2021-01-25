let exampleArray = [2,5,["a","b","c"],"sedc"];

console.log(typeof(["a","b","c"]));

function testFalsy (array){

    for(a of array){
        if(typeof(a) === "NaN"){
            console.log(`The value you entered is not a number!`)
        }else if (typeof (a) === "null"){
            console.log(`There is no value to this element`)
        } else(typeof(a) === "undefined")(
            console.log(`The element is not defined`)
        )
    }

}

testFalsy(exampleArray);