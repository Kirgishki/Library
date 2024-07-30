const myLibrary = [new Book("Zika"), new Book("Slika")];

function Book(name) {
    this.name = name;
  }
  
function addBookToLibrary() {
let newBook = new Book(prompt("Enter the book name: "));
myLibrary.push(newBook);
}

function displayBooks(){
    
    let booksDiv = document.querySelector(".booksContainer");
    
    myLibrary.forEach(book => {
        let card = document.createElement("div");
        let bookTitle = document.createElement("h3");
        
        bookTitle.textContent = book.name;
        card.appendChild(bookTitle);
        booksDiv.appendChild(card);
    });
    
}

displayBooks();