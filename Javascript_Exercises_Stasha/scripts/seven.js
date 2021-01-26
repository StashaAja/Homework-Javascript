let userButton = document.getElementById("userButton");
let circleDiv = document.getElementsByTagName("div")[1];

function Circle (rad){
    this.radius = rad;
    this.pi = 3,14;
    this.getArea = function(){
        let area = (this.radius*this.radius)*this.pi
        return area;
    }
    this.getPerimeter = function(){
        let perimeter = 2*this.radius*this.pi;
        return perimeter;
    }
}

//PRASHANJE:
// userButton.addEventListener("click",function(){
// let circleUser = new Circle (userRadius);  // Question: Zashto tuka koga go zadavam user Radius nekje?
// console.log(circleUser.getArea());
// console.log(circleUser.getPerimeter());
// })


userButton.addEventListener("click",function(){
    let userRadius = document.getElementById("userRadius").value;
    let circleUser = new Circle (userRadius);
    let inputArea = document.createElement("input");
    inputArea.value=`This is the area: ${circleUser.getArea()}` ;
    circleDiv.appendChild(inputArea);
    let inputPerimeter = document.createElement("input");
    inputPerimeter.value=`This is the perimeter: ${circleUser.getPerimeter()}` ;
    circleDiv.appendChild(inputPerimeter);
    })
