var book1 = new Book("Witcher", "Sapkowski", 289, true);
var book2 = new Book("Witcher 2", "Sapkowski", 378);
var book3 = new Book("Witcher 3", "Sapkowski", 299);

let myLibrary = [book1, book2, book3];
displayBooks();


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? read : false;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function addNewBook(bookTitle, bookAuthor, bookPages, read) {
    return new Book(bookTitle, bookAuthor, bookPages, read);
}

function displayBooks() { 
    for (let i = 0; i < myLibrary.length; i++) {
        createBookArticle(myLibrary[i]);
    }
}

const btnSave = document.getElementById("btnSaveBook");
btnSave.addEventListener('click', function () { 
    let title = document.getElementById("tbTitle").value;
    let author = document.getElementById("tbAuthor").value;
    let pages = document.getElementById("tbPages").value;
    let read = document.getElementById("chbRead").checked;

    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    createBookArticle(book);
 });

const btnsDelete = document.querySelectorAll(".book button");
Array.from(btnsDelete).forEach((btn) => btn.addEventListener('click', function () {
    let bookTitle = this.previousElementSibling.previousElementSibling.children[0].textContent;
    for (let i = 0; i < myLibrary.length; i++) {
        if(myLibrary[i].title === bookTitle){
            myLibrary.splice(i, 1);
        }
    }
    this.parentElement.remove();
  }));


 function createBookArticle(book) {
    var bookCard = document.createElement("article");
        bookCard.classList.add("book");
        bookCard.innerHTML = `<h2>Title: <span class="title">${book.title}<span></h2>
                            <p>Author: ${book.author}<br/>
                            Pages: ${book.pages}<br/>
                            Read: ${book.read}</p>`;
        
        var removeBtn = document.createElement("button");
        removeBtn.classList.add("btn", "btn-danger");
        removeBtn.textContent = "Delete";
        bookCard.appendChild(removeBtn);
        document.querySelector(".container").appendChild(bookCard);
}