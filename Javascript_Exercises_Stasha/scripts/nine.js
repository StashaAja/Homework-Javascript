function Pet(nameP, type, age, health, own) {
    this.name = nameP;
    this.type = type;
    this.age = age;
    this.isHealthy = health;
    this.owner = own;
    this.isAdopted = function () {
        if (this.owner === "") {
            return false;
        } else if (!this.owner) {
            return false;
        } else {
            return true;
        }
    }
}
// let petBubu = new Pet ("Aja","dog","35","healthy",""); //false
// let petBubu = new Pet ("Aja","dog","35","healthy","Stasha");//true
// let petBubu = new Pet ("Aja","dog","35","healthy",); //true
// console.log(petBubu.isAdopted());

function PetOwner(fName, lName, age) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
}

let petArray = [new Pet("Aja", "dog", 35, "healthy", "Stasha"), new Pet("Pepe", "dog", 40, "healthy but crazy", "Elenka"), new Pet("Alma", "dog", 50, "old", "Elenka")];
let ownerArray = [new PetOwner("Stasha", "Damovska", 30), new PetOwner("Elenka", "Mitrovikj", 27), new PetOwner("Ana", "Kocevska", 29)];

let button = document.getElementById("button");

function getUserNameFromArray(array, input) {
    for (a of array) {
        if (input === a.firstName) {
            return a;
        }
    }
}

function getUserfromPetsArray(array, input) {
    let arrayOfPets = [];
    for (a of array) {
        if (input === a.owner) {
            arrayOfPets.push(a.name);
        }
    }
    return arrayOfPets;
}


button.addEventListener("click", function () {
    let userInput = document.getElementById("user").value;
    console.log(`Tuka imeto od userot go sporeduvam i baram vo owner Array za da go najdam toj object za toa ime: ${getUserNameFromArray(ownerArray, userInput)}`); //object so Owner
    console.log(`Tuka spored imeto od userot vo owner array gi naogjam site pets na koi e owner i gi stavam vo array:${getUserfromPetsArray(petArray, userInput)}`);  //kolku pets ima toj Owner

    let objectUser = getUserNameFromArray(ownerArray, userInput); //object so Owner

    console.log(`Tuka go go dodavam array od pets kako nov property na objectot na toj owner: ${objectUser.arrayOfPetsTheyOwn = getUserfromPetsArray(petArray, userInput)}`); 


});

