
let ExampleArray = [3, 5, 6, 8, 11];
let ExampleArrayTwo = [34, 5, 656, 81, 11];

function SumOfMaxAndMin(arr){

var max = arr[0];

for (var i = 0; i<arr.length; i++){

  if(arr[i]>=max){

    max = arr[i];

    // console.log(`Setting the max each time ${max}`)
  }

}

console.log(`This is the max:${max}`);//11
console.log(typeof(max));

var min = arr[0];

for (var i = 0; i < arr.length; i++){

  if(arr[i] < min){

    min = arr[i];

    // console.log(`Setting the min each time ${min}`)
  }

}

let sum = max + min;
console.log(sum); 
console.log(typeof(sum));

console.log(`This is the ${min}`);//3
console.log(typeof(min));

return sum;

}

console.log(`This function gives the sum from the max and min values in any given array. The sum is:  ${SumOfMaxAndMin(ExampleArray)}`) //14
console.log(`This function gives the sum from the max and min values in any given array. The sum is:  ${SumOfMaxAndMin(ExampleArrayTwo)}`)