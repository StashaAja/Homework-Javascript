let firstName = ['Vanja', 'Dunja', 'Irma', 'Jan', 'Zofija'];

let lastName = ['Ahrimenko', 'Zabjakin', 'Damovska', 'Amski', 'Furnadziska'];

function Rainbow(arrayOne, arrayTwo) {

   let finalNames = [];

   let oneElement = " ";

   for (let i = 0; i < arrayOne.length; i++) {

       oneElement = `${i} . ${arrayOne[i]} ${arrayTwo[i]}`;

       finalNames.push(oneElement);
       
   }

   return finalNames;
   // console.log(finalNames);
}

console.log(Rainbow(firstName, lastName)); 


