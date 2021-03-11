window.onload = () => {
  const bookingsPromise = fetch("https://striveschool-api.herokuapp.com/books")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const books = document.getElementById("bookList")
    data.forEach(bookData => {
      books.innerHTML += `<div class="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div class="card">
          <img src="${bookData.img}" class="card-img-top" alt="${bookData.title}">
          <div class="card-body">
            <h5 class="card-title book-title">${bookData.title}</h5>
            <p  class="card-text category">${bookData.category}</p>
            <p  class="card-text price">${bookData.price}</p>
            <p  class="card-text asin-number">${bookData.asin}</p>
            <a href="#" class="btn btn-danger">Skip</a>
          </div>
        </div>
      </div>`
      /* const listItem =document.createElement("li")
      const textNode = document.createTextNode(bookings.title)
      listItem.appendChild(textNode)
      list.appendChild(listItem) */
    })
  })
}

/* const loadData = () => {
      console.log('click')
      fetch("http://slowwly.robertomurray.co.uk/delay/5000/url/https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => { // EXTRACT THE USERS FROM THE RESPONSE BODY
        console.log(users)
        const list = document.getElementById("myStuff")
        users.forEach(user => {
          const listElement = document.createElement("li")
          const textNode = document.createTextNode(user.name)
          listElement.appendChild(textNode)
          list.appendChild(listElement)


        })
      })
    } */