/*1.Get all products from the API: https://striveschool-api.herokuapp.com/books
2. Display all the books using template literals and .forEach()
3. Add an add to cart button into each item
4. When this button is pressed: 1) add the item to another list (the cart), and 2) change the card styling to show that the element is in the cart (eg. red border, a badge, an icon… you choose)
5. Add a skip button inside each card
6. When pressed, this button should remove that book element from the page
7. Add a search bar. When the user types more than 3 characters, filter the content of the API response to only display the books with a matching (or partially matching) title (hint: use .filter())
8. Allow users to delete books from their cart
9. Count the cart items using a .reduce() method and display the result somewhere in the cart
EXTRAS:
1. Add a empty cart button, to delete the whole list
2. Create a detail page: when the user clicks on a book, they get redirected to another page. Pass the ASIN as a query string.
3. In the detail page, show the details of the book matching the ASIN in the query string: use this endpoint: https://striveschool-api.herokuapp.com/books/your_id_here */

const booksWrapper = document.querySelector('#books-wrapper')
const shoppingCart = document.querySelector('#shopping-cart')

window.onload = () => {
  loadBooks()
}

//smart components - before using the data on the UI, it gets pushed in the arrays separating smart and ui components!

let books = []

let shoppingCartList = []

let filteredBooks = []

function loadBooks() {
  fetch('https://striveschool-api.herokuapp.com/books')
    .then(res => res.json())
    .then(_books => {
      books = _books // the fetched _books gets assigned to the global books variable!
      console.log(books)
      displayBooks()
    })
    .catch(err => console.error(err.message))
}

//ui component

function displayBooks(_books = books) {
  // we are again assigning the _books data to books as a default parameter
  booksWrapper.innerHTML = '' // if displayBooks already contains the books, we prime it to receive the filtered books!

  _books.forEach(book => {
    booksWrapper.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <div class="card">
                <img src="${book.img}" class="img-fluid card-img-top" alt="${
      book.title
    }">
                <div class="card-body">
                  <h5 class="card-title">${book.title}</h5>
                  <p class="card-text">${book.category}</p>
                  <button class="btn btn-primary" onclick="addToCart('${String(
                    // the book asin get fetched as a num and needs to be always casted as a string!
                    book.asin
                  )}', this)">$${book.price}</button>
                  <button class="btn btn-warning" onclick="this.closest('.col-12').remove()"> this === btn which select the parent card..so cool!
                    Skip me
                  </button>
                </div>
              </div>
            </div>
          `
  })
}

//smart component

function addToCart(asin, element) {
  console.log(asin)
  // const book = books.filter( book => book.asin === asin)[0]
  const book = books.find(book => book.asin == asin)
  shoppingCartList.push(book) // after the single book is found, its pushed to the cart
  console.log(shoppingCartList)

  refreshShoppingCart() // we need to refresh the cart after whe remove a book from it

  element.closest('.card').classList.add('selected') // add the class selected, interesting use of the closest method again with querySelectors!
}

//ui component

function refreshShoppingCart() {
  shoppingCart.innerHTML = '' // the shopping cart get primed before getting the books the user selects

  shoppingCartList.forEach(book => {
    shoppingCart.innerHTML += `
            <div class="shopping-item">
              <div>
                ${book.title}
              </div>
              <div>
                ${book.price}
              </div>
              <div>
                <button class="btn btn-danger" onclick="deleteItem('${String(
                  book.asin
                )}')">Delete </button>
              </div>
            </div>
          `
  })
}

//smart component

function search(query) {
  filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query.toLowerCase())
  )

  if (query.length < 3) {
    filteredBooks = books // global variable books get overwritten by the filtered books and then they get shown on the page!
    displayBooks()
    return //why return here?
  }

  console.log(filteredBooks)
  displayBooks(filteredBooks)
}

function deleteItem(asin) {
  const index = shoppingCartList.findIndex(book => book.asin === asin)

  if (index !== -1) {
    shoppingCartList.splice(index, 1)
  }

  refreshShoppingCart()
}
