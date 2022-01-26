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
        cards[i].innerHTML = `
        <div class="card mb-4 shadow-sm">
              <img src="${data.photos[i].src.small}" class="img-fluid card-img" alt="...">
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
        `
      }
    })
}
const loadImages = document.querySelector('.btn-primary')
loadImages.addEventListener('click', () => fetchPhotos('cat'))
const loadMoreImages = document.querySelector('.btn-secondary')
loadMoreImages.addEventListener('click', () => fetchPhotos('girl'))

const hideCard = event => event.target.closest('.card').remove()
