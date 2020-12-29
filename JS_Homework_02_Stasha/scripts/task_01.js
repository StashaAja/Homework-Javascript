
//First Number
var numberOne = prompt("Please input your first number here:");
var numberOne2 = parseInt(numberOne);

console.log(numberOne2)          
console.log(typeof(numberOne2))

var maxBroj = 0; 

//PRASHANJE 1: ideata za max=0 mi e od prviot predmet. 
//Sakav da ja postavam so for i=0;i<=4;i=i+1;  
//if number>max max=number
// end if end for Print Max
// No neznaev kako da go formuliram seto toa tochno pa zatoa odev postepeno za sekoj broj. 
//Mislam deka taka bi bilo pokratko i poednostavno, dokolku ima takvo reshenie , bash bi sakala da go vidam kodot, bidejki probav no mi davashe greshki i crven beshe js fajlot.

                

//Za Prviot Broj

if(numberOne2>maxBroj){
    console.log(maxBroj=numberOne2)
}
else{
    console.log("Please enter a number above 0")
}

console.log("The maximum number for now is:");
console.log(maxBroj); 

//Za Vtoriot Broj

var numberTwo = prompt("Please input your second number here:");
var numberTwo2 = parseInt(numberTwo);

console.log(numberTwo2)
console.log(typeof(numberTwo2))

if(numberTwo2>maxBroj){
    console.log(maxBroj=numberTwo2)
}

else if(numberTwo2<maxBroj){
    console.log("The number you entered is smaller than the previous!")
}

else if(numberTwo2=maxBroj){
    console.log("The number you entered is equal to the previous!")
}


else{
    console.log("Please enter a number above 0")
}

console.log("The maximum number for now is:");
console.log(maxBroj); //za proverka dali go smenil

//Za Tretiot Broj

var numberThree = prompt("Please input your third number here:");
var numberThree2 = parseInt(numberThree);

console.log(numberThree2)
console.log(typeof(numberThree2))

if(numberThree2>maxBroj){
    console.log(maxBroj=numberThree2)
}

else if(numberThree2<maxBroj){
    console.log("The number you entered is smaller than the previous!")
}

else if(numberThree2=maxBroj){
    console.log("The number you entered is equal to the previous!")
}

else{
    console.log("Please enter a number above 0")
}

console.log("The maximum number for now is:");
console.log(maxBroj); //za proverka dali go smenil

//Za Chetvrtiot Broj:


var numberFour = prompt("Please input your fourth number here:");
var numberFour2 = parseInt(numberFour);

console.log(numberFour2)
console.log(typeof(numberFour2))

if(numberFour2>maxBroj){
    console.log(maxBroj=numberFour2)
}

else if(numberFour2<maxBroj){
    console.log("The number you entered is smaller than the previous!")
}

else if(numberFour2=maxBroj){
    console.log("The number you entered is equal to the previous!")
}
else{
    console.log("Please enter a number above 0!")
}

console.log("The maximum number for now is:");
console.log(maxBroj); //za proverka dali go smenil

//Za Chetvrtiot Broj:

var numberFive = prompt("Please input your fifth number here:");
var numberFive2 = parseInt(numberFive);

console.log(numberFive2)
console.log(typeof(numberFive2))

if(numberFive2>maxBroj){
    console.log(maxBroj=numberFive2)
}

else if(numberFive2<maxBroj){
    console.log("The number you entered is smaller than the previous!")
}

else if(numberFive2=maxBroj){
    console.log("The number you entered is equal to the previous!")
}
else{
    console.log("Please enter a number above 0")
}

console.log("The Maximum Number is:");
console.log(maxBroj); //za proverka dali go smenil

//Go dobivme maximalniot broj:

alert(maxBroj);

//PRASHANJE 2: Ako site brojki koi se vneseni se isti, kako da go formuliram Alert? Vo console log imam kako else if ako dva se isti momentalniot i prethodniot i ispishuva:"The number you entered is equal to the previous!" No ako site se isti kako vo alert da eliminiram da ne mi dade maximum?

