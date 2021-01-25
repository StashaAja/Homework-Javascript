let petsArray = ["Aja the dog","Pepe the dog","Buf the owl","Coco the parot","Baby the cat","Lucifer the Cat"];

let folksArrey = ["Stasha","Elena","Zorichka","Renaka","Neno"];

let inputUser = document.getElementById("inputUser").value;
let buttonUser = document.getElementById("buttonUser");


function Person (FName,Pet){
    this.petsArray = FName;
    this.folksArrey = Pet;
    this.userInput = inputUser;
    
}