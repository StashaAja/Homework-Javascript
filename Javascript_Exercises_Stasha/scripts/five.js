let click = document.getElementById("click");
let select = document.getElementsByClassName("select")[0];


function addInputToSelect(user) {
    let newOption = document.createElement("option");
    newOption.innerText = `Your Entry: ${user}`;
    select.appendChild(newOption);
}

function validateAnEntry() {
    var user = document.getElementById("user").value;
    console.log(user);
    console.log(typeof (user));
    // So prviot if mi funkcionira:
    if (user === "") {
        return alert(`Please enter your text in the Input field!`)
    }
    //--------------------------------Prashanje: Shto tochno gresham kaj zakomentiranata logika?
    // if(user.toString.length == 0){
    //     return alert(`Please enter your text in the Input field!`)
    // }    
    //---------------------------------------------------------------                     
    else {
        addInputToSelect(user);
    }
}

click.addEventListener("click", function () {
    validateAnEntry();
})
