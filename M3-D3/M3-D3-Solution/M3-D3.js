const placeholderCard = `<div class="col">
<div class="card mb-4 shadow-sm">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: Thumbnail"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
          Thumbnail
        </text>
      </svg>
      <div class="card-body">
        <p class="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              View
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              Edit
            </button>
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>`

window.onload = () => {
  let grid = document.getElementById('myGrid')

  // generates exactly 12 cards with placeholders to pre-fill the page until a button is pressed
  for (let i = 0; i < 12; i++) {
    grid.innerHTML += placeholderCard
  }

  //EX3 Replace Edit with Hide btn
  grid
    .querySelectorAll('.btn.btn-outline-secondary:nth-child(2)') // finds the second button of type outline-secondary
    .forEach(btn => {
      btn.innerText = 'Hide' //changes the inner text
      btn.onclick = event =>
        // event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.remove(); // navigating upward in the dom tree to find the .col element and remove it
        event.currentTarget.closest('.col').remove() // modern approach: is going to find the closest element matching the condition
    })

  // EX 10, this function needs to be here, you can catch this up later
  attachModalToFirstBtns()
}

let loadImages = query => {
  fetch('https://api.pexels.com/v1/search?query=' + query, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer [YOUR API KEY]',
    },
  })
    .then(response => {
      return response.json()
    })
    .then(body => {
      let cards = document.getElementsByClassName('card')

      // Updates cards placeholder images with the images arriving from the fetch
      for (let i = 0; i < cards.length; i++) {
        cards[i].firstElementChild.remove() // removes svg
        let img = document.createElement('img') // creates img element
        img.src = body.photos[i].src.large // attaches images link from the API's response body, one by one
        // styling to make sure the image will be displayed correctly
        img.className = 'bd-placeholder-img card-img-top'
        img.style = 'height: 200px; object-fit: cover'

        //### BONUS on line 220, check this up later
        img.onclick = () => {
          searchByColor(body.photos[i].avg_color)
        }

        // that's when the new image gets added in the correct position, before other content (NOT appended at the bottom)
        cards[i].insertBefore(img, cards[i].firstChild) //adds the new image before other content

        // EX5 replaces the "9 min" text with the img id
        cards[i].querySelector('small').innerText = 'ID: ' + body.photos[i].id
      }
    })
}

let loadOtherImages = query => {
  let hasImage = document.querySelector('.card').querySelector('img')

  //we check for the existance of imgs instead of svgs because this function uses a different approach
  if (hasImage) {
    fetch('https://api.pexels.com/v1/search?query=' + query, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer [YOUR API KEY]',
      },
    })
      .then(response => {
        return response.json()
      })
      .then(body => {
        let cards = document.getElementsByClassName('card')
        for (let i = 0; i < cards.length; i++) {
          cards[i].firstElementChild.src = body.photos[i].src.large //switching the pre-existing image with a new image source
          cards[i].querySelector('small').innerText = 'ID: ' + body.photos[i].id
        }
      })
  } else {
    // if cards still have svg we need the first method to handle the change
    loadImages('sea') // the parameter "sea" changes the default value of query
  }
}

//Handles jumbotron search EX6

let searchQuery

const handleSearchQuery = e => {
  searchQuery = e.target.value.toLowerCase()
}

const searchImages = () => {
  let hasImage = document.querySelector('.card').querySelector('img')

  if (hasImage) {
    loadOtherImages(searchQuery)
  } else {
    loadImages(searchQuery)
  }
}

//EX10 handles MODAL
function attachModalToFirstBtns() {
  // executed in the window.onload at the top,
  // to be able to find elements with querySelectorAll AFTER they get created

  // grabbing the reference of each one of them
  document
    .querySelectorAll('.card .btn-group .btn:first-of-type')
    .forEach(btn => {
      // attaches an event listener to every button in the page that will execute the provided function when the event is triggered
      btn.onclick = e => {
        let cardImage = e.target.closest('.card').querySelector('img')
        // if a card image is existing we can proceed
        if (cardImage) {
          //attaching the required attributes to the button (e.target) to make the bootstrap modal work
          e.target.setAttribute('data-toggle', 'modal')
          e.target.setAttribute('data-target', '#exampleModal')

          let modal = document.querySelector('.modal') // modal element already existing in the HTML
          // creating a new image with the same src of the card image
          let image = document.createElement('img')
          image.src = cardImage.src

          image.className = 'img-fluid w-100'
          modal.querySelector('.modal-body').innerText = ''
          // attaching the new image in the modal to display it
          modal.querySelector('.modal-body').appendChild(image)
        } else {
          alert('Load images first')
        }
      }
    })
}

// just another way to handle the DOM after is being loaded
window.addEventListener('DOMContentLoaded', () => {
  //EVEN MORE EXTRAS (outcome in the console)
  fetch('https://api.pexels.com/v1/search?query=' + 'forest', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer [YOUR API KEY]',
    },
  })
    .then(response => {
      return response.json()
    })
    .then(body => {
      //EX11  (arrOfUrlStr is at the top of the file)
      const arrOfUrlStr = body.photos.map(image => image.src.medium)
      // map is returning a new array of elements returned by the callback function
      // thus arrOfUrlStr will be an array of images sources as url strings
      console.log('ARRAY OF URLS', arrOfUrlStr)

      //EX12

      let filteredArtists = body.photos.filter(
        pic =>
          pic.photographer.includes('Brandon') ||
          pic.photographer.includes('Felix')
      )
      console.log('FILTERED ARTISTS', filteredArtists)

      //EX13
      let reducedIds = body.photos.reduce(
        (acc, curr) => acc + parseInt(curr.id),
        0
      )
      console.log('SUMMED IDs WITH REDUCE', reducedIds)
    })
})

//### BONUS not required by the homework (check line 94)
// the API are supporting search by color, try to click on an image and you'll call this function by passing the average color as parameter
// or you could call searchByColor from the console and pass your favourite color and see what you get back!
const searchByColor = color => {
  fetch(
    'https://api.pexels.com/v1/search?query=computer&color=' +
      color.split('#')[1],
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer [YOUR API KEY]',
      },
    }
  )
    .then(response => {
      return response.json()
    })
    .then(body => {
      let cards = document.querySelectorAll('.card')

      cards.forEach((card, i) => {
        card.firstElementChild.src = body.photos[i].src.large //switching the pre-existing image with a new image source
      })
    })
}
