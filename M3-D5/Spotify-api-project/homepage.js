window.onload = () => {
  fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem', {})
    .then(res => res.json())
    .then(data => {
      const songs = data.data
      const eminemContainer = document.querySelector('.eminem-container')

      songs.map(song => {
        console.log(song.album.id)
        eminemContainer.innerHTML += `
          <a href="./album.html?albumId=${song.album.id}">
          <div class="card-container position-relative d-flex justify-content-center">
          <img src="${song.album.cover}" class="playhover2" alt="" />
          <div>
          <img class="mt-3 img-card" src="${song.album.cover}" alt="Card image cap" />
          <div class="d-flex flex-column align-items-start p-0 mt-3 ml-1 justify-content-start">
          <div class="card-title line-clamp2">${song.title_short}</div>
          <p class="card-text mt-n2 line-clamp">${song.artist.name}</p>
          </div>
          </div>
          </div>
          </a>
          `
      })
    })
    .catch(e => console.log(e))
}
