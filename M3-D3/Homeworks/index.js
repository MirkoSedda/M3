const API_KEY = '563492ad6f91700001000001363eaa0a99bb4e3ba880c0b812a5c8e6'

const fetchPhotos = query => {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: { Authorization: `${API_KEY}` },
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      replaceImages(data)
      loadImagesToCarousel(data)
      //consoleLogUrls(data)
      filteredAuthors(data)
      console.log(filteredAuthors(data))
    })
    .catch(error => {
      showAlert(`Sorry, something went wrong: ${error}`)
    })
}

const consoleLogUrls = data => data.photos.map(obj => console.log(obj.url))
const filteredAuthors = data =>
  data.photos.filter(obj => obj.photographer === 'Helena Lopes')

//Use the .filter() method to modify the result of the API call. Keep only the images from a specific author of your choice.
const replaceImages = function (data) {
  const cols = document.querySelectorAll('.col-md-4')

  for (let i = 0; i < cols.length; i++) {
    cols[i].innerHTML = `<div class="card mb-4 shadow-sm">
                <img src="${data.photos[i].src.large}" class="img-cardd" height="200"  alt="...">
                 
                <div class="card-body">
                  <p class="card-text">
                    ${data.photos[i].alt}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        id="myBtn"
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        onclick = 'modalFunc(event)'
                      >
                        View
                        
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        onclick="removeMe(event)"
                      >
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">ID: ${data.photos[i].id}</small>
                  </div>
                </div>
              </div>
    `
  }

  showAlert(cols.length + ' cards loaded')
}

const removeMe = event => event.target.closest('.card').remove()

const searchImages = () => {
  console.log(document.getElementById('input-search').value.toLowerCase())
  return document.getElementById('input-search').value.toLowerCase()
}

const showAlert = message => {
  let alert = document.getElementById('alert-message')
  alert.classList.remove('d-none')
  alert.innerText = message
  setTimeout(() => alert.classList.add('d-none'), 3000)
}

const loadImagesToCarousel = data => {
  let imagesInCarousel = document.querySelectorAll(
    '.carousel-inner > div > img'
  )
  for (i = 0; i < imagesInCarousel.length; i++) {
    imagesInCarousel[i].src = data.photos[i].src.large
    imagesInCarousel[i].classList.add('card-img')
    imagesInCarousel[i].classList.add('img-fluid')
    imagesInCarousel[i].style.height = '350px'
  }
}

const buttonPrimary = document.querySelector('.btn-primary')
const buttonSecondary = document.querySelector('.btn-secondary')
const searchButton = document.getElementById('button-search')

buttonPrimary.addEventListener('click', () => fetchPhotos('cat'))
buttonSecondary.addEventListener('click', () => fetchPhotos('dog'))
searchButton.addEventListener('click', () => fetchPhotos(searchImages()))

const modal = document.getElementById('myModal')
const btn = document.getElementById('myBtn')

const modalFunc = data => {
  const cardEvent =
    data.target.parentNode.parentNode.parentNode.parentNode.children[0]

  const imgSrc = cardEvent.getAttribute('src')
  console.log(imgSrc)

  modal.innerHTML = `
  
    <div class="modal-content index">
      <img src="${imgSrc}" />
    </div>
    
   `

  modal.style.display = 'block'
}

window.onclick = event => {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

// <!-- Modal -->
// <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
// <div class="modal-dialog">
// <div class="modal-content">
// <div class="modal-header">
// <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
// <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
// </div>
// <div class="modal-body">
// <img src="${imgSrc}" />
// </div>
// <div class="modal-footer">
// <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
// <button type="button" class="btn btn-primary">Save changes</button>
// </div>
// </div>
// </div>
// </div>

{
  /* <button
  type="button"
  class="btn btn-sm btn-outline-secondary"
  onclick="modalFunc(event)"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
>
  View
</button> */
}
