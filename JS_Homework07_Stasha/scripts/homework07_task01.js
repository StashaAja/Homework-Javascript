//Option 1:

function AnimalOne (aType,aName,aSays){

    this.animalType = aType;

    this.animalName = aName;

    this.animalSays = aSays;

    this.printWhatAnimalSays = function (){

        console.log(`This animal is a ${this.animalType} and it's name is ${this.animalName}, so as any ${this.animalType} would normally say, it says: ${this.animalSays}`)
    }
}

let animalOne = new AnimalOne ("dog","Bonnie","Hey Bro!!!")

console.log(`Animal One property type: ${animalOne.animalType}`)
console.log(`Animal One property name: ${animalOne.animalName}`)
console.log(`Animal One property phrase: ${animalOne.animalSays}`)

animalOne.printWhatAnimalSays();

// Option 2 - Bonus: enter the values from prompt or from HTML inputs:


function Animal (){

    this.animalType = prompt(`Enter the type of animal:`);

    this.animalName = prompt(`Enter the name of the animal:`);

    this.animalSays = prompt(`Enter the phrase that you would like the animal to say:`);

    this.printWhatAnimalSays = function (){

        console.log(`This animal is a ${this.animalType} and it's name is ${this.animalName}, so as any ${this.animalType} would normally say, it says: ${this.animalSays}`)
    }
}

let animalFromPromt = new Animal ()

console.log(`Animal from the User property type: ${animalFromPromt.animalType}`)
console.log(`Animal from the User property name: ${animalFromPromt.animalName}`)
console.log(`Animal from the User property phrase: ${animalFromPromt.animalSays}`)

animalFromPromt.printWhatAnimalSays();



