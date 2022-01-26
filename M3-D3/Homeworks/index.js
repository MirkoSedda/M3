const API_KEY = '563492ad6f91700001000001363eaa0a99bb4e3ba880c0b812a5c8e6'

const fetchPhotos = query => {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: { Authorization: `${API_KEY}` },
  })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const imgs = document.querySelectorAll('svg')
      for (let i = 1; i < imgs.length; i++) {
        imgs[i].classList.add('d-none')
      }
      const cards = document.querySelectorAll('.card')
      for (let i = 0; i < cards.length; i++) {
        let newImg = document.createElement('img')
        newImg.src = data.photos[i].src.small
        newImg.classList.add('img-fluid')
        newImg.style.height = '250px'
        cards[i].prepend(newImg)
      }
    })
}
fetchPhotos('cat')
