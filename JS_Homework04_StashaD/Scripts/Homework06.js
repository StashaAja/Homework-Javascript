//Ne e reshena ne znam kako da se snajdam bash, podole objasnuvam shto sakav da postignam. Mi treba help! :)
let FirstName = ['Vanja', 'Dunja', 'Irma', 'Jan', 'Zofija'];

let LastName = ['Ahrimenko', 'Zabjakin', 'Damovska', 'Amski', 'Furnadziska'];

function Rainbow(arrayone, arraytwo) {

   let FinalNames = [];

   let OneElement = " ";

   let arrayLenght = arrayone.length === arraytwo.length


   for (let i = 0; i < arrayLenght; i++) {

      let NumericValue = i + 1

      OneElement = NumericValue + " " + arrayone[i] + " " + arraytwo[i]

      console.log(OneElement); //Tuka dobivam string: 1 Vanja Ahrimenko

      FinalNames.push(OneElement); // Tuka ja popolnuvam nizata so prv string ["1 Vanja Ahrimenko"]
   }
  
   return FinalNames;
}

console.log(Rainbow(FirstName, LastName)); 

//Objasnuvanje: Sakav da kreiram string od sekoj element so ist index vo nov prazen string, taka i stignav. 
// Sledno toj string go push-nav kako nov element vo praznata niza:
//QUESTION: Ne znam kako da napravam brojach ili koj loop da go vmetnam i kade, za da bez prestan mi iskreira takvi stringovi i site mi gi pushne u novata niza posledovatelno. 
//Mene vsuhnost mi zavrshuva na prviot element.



