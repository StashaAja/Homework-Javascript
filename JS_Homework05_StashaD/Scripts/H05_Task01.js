//Change the text of all paragraphs and headers with javascript

let FirstHeader = document.getElementById("myTitle");

// FirstHeader.textContent = "This is the first thing I have changed"

FirstHeader.innerText = "";

FirstHeader.innerText = "This is the first thing I have changed!"

//------------------------------------------------------------------

let FirstParagraph = document.getElementsByClassName("paragraph")[0];

FirstParagraph.textContent = "This is the second thing I have changed!"

//----------------------------------------------------------------

let SecondDiv = document.getElementsByClassName("anotherDiv")[0];

let SecondParagraph = SecondDiv.firstElementChild

SecondParagraph.innerText = "";

SecondParagraph.innerText = "This is the third thing I have changed!";

let SecondChildToSecondDiv = SecondDiv.lastElementChild

SecondChildToSecondDiv.innerText = "";

SecondChildToSecondDiv.innerText = "This is the fourth thing I have changed!";

//---------------------------------------------------------------

let DivElements = document.getElementsByTagName("div");

let ThirdDiv = DivElements[2];

// console.log(ThirdDiv.innerText);

let HeaderInThirdDiv = ThirdDiv.children[0];

// console.log(HeaderInThirdDiv.innerText);

HeaderInThirdDiv.textContent = "This is the fifth element that I changed!"

//-----------------------------------------------------------------

let LastHeader = ThirdDiv.children[1];

LastHeader.textContent = "This is the final change that I made a change to."

//--------------------------------------------------------------










