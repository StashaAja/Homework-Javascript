let saveButton = document.getElementById("saveButton");
let fullNames = document.getElementById("nameI");
let lastNames = document.getElementById("lastI");
let userAge = document.getElementById("ageI");
let myDiv = document.getElementById("myDiv");

function Student (fullNames,lastNames,userAge){
    this.fullNames = fullNames.value;
    this.lastNames = lastNames.value;
    this.age = userAge.value;
    this.printDetails = function(){
        console.log(`Full Name: ${this.fullNames} ${this.lastNames} Age:${this.age}`)
    }
    this.studentsArray = function(){
        let students = [];

        let string = `Name: ${this.fullNames} ${this.lastNames} Age: ${this.age}`
    
        students.push(string);
        return students; 
    }

    //Bonus:

    this.unorderedList = function(){
        let Array = this.studentsArray();
         console.log(`Array od object:${Array}`);
         let ul = document.createElement("ul")
         for(a of Array){
            let li = document.createElement("li");
            li.innerText = `${a}`;
            ul.appendChild(li);
         }
         myDiv.appendChild(ul);
    }
}

saveButton.addEventListener("click",function(){
   
    let student = new Student (fullNames,lastNames,userAge);

    console.log(student.studentsArray());
    student.printDetails();

    student.unorderedList();
});

