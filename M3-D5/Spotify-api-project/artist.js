const mouseoverSong = function () {
  songNode = document.getElementsByClassName('song')
  numNode = document.getElementsByClassName('listNumber')
  heartNode = document.getElementsByClassName('heartSong')
  threeDotsNode = document.getElementsByClassName('threeDotsSong')
  for (let i = 0; i < songNode.length; i++) {
    songNode[i].addEventListener('mouseover', function (e) {
      songNode[i].classList.add('highLighting')
      numNode[i].innerText = ' '
      numNode[i].classList.add('listPlay')
      heartNode[i].classList.remove('hidden')
      threeDotsNode[i].classList.remove('hidden')
    })
    songNode[i].addEventListener('mouseleave', function (e) {
      songNode[i].classList.toggle('highLighting')
      numNode[i].innerText = i + 1
      numNode[i].classList.toggle('listPlay')
      heartNode[i].classList.add('hidden')
      threeDotsNode[i].classList.add('hidden')
    })
  }
}
mouseoverSong()

const id = new URLSearchParams(window.location.search).get('artistId')
fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/' + id)
  .then(response => response.json())
  .then(
    (_artistData = artistData => {
      console.log(artistData)

      const artistNameContainer = document.querySelector(
        '.artist-name-container'
      )
      artistNameContainer.style.backgroundImage = `url(${artistData.picture_big})`

      const numberWithCommas = x =>
        x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

      artistNameContainer.innerHTML = `
      <div class="position-absolute artist-name">
      <p class="mb-0">
      <i class="bi bi-patch-check-fill pr-2"></i>Verified Artist
      </p>
      <h1>${artistData.name}</h1>
      <p>${numberWithCommas(artistData.nb_fan)} monthly listeners</p>
      </div>
      
      `
    })
  )

fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    const songsContainer = document.querySelector('.songsContainer')
    const songs = data.data
    function time(duration) {
      // Hours, minutes and seconds
      var hrs = ~~(duration / 3600)
      var mins = ~~((duration % 3600) / 60)
      var secs = ~~duration % 60
      // Output like "1:01" or "4:03:59" or "123:03:59"
      var ret = ''
      if (hrs > 0) {
        ret += '' + hrs + ':' + (mins < 10 ? '0' : '')
      }
      ret += '' + mins + ':' + (secs < 10 ? '0' : '')
      ret += '' + secs
      return ret
    }

    const numberWithCommas = () =>
      Math.floor(Math.random() * 10000000)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    songs.map((song, i) => {
      console.log(song.album)
      songsContainer.innerHTML += `
        <div class="row song mt-3">
          <div class="col-md-6 d-flex align-items-center">
            <span class="listNumber text-muted">${i + 1}</span>
            <img src="${song.album.cover_small}" alt="" class="ml-2" />
            <p class="pl-3 m-0 text-white">
              ${song.album.title} <br />
            </p>
          </div>
          <div class="col-md-3 d-flex justify-content-center align-items-center">
            <div>
              <span class="text-muted text-right">${numberWithCommas()}</span>
            </div>
          </div>
          <div class="col-md-3 d-flex align-items-center">
            <i class="bi bi-heart hidden heartSong pr-1"></i>
            <span class="text-muted time px-3">${time(song.duration)}</span>
            <i class="bi bi-three-dots hidden threeDotsSong text-muted"></i>
          </div>
        </div>      
          `
    })
  })
  .catch(e => console.log(e))
