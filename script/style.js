document.addEventListener("DOMContentLoaded", () => {
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
       
           
        

        bookObject.forEach(book => {

        const col = document.createElement("div")
        col.className.add("cols-1 cols-md-3 g-4")
        col.innerHTML =  `
        <div class="col">
        <div class="card">
            <img src=""https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg"" class="card-img-top" alt=${book.title}>
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text"> Prezzo: €${book.price}</p>
              <a href="#" class="btn btn-primary">Scarta</a>
              <a href="#" class="btn btn-success">Compra ora</a>
            </div>
        </div>
        `


        const card = document.createElement("div")
        card.className = "card h-100"

        const img = document.createElement("img")
        img.src ="https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg"
        img.className = ("card-body")
        img.alt = `${book.title}`
        card.appendChild(img)

        const cardBody = document.createElement("div")
        cardBody.className = "card-body"

        const cardTitle = document.createElement("h5")
        cardTitle.className = "card-title"
        cardTitle.textContent = `${book.title}`
        cardBody.appendChild(cardTitle)


        const cardText = document.createElement("p")
        cardText.className = "card-text"
        cardText.textContent = `Prezzo: €${book.price}`
        cardBody.appendChild(cardText)

        const scartaBtn = document.createElement("button")
        scartaBtn.className = "btn btn-danger me-2"
        scartaBtn.textContent = "Scarta"
        scartaBtn.onclick = function(){
            col.remove()
        }
        cardBody.appendChild(scartaBtn)


        const compraBtn = document.createElement("button")
        compraBtn.className = "btn btn-success"
        compraBtn.textContent = "Compra ora"
        cardBody.appendChild(compraBtn)

        


        card.appendChild(cardBody)
        col.appendChild(card)
        bookList.appendChild(col)
    })
})
.catch((err) => {
    alert("Errore")
    console.log(err)
 })
}
    getbBook()


})
