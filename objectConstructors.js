let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener('click', function() {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";  
    addBookToLibrary();
       
})

function addBookToLibrary() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages,read);
    myLibrary.push(newBook);
    
}

document.querySelector("#new-book-form").addEventListener("submit", function(){
    event.preventDefault();
    addBookToLibrary();
    displayBooks();
    document.querySelector("#title").value = ""
    document.querySelector("#author").value = ""
    document.querySelector("#pages").value = ""
    document.querySelector("#read").checked = false;
})

function displayBooks(){
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";
    for(let i = 1;i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", ".book-card");
        bookEl.innerHTML = `
        <div>
        <p class="title">${book.title}</p>
        <p class="author">${book.author}</p>
        <p class="pages">${book.pages}</p>
        <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
        <button class="remove-btn">Remove</button>
        <button class="toggle-read-btn">Toggle</button>
        </div>
         `;

         let removeBtn = bookEl.querySelector(".remove-btn");
         removeBtn.addEventListener("click", function () {
         removeBook(i);
    });

         let toggleReadBtn = bookEl.querySelector(".toggle-read-btn");
         toggleReadBtn.addEventListener("click", function () {
         toggleRead(i);
    });
        libraryEl.appendChild(bookEl); 
    }  
    
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
   
  }

  function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
    
  }

  










