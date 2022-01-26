const API_KEY = "563492ad6f91700001000001363eaa0a99bb4e3ba880c0b812a5c8e6";

const fetchPhotos = (query) => {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: { Authorization: `${API_KEY}` },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      replaceImages(data);
      loadImagesToCarousel(data);
    })
    .catch((error) => {
      alert(error);
    });
};

const replaceImages = function (data) {
  /* const imgs = document.querySelectorAll("svg");
  for (let i = 1; i < imgs.length; i++) {
    imgs[i].classList.add("d-none");
  } */

  const cols = document.querySelectorAll(".col-md-4");

  for (let i = 0; i < cols.length; i++) {
    cols[i].innerHTML = `<div class="card mb-4 shadow-sm">
                <img src="${data.photos[i].src.small}" class="" height="200"  alt="...">
                 
                <div class="card-body">
                  <p class="card-text">
                    ${data.photos[i].alt}
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
                        onclick="removeMe(event)"
                      >
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">ID: ${data.photos[i].id}</small>
                  </div>
                </div>
              </div>
    `;
  }

  showAlert(cols.length + " cards loaded");
};

const removeMe = function (event) {
  const searchQuery = event.target.closest(".card").remove();
  searchQuery;
};

const searchImages = function () {
  console.log(document.getElementById("input-search").value.toLowerCase());
  return document.getElementById("input-search").value.toLowerCase();
};

const showAlert = function (message) {
  let alert = document.getElementById("alert-message");
  alert.classList.remove("d-none");
  alert.innerText = message;

  setTimeout(() => alert.classList.add("d-none"), 3000);
};

const loadImagesToCarousel = function(data) {
  let imagesInCarousel = document.querySelectorAll(".carousel-inner > div > img");
  console.log(imagesInCarousel);
  for (i=0; i<imagesInCarousel.length; i++) {
    imagesInCarousel[i].src = data.photos[i].src.large;
    imagesInCarousel[i].classList.add("card-img");
    imagesInCarousel[i].classList.add("img-fluid");
    imagesInCarousel[i].style.height = "350px";
  }
}

const buttonPrimary = document.querySelector(".btn-primary");
const buttonSecondary = document.querySelector(".btn-secondary");
const searchButton = document.getElementById("button-search");

buttonPrimary.addEventListener("click", () => fetchPhotos("cat"));
buttonSecondary.addEventListener("click", () => fetchPhotos("dog"));
searchButton.addEventListener("click", () => fetchPhotos(searchImages()));

window.onload = function () {};
