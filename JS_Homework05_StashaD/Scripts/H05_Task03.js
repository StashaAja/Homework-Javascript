
let FName = prompt(`Please enter your first Name:`);


// console.log(FName);
// console.log(typeof(FName));

let HumanWeight = parseFloat(prompt(`Please enter your weight in kg:`));

// console.log(HumanWeight);
// console.log(typeof(HumanWeight));

let ChickenDiv = document.getElementById("chickens");


function FinalQuack(FName, HumanWeight , element){

    let WelcomeHeader = document.createElement("h2");
    
    WelcomeHeader.innerText = `Welcome ${FName}`;

    element.appendChild(WelcomeHeader);

    //---------------------------

    let ChickenWeight = 0.5;

    let NewParagrapgh = document.createElement("p");
    
    let NumberOfChickens = HumanWeight / ChickenWeight;

    NewParagrapgh.innerText = `Congratulations you weigh the same as ${NumberOfChickens} chickens combined!`;
    
    element.appendChild(NewParagrapgh);


}

FinalQuack(FName, HumanWeight , ChickenDiv);

