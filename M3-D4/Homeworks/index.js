/*Get all products from the API: https://striveschool-api.herokuapp.com/books
1. Display all the books using template literals and .forEach()
2. Add an add to cart button into each item
3. When this button is pressed: 1) add the item to another list (the cart), and 2) change the card styling to show that the element is in the cart (eg. red border, a badge, an icon… you choose)
4. Add a skip button inside each card
5. When pressed, this button should remove that book element from the page
6. Add a search bar. When the user types more than 3 characters, filter the content of the API response to only display the books with a matching (or partially matching) title (hint: use .filter())
7. Allow users to delete books from their cart
8. Count the cart items using a .reduce() method and display the result somewhere in the cart
EXTRAS:
1. Add a empty cart button, to delete the whole list
2. Create a detail page: when the user clicks on a book, they get redirected to another page. Pass the ASIN as a query string.
3. In the detail page, show the details of the book matching the ASIN in the query string: use this endpoint: https://striveschool-api.herokuapp.com/books/your_id_here */

const fetchBooks = () => {
  fetch(`https://striveschool-api.herokuapp.com/books`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      getBooks(data)
    })
    .catch(error => {
      //showAlert(`Sorry, something went wrong: ${error}`)
    })
}
fetchBooks()

const getBooks = data => {
  const row = document.querySelector('.row')
  const books = data =>
    data.map(book => {
      row.innerHTML += `
      <div class="col">
      <div class="card" style="width: 18rem;">
      <img src="${book.img}" class="card-img-top" alt="...">
      <div class="card-body">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      </div>
      </div>
    `
    })
  books(data)
}
