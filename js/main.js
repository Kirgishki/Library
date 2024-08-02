const myLibrary = [new Book("Witcher: Taj i taj"), new Book("Song of Ice and Fire")];

const addBooksButton = document.querySelector("#addBookButton");
const importBookButton = document.querySelector("#importBookButton");
const addBookDialog = document.querySelector("#addBookDialog");
const addBookForm = document.querySelector("#addBookDialog > form");
const cancelAddBookButton = document.querySelector("#cancelAddBookButton");


function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}

Book.prototype.addBookToLib = function(){
    myLibrary.push(this);
}

function addBookToLibrary() {
let newBook = new Book(prompt("Enter the book name: "));
myLibrary.push(newBook);
}

function displayBooks(){
    
    let booksDiv = document.querySelector(".booksContainer");
    booksDiv.textContent = "";

    myLibrary.forEach(book => {

        let card = document.createElement("div");
        card.classList.add('bookCard');

        let bookMenuIcon = document.createElement("div");
        bookMenuIcon.innerHTML = "&vellip;";
        bookMenuIcon.classList.add("bookMenuIcon");

        let bookMenu = document.createElement("div");
        bookMenu.classList.add('bookMenu');
        bookMenu.classList.add('bookMenuHide');

        bookMenu.innerHTML = `<ul>
            <li>Remove<li>
            <li>Read<li>
        </ul>`;
        let bookTitle = document.createElement("h3");
        
        bookTitle.textContent = book.name;
        card.appendChild(bookTitle);
        card.appendChild(bookMenu);
        card.appendChild(bookMenuIcon);
        booksDiv.appendChild(card);

        bookMenuIcon.addEventListener("click", function(e){
            this.parentElement.querySelector('.bookMenu').classList.toggle('bookMenuHide');
        });
        
        bookMenu.addEventListener("click", (e)=>{
            let targetContent = e.target.textContent;

            switch(targetContent){
                case "Remove": 
                    e.target.parentElement.parentElement.parentElement.remove();
                    break ;
                case "Read":
                    break ;
            };
        });

    });
    
}

displayBooks();

addBooksButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

addBookDialog.addEventListener("close", (e)=>{
    
});

importBookButton.addEventListener("click", (e) => {
    e.preventDefault();
    let newBookInfo = Object.values(addBookForm).reduce((obj,field) => { obj[field.name] = field.value; return obj }, {});
    let newBook = new Book(newBookInfo.bookName, newBookInfo.bookAuthor, newBookInfo.numOfPages);
    newBook.addBookToLib();
    displayBooks();

    addBookDialog.close();
});

