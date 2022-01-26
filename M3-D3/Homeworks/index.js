const API_KEY = ''

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
        newImg.src = data.photos[i].url
        newImg.classList.add('card-img-top')
        cards[i].prepend(newImg)
      }
    })
}
fetchPhotos('cat')
