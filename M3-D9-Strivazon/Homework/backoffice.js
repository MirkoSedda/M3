const handleSubmit = event => {
  event.preventDefault()

  const name = document.getElementById('name').value
  const description = document.getElementById('description').value
  const brand = document.getElementById('brand').value
  const imageUrl = document.getElementById('imageUrl').value
  const price = document.getElementById('price').value

  const payload = {
    name,
    description,
    brand,
    imageUrl,
    price,
  }

  console.log(payload)
  fetch('https://striveschool-api.herokuapp.com/api/product/', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json',
      authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjY0ZTgyZWExZDAwMTViYjAzZWMiLCJpYXQiOjE2NDM4MDAxNDIsImV4cCI6MTY0NTAwOTc0Mn0.P9w7OXz4zve7wfC83LXdJteK6TsglIMohh94l3bqIiA',
    },
  })
  window.location.replace('/Homework/homepage.html')
}
