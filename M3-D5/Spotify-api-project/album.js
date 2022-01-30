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

const id = new URLSearchParams(window.location.search).get('albumId')
fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + id)
  .then(response => response.json())
  .then(data => {
    console.log(data)

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

    const artistNameContainer = document.querySelector('.artist-name-container')
    const songsList = document.querySelector('.songs-list')

    artistNameContainer.innerHTML = `
                  <img class="img-fluid d-inline-flex" width="200px" src="${
                    data.artist.picture_medium
                  }" alt="${data.title}">
                  <div class="ml-3">
                    <h6 class="albumWord">ALBUM</h6>
                    <h2 class="albumTitle ">${data.title}</h2>
                    <h6>
                      <img class="rounded-circle img-fluid bandLogo" src="${
                        data.artist.picture_medium
                      }" alt="${data.title}">
                      <span class="text-muted infoAlbum"> <a href="./artist.html?artistId=${
                        data.artist.id
                      }"><span class="text-white">${
      data.artist.name
    }</span></a> · ${data.release_date.slice(0, 4)} · ${
      data.tracks.data.length
    } tracks · ${time(data.duration)}</span>
                    </h6>
                  </div>
          `
    data.tracks.data.map((track, i) => {
      songsList.innerHTML += `
            <div class="pl-2 song d-flex justify-content-between">
              <div class="d-flex">
                <span class="listNumber">${i + 1}</span>
                <p class="pl-3 text-white">
                  ${track.title}<br />
                  <span class="text-muted text-white"><a href="./artist.html?artistId=${
                    data.artist.id
                  }" class="text-muted text-white">${
        data.artist.name
      }</a></span>
                </p>
              </div>
              <div>
                <i class="bi bi-heart hidden heartSong"></i>
                <span class="text-muted px-3">${time(track.duration)}</span>
                <i class="bi bi-three-dots hidden threeDotsSong"></i>
              </div>
            </div>
    `
    })
  })
  .catch(e => console.log(e))

// const header = `<h1>${data.title}</h1>
//                          <a href="./artist.html?artistId=${data.artist.id}"> <h5>${data.artist.name}</h5></a>
//         `;
