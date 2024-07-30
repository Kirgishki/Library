const myLibrary = [new Book("Zika"), new Book("Slika")];

const addBooksButton = document.querySelector("#addBookButton");
const addBookDialog = document.querySelector("#addBookDialog");
const cancelAddBookButton = document.querySelector("#cancelAddBookButton");

console.log(addBooksButton);

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


addBooksButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

cancelAddBookButton.addEventListener("click", (e)=>{
    e.preventDefault();
    addBookDialog.showModal();
});