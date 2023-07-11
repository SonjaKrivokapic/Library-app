class Book {
    constructor(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    }
}

class Library {
    constructor() {
        this.myLibrary = [];
    }
    addBookToLibrary() {
        const title = document.querySelector("#title").value;
        const author = document.querySelector("#author").value;
        const pages = document.querySelector("#pages").value;
        const read = document.querySelector("#read").checked;
        let newBook = new Book(title, author, pages,read);
        this.myLibrary.push(newBook);
        
    }

    displayBooks(){
        let libraryEl = document.querySelector("#library");
        libraryEl.innerHTML = "";
        for(let i = 1;i < this.myLibrary.length; i++){
            let book = this.myLibrary[i];
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
             removeBtn.addEventListener("click", () => {
             this.removeBook(i);
        });
    
             let toggleReadBtn = bookEl.querySelector(".toggle-read-btn");
             toggleReadBtn.addEventListener("click", () => {
             this.toggleRead(i);
        });
            libraryEl.appendChild(bookEl); 
        }  
        
    }
    
    removeBook(index) {
        this.myLibrary.splice(index, 1);
        this.displayBooks();
       
      }
    
    toggleRead(index) {
        this.myLibrary[index].read = !this.myLibrary[index].read;
        this.displayBooks();
        
      }
    
    }


let newBookBtn = document.querySelector("#new-book-btn");

newBookBtn.addEventListener('click', () => {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";  
    library.addBookToLibrary();
       
})



document.querySelector("#new-book-form").addEventListener("submit", (event) => {
    event.preventDefault();
    library.addBookToLibrary();
    library.displayBooks();
    document.querySelector("#title").value = ""
    document.querySelector("#author").value = ""
    document.querySelector("#pages").value = ""
    document.querySelector("#read").checked = false;
});



const library = new Library();






