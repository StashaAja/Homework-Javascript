let RecipeDiv = document.getElementById("Recipe");

//__Ime na recept vo header:

let UserNameNameTheRecipe = prompt("Enter the name of the recipe:");

let HeaderName = document.createElement("h2");

HeaderName.innerText = `This is a recipe for ${UserNameNameTheRecipe}`;

RecipeDiv.appendChild(HeaderName);

//___ Broj na sostojki vo paragraph:

let UserNumberOfIngredients = parseInt(prompt("Enter the number of ingredients for this recipe:"));

let RecipeParagraph = document.createElement("p")

RecipeParagraph.innerText = `For this recipe you will need a total number of ${UserNumberOfIngredients} ingrediants. You can find the Full List below:`

RecipeDiv.appendChild(RecipeParagraph);

//_____ Option 1: Tuka imam posebna funkcija za ul lista da kreira od user:


// function createAlistFromUserIngredients(element) {

//     let IngredientList = document.createElement("ul");

//     for (counter = 1; counter <= UserNumberOfIngredients; counter++) {

//         let Ingredient = prompt(`Enter the ${counter} Ingredient:`);

//         let item = document.createElement("li");

//         item.innerText = `${counter} . ${Ingredient}`;

//         IngredientList.appendChild(item);
//     }

//     element.appendChild(IngredientList);

// }

// createAlistFromUserIngredients(RecipeDiv);

// -----------Option 2:Extra Fancy Funkcija so tabela:
var ingredientsArray = [];

function createAnArrayfromUser() {

    let ingredientString = ""

    for (i = 0; i < UserNumberOfIngredients; i++) {

        let ingredientFromUser = prompt(`Enter the ${i} Ingredient:`);

        ingredientString = `${ingredientFromUser}`;

        ingredientsArray.push(ingredientString);
    }

    return ingredientsArray;
}

console.log(createAnArrayfromUser());

console.log(ingredientsArray);

function createAfancyTable(element) {

    let tableFirstStep = document.createElement("table");

    let tableBodySecondStep = document.createElement("tbody");

    for (i = 0; i < ingredientsArray.length; i++) {

        let trThirdStep = document.createElement("tr");
        tableBodySecondStep.appendChild(trThirdStep);

        let tdFourthStep = document.createElement("td");
        tdFourthStep.innerText = `${ingredientsArray[i]}`;
        trThirdStep.appendChild(tdFourthStep);
    }


    tableFirstStep.setAttribute("border", "3");
    tableFirstStep.appendChild(tableBodySecondStep);
    element.appendChild(tableFirstStep);

}

console.log(createAfancyTable(RecipeDiv));








