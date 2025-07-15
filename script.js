//your JS code here. If required.
let BookForm = document.querySelector(".form-group form");

let bookDetails = {
  title: "",
  author: "",
  isbn: "",
  delete: "",
};

BookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  bookDetails.title = document.getElementById("title").value.trim();
  bookDetails.author = document.getElementById("author").value.trim();
  bookDetails.isbn = document.getElementById("isbn").value.trim();

  console.log(bookDetails);

  let tbody = document.getElementById("book-list");

  let newRow = document.createElement("tr");

  // create and populate cells
  let titleCell = document.createElement("td");
  titleCell.textContent = bookDetails.title;

  let authorCell = document.createElement("td");
  authorCell.textContent = bookDetails.author;

  let isbnCell = document.createElement("td");
  isbnCell.textContent = bookDetails.isbn;

  let deleteCell = document.createElement("td");
  deleteCell.textContent = "❌";

  deleteCell.classList.add("delete");
  deleteCell.style.cursor = "pointer";

  deleteCell.addEventListener("click", function () {
    newRow.remove();
  });

  newRow.append(titleCell, authorCell, isbnCell, deleteCell);

  tbody.appendChild(newRow);
});
