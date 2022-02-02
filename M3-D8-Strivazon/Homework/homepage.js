const getData = () => {
  fetch('https://striveschool-api.herokuapp.com/api/product/', {
    headers: {
      'content-type': 'application/json',
      authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjY0ZTgyZWExZDAwMTViYjAzZWMiLCJpYXQiOjE2NDM4MDAxNDIsImV4cCI6MTY0NTAwOTc0Mn0.P9w7OXz4zve7wfC83LXdJteK6TsglIMohh94l3bqIiA',
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)

      data.map(x => {
        const app = document.querySelector('.app')

        app.innerHTML += `<ul class='list-group'>
      <li class="list-group-item"><b>Name: </b> ${x.name}</li>
      <li class="list-group-item"><b>Description: </b> ${x.description}</li>
      <li class="list-group-item"><b>Brand: </b> ${x.brand}</li>
      <li class="list-group-item"><b>Price: </b> ${x.price}</li>
    </ul>`
      })
    })
}

window.onload = () => {
  getData()
}
