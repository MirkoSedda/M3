
  const generateUser = () => {
    const row = document.querySelector('.row')
    for (let i = 0; i < 21; i++) {
      fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
          console.log(data)

          const col = document.createElement('div')
          col.classList.add('col')
          console.log(data.results.length)
          console.log(col)

          col.innerHTML = `
          <div class="card" style="width: 18rem">
        <img
        src="${data.results[0].picture.large}"
        class="card-img-top"
        alt="..."
        />
        <div class="card-body">
        <h5 class="card-title">${data.results[0].name.first}</h5>
        <h5 class="card-title">${data.results[0].name.last}</h5>
        <h5 class="card-title">${data.results[0].email}</h5>
        </div>
        </div>
        `
          row.appendChild(col)
        })
    }
  }
  generateUser()
