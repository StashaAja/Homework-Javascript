let exampleArray = [1,3,4,5,6,7];

function checkArrays (array){
    let OddArray = [];
    let EvenArray = [];

    for(a of array){

        if(a%2 == 0){
            EvenArray.push(a);
        } else{
            OddArray.push(a);
        }
    }
  console.log(`Even Array: ${EvenArray} and odd array: ${OddArray}`)

  return [OddArray,EvenArray];
}

checkArrays (exampleArray);

console.log(checkArrays (exampleArray));

