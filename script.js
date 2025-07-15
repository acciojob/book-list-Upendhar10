//your JS code here. If required.
let BookForm = document.querySelector(".form-group form");

let bookDetails = {
  title: "",
  author: "",
  isbn: "",
};

BookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  bookDetails.title = document.getElementById("title").value.trim();
  bookDetails.author = document.getElementById("author").value.trim();
  bookDetails.isbn = document.getElementById("isbn").value.trim();

  // console.log(bookDetails);

  let tbody = document.getElementById("book-list");

  let newRow = document.createElement("tr");

  // create element
   newRow.innerHTML = `
	  <td>${bookDetails.title}</td>
	  <td>${bookDetails.author}</td>
	  <td>${bookDetails.isbn}</td>
	  <td class="delete" style="cursor:pointer;">❌</td>
   `;

	tbody.appendChild(newRow);

   // Attach click listener to the ❌ after adding to DOM
  newRow.querySelector(".delete").addEventListener("click", function () {
  newRow.remove();
});

});
