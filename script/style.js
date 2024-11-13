
const endpoint =  "https://striveschool-api.herokuapp.com/books"
const bookList = document.getElementById("book-list")

const getbBook = function(){
    fetch(endpoint)

    .then((Response) => {
        console.log("Oggetto Response", Response)
        if(Response.ok){
            return Response.json()
        } else {
            throw new Error("La risposta del server non è ok")

        }
    })
    .then((bookObject) => {
        console.log(bookObject)
       
           
        
       
        bookObject.forEach((book) => {
        
        const colNew = document.createElement("div")
        colNew.classList.add("col", "col-12", "col-md-6", "col-lg-4")
        colNew.innerHTML =  `
        
        <div class="card h-100">
            <img src="${book.img}" class="card-img-top" alt=${book.title}>
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text"> Prezzo: €${book.price}</p>
              <button class="btn btn-primary" onclick="removeBook(event)">Scarta</button>
              <button class="btn btn-success">Compra ora</button>
            </div>
        </div>
        `
        const rowOne = document.getElementById("book-list")
      rowOne.appendChild(colNew)
        
    })
})
.catch((err) => {
   
    console.log(err)
 })
}
    getbBook()

const removeBook = function(e){
    e.target.closest(".card").classList.add("d-none")
}

