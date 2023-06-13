let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toogleRead = function(){
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toogleRead();
    render();
}

let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener('click', function() {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";    
})

document.querySelector("#new-book-form").addEventListener("submit", function(){
    console.log("test")
    event.preventDefault();
    addBookToLibrary();
})

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook =  new Book(title, author, pages, read);
    myLibrary.push(newBook)
    render();
      
  }

function render() {
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "book-card");
        bookEl.innerHTML = `
            <div class = "card-header">
             <h3 class="title">${book.title}</h3>
             <h5 class="author">${book.author}</h5>
            </div>
            <div class="card-body">
            <p>${book.pages}</p>
            <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
            <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
            <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle</button>
            </div>
             `
             //test
        libraryEl.appendChild(bookEl); 
    }

}

function removeBook (index) {
    myLibrary.splice(index, 1); 
    render();
}   


//resi ovaj problem sa gitom










