let brojche = parseInt(prompt(`Please enter a number:`));

function Number (brojche){

    this.Number = brojche;

    this.numberFunctionPsoitive = function(){
        if(this.Number % 2){
            alert(`the number is even`);
        } else {
            alert(`the number is odd`);
        }
    }

    this.numberFunctionNumberofDigits() = function(){
        if(this.Number >= 0){
            alert(`the number is positive`)
        } else{
            alert(`the number is not positive`)
        }
        
    }

}

let numberOne = new Number(brojche);



   