window.onload = () => {
  const bookingsPromise = fetch("https://striveschool-api.herokuapp.com/books")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const list = document.getElementById("bookingList")
    data.forEach(bookings => {
      list.innerHTML += `<li>${bookings.title} <button class="btn btn-outline-danger btn-sm">skip</button></li>`
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