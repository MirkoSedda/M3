const getData = async () => {
  try {
    const fetchAPI = await fetch(
      'https://striveschool-api.herokuapp.com/api/product/',
      {
        headers: {
          'content-type': 'application/json',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjY0ZTgyZWExZDAwMTViYjAzZWMiLCJpYXQiOjE2NDM4MDAxNDIsImV4cCI6MTY0NTAwOTc0Mn0.P9w7OXz4zve7wfC83LXdJteK6TsglIMohh94l3bqIiA',
        },
      }
    )
    const response = await fetchAPI
    const data = await response.json()
    console.log(data)
    generateCard(data)
  } catch (error) {
    console.log(error)
  }
}

const generateCard = data => {
  const app = document.querySelector('.app')
  data.map(x => {
    app.innerHTML += `
    <div class="container card d-flex justify-content-center align-items-center m-3">
    <div class="d-flex flex-row justify-content-between p-3" id = ${x._id}>
    <div class="p-0">
    <li class="list-group-item"><b>Name: </b> ${x.name}</li>
    <li class="list-group-item">
    <b>Description: </b> ${x.description}
    </li>
    <li class="list-group-item"><b>Image: </b> ${x.imageUrl}</li>
    <li class="list-group-item"><b>Brand: </b> ${x.brand}</li>
    <li class="list-group-item"><b>Price: </b> ${x.price}</li>
    </div>
    <div class=" d-flex justify-content-center align-items-center p-0">
    <i class="bi bi-pencil-fill m-2"></i>
    <i class="bi bi-trash3-fill m-2" onclick="deleteCards(event)"></i>
    </div>
    </div>
    </div>
    `
  })

  const pencil = document.querySelector('.bi-pencil-fill')
  const bins = document.querySelectorAll('.bi-trash3-fill')

  deleteCards = event => {
    let id = event.target.parentNode.parentNode.id
    fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
      method: 'DELETE',

      headers: {
        'content-type': 'application/json',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjY0ZTgyZWExZDAwMTViYjAzZWMiLCJpYXQiOjE2NDM4MDAxNDIsImV4cCI6MTY0NTAwOTc0Mn0.P9w7OXz4zve7wfC83LXdJteK6TsglIMohh94l3bqIiA',
      },
    })
      .then(response => response.json())
      .then(getData)
      .catch(err => console.error(err))

    console.log(id)
    event.target.closest('.container').remove()
  }
}

window.onload = () => {
  getData()
}
