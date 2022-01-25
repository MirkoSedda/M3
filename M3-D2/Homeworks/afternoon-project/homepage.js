//https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem
//https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica
//https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth

//  <a href="">
//    <div class="card-container position-relative d-flex justify-content-center">
//      <img src="assets/playhoverbtn.png" class="playhover2" alt="" />
//      <div>
//        <img class="mt-3 img-card" src="assets/janis.png" alt="Card image cap" />
//        <div class="d-flex flex-column align-items-start p-0 mt-3 ml-1 justify-content-start">
//          <div class="card-title line-clamp2">Janis Joplin</div>
//          <p class="card-text mt-n2 line-clamp">Artist</p>
//        </div>
//      </div>
//    </div>
//  </a>

window.onload = () => {
  fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem', {})
    .then(res => res.json())
    .then(data => {
      console.log(data.data)

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
    })
    .catch(err => console.error(err))
}
