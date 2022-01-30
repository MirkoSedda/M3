const placeholderCard = `<div class="col">
<div class="card mb-4 shadow-sm">
      <svg
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: Thumbnail"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
          Thumbnail
        </text>
      </svg>
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
  </div>`;

window.onload = () => {
  let grid = document.getElementById("myGrid");
  // generates exactly 12 cards with placeholders to pre-fill the page untill a button is pressed
  for (let i = 0; i < 12; i++) {
    grid.innerHTML += placeholderCard;
  }

  // EX3 Replace Edit with Hide btn
  // finds the second button of type outline-secondary
  const secondBtns = grid.querySelectorAll(
    ".btn.btn-outline-secondary:nth-child(2)"
  );

  for (let i = 0; i < secondBtns.length; i++) {
    const currentBtn = secondBtns[i];

    currentBtn.innerText = "Hide"; //changes the inner text of each button
    currentBtn.onclick = function (event) {
      // event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.remove(); // navigating upward in the dom tree to find the .col element and remove it
      event.currentTarget.closest(".col").remove(); // modern approach: is going to find the closest element matching the condition
    };
  }

  // EX10, this function needs to be here, you can catch this up later
  attachModalToFirstBtns();
};

let loadImages = (query) => {
  fetch("https://api.pexels.com/v1/search?query=" + query, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer [YOUR API KEY]",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      let cards = document.getElementsByClassName("card");

      // Updates cards placeholder images with the images arriving from the fetch
      for (let i = 0; i < cards.length; i++) {
        cards[i].firstElementChild.remove(); //removes svg
        let img = document.createElement("img"); // creates img element
        img.src = body.photos[i].src.large; // attaches images link from the API's response body, one by one
        // styling to make sure the image will be displayed correctly
        img.className = "bd-placeholder-img card-img-top";
        img.style = "height: 200px; object-fit: cover";

        // that's when the new image gets added in the correct position, before other content (NOT appended at the bottom)
        cards[i].insertBefore(img, cards[i].firstChild);

        // EX5 replaces the "9 min" text with the img id
        cards[i].querySelector("small").innerText = "ID: " + body.photos[i].id;
      }
    });
};

let loadOtherImages = (query) => {
  let hasImage = document.querySelector(".card").querySelector("img");

  //Firstly we have to check the pre-existance of imgs instead of placeholder's svgs,
  // cause we use a different approach here to display the data in the last .then()
  if (hasImage) {
    fetch("https://api.pexels.com/v1/search?query=" + query, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer [YOUR API KEY]",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        let cards = document.getElementsByClassName("card");
        for (let i = 0; i < cards.length; i++) {
          cards[i].firstElementChild.src = body.photos[i].src.large; //switching the pre-existing image with a new image source
          cards[i].querySelector("small").innerText =
            "ID: " + body.photos[i].id;
        }
      });
  } else {
    // if cards still have an SVG placeholder we'll fall into this condition and we'll need to use the first method to handle the change

    // this conditional makes sure we handle correctly both possible scenarios of clicking the "load secondary image" button
    // either before or after the initial placeholder SVGs are replaced

    loadImages("sea"); // the parameter "sea" will be the new query for the endpoint of the HTTP request
  }
};

// EX6 Handles jumbotron's search input

// outer variable that will be filled with the string of the input when
// handleSearchQuery gets called by the input event listener
let searchQuery;

// the outer variable will be accessible by the searchImages function to pass it as a parameter

const handleSearchQuery = (e) => {
  searchQuery = e.target.value.toLowerCase();
};

const searchImages = () => {
  let hasImage = document.querySelector(".card").querySelector("img");

  if (hasImage) {
    loadOtherImages(searchQuery);
  } else {
    loadImages(searchQuery);
  }
};

function attachModalToFirstBtns() {
  // EX10 handles MODAL

  // handling the first button of the card

  // grabbing the reference of each one of them
  const firstBtns = document.querySelectorAll(
    ".card .btn-group .btn:first-of-type"
  );

  for (let i = 0; i < firstBtns.length; i++) {
    const currentBtn = firstBtns[i];

    // attaches an event listener to every button in the page that will execute the provided function when the event is triggered
    currentBtn.onclick = function (e) {
      // climbing the DOM tree from the event.target element upward, getting the closest ".card" parent reference,
      // then looking for an element of tag "img" inside of card, receiving the reference as value of cardImage
      let cardImage = e.target.closest(".card").querySelector("img");

      //OR:

      // e.target.parentNode.parentNode.parentNode.parentNode.getElementsByTagName(
      //   "img"
      // )[0]; // finding the image node navigating the node tree

      // OR:
      // e.target.closest(".card").children[0];
      // OR:
      // e.target.closest(".card").firstElementChild;

      // if a card image is existing we can proceed
      if (cardImage) {
        //attaching the required attributes to the button (e.target) to make the bootstrap modal work
        e.target.setAttribute("data-toggle", "modal");
        e.target.setAttribute("data-target", "#exampleModal");

        let modal = document.querySelector(".modal"); // modal element already existing in the HTML
        // creating a new image with the same src of the card image
        let image = document.createElement("img");
        image.src = cardImage.src;

        image.className = "img-fluid w-100";
        modal.querySelector(".modal-body").innerText = "";
        // attaching the new image in the modal to display it
        modal.querySelector(".modal-body").appendChild(image);
      } else {
        // error, need images in the page. click on the button first
        alert("click on 'Load images' first");
      }
    };
  }
}

let arrOfUrlStr = [];

// just another way to handle the DOM after it's being loaded
window.addEventListener("DOMContentLoaded", () => {
  //EVEN MORE EXTRAS (outcome in the console)
  fetch("https://api.pexels.com/v1/search?query=" + "forest", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer [YOUR API KEY]",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      //EX11  (arrOfUrlStr is at the top of the file)

      for (let i = 0; i < body.photos.length; i++) {
        const currentImage = body.photos[i];

        // arrOfUrlStr variable created at the top of this file
        arrOfUrlStr.push(currentImage.src.medium);
      }
      console.log("ARRAY OF URLS", arrOfUrlStr);

      //EX12
      let filteredArtists = [];

      for (let i = 0; i < body.photos.length; i++) {
        const currentImage = body.photos[i];

        const words = currentImage.photographer.split(" ");
        for (let j = 0; j < words.length; j++) {
          const word = words[j].toLowerCase();

          const isBrandonOrFelix = word === "brandon" || word === "felix";

          if (isBrandonOrFelix) {
            // if either brandon or felix is found in the photographer name
            // we are pushing that object in the new filteredArtist array
            filteredArtists.push(currentImage);
          }
        }
      }
      console.log("FILTERED ARTISTS", filteredArtists);

      //EX13
      let summedIds = 0;
      for (let i = 0; i < body.photos.length; i++) {
        let currentId = body.photos[i].id;
        summedIds += currentId;
      }
      console.log("SUMMED IDs WITH LOOP", summedIds);
    });
});
