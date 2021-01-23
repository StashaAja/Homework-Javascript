//Option 1:

function Book (bTitle,bAuthor,rStatus){
    this.bookTitle = bTitle;
    this.bookAuthor = bAuthor;
    this.bookReadingStatus = rStatus;

    this.checkIf = function(){

        if (this.bookReadingStatus==="read"){
            alert(`You Already read this book: ${this.bookTitle}.`);
        }else if(this.bookReadingStatus==="not read"){
            alert(`You still need to read this one: ${this.bookTitle} by the Author: ${this.bookAuthor}`);
        }else{
            alert(`Please re-enter the book related information.Thank you!`);
        }
    }
}

let bookA = new Book ("Harry Potter and the Sorcerer's Stone","JK Rowling","read");

console.log(`Book A Properties:`);

console.log(`Book A title: ${bookA.bookTitle}`);
console.log(`Book A author: ${bookA.bookAuthor}`);

bookA.checkIf();

let bookB = new Book ("Anna Karenina","Lev Nikolayevich Tolstoy","not read");

console.log(`Book B Properties:`);

console.log(`Book B title: ${bookB.bookTitle}`);
console.log(`Book B author: ${bookB.bookAuthor}`);

bookB.checkIf();

//Option 2: BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML:

function BookUser (){
    this.bookTitle = prompt(`Please enter the Book Title here:`);
    this.bookAuthor = prompt(`Please enter the Book Author here:`);
    this.bookReadingStatus = prompt(`Have you read the Book? Please answer with yes or no.Thank you!`)

    this.checkIf = function(){

        if (this.bookReadingStatus==="yes"){
            alert(`You Already read this book: ${this.bookTitle}.`);
        }else if(this.bookReadingStatus==="no"){
            alert(`You still need to read this one: ${this.bookTitle} by the Author: ${this.bookAuthor}`);
        }else{
            alert(`Please re-enter the book related information.Thank you!`);
        }
    }
}

let bookFromPrompt = new BookUser ();

console.log(`Book Tittle: ${bookFromPrompt.bookTitle}`)
console.log(`Book Author: ${bookFromPrompt.bookAuthor}`)

bookFromPrompt.checkIf();

