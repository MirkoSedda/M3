window.onload = () => {
  fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem', {})
    .then(res => res.json())
    .then(data => {
      const songs = () => {
        const song = data.data
        const eminemContainer = document.querySelector('.eminem-container')
        for (let i = 0; i < 9; i++) {
          eminemContainer.innerHTML += `
          <a href="">
          <div class="card-container position-relative d-flex justify-content-center">
          <img src="${song[i].album.cover}" class="playhover2" alt="" />
          <div>
          <img class="mt-3 img-card" src="${song[i].album.cover}" alt="Card image cap" />
          <div class="d-flex flex-column align-items-start p-0 mt-3 ml-1 justify-content-start">
          <div class="card-title line-clamp2">${song[i].title_short}</div>
          <p class="card-text mt-n2 line-clamp">${song[i].artist.name}</p>
          </div>
          </div>
          </div>
          </a>
          `
        }
      }
      songs()

      showTitles = () => {
        const innerModal = document.querySelector('.modal-body')
        console.log(innerModal)
        const song = data.data
        for (let i = 0; i < song.length; i++) {
          innerModal.innerHTML += `<span> ${song[i].title_short} <br></span>`
        }
      }
      showTitles()

      removeDoubles = () => {
        const song = data.data
        let filteredTitles = []
        for (let i = 0; i < song.length; i++) {
          if (!filteredTitles.includes(song[i].title_short)) {
            filteredTitles.push(song[i].title_short)
          }
        }
        console.log(filteredTitles.length)
      }
      removeDoubles()
    })
    .catch(err => console.error(err))
}
