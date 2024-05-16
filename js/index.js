document.addEventListener("DOMContentLoaded", function() {
    getBooks()

function getBooks(){
    fetch("http://localhost:3000/books")
    .then(response => response.json())
    .then(response => response.forEach(book => addBookToDom(book)))
    }

function addBookToDom(book){
        const listUl = document.getElementById("list")
        const li = document.createElement("li")
            li.id = book.id
            li.textContent = book.title
            li.addEventListener("click", (e) => showBookDetails(e, book))
            listUl.append(li)
    }
function showBookDetails(e, book){
    e.preventDefault();
    //  thumbnail, description, and a list of users who have liked the book
    const showPanel = document.getElementById("show-panel");
        showPanel.innerHTML = '';
    const image = document.createElement("img");
        image.src = book.img_url
    const titleH1 = document.createElement("h1");
        titleH1.textContent = book.title
    const descriptionP = document.createElement("p");
        descriptionP.textContent = book.description
    const userUl = document.createElement("ul");
    book.users.forEach(user => {
        const userLi =document.createElement("li");
        userLi.textContent = user.username
        userUl.append(userLi)
    })

    showPanel.append(image, titleH1, descriptionP, userUl)
}
});
