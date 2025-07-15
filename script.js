let BookForm = document.querySelector(".form-group form");

BookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let title = document.getElementById("title").value.trim();
  let author = document.getElementById("author").value.trim();
  let isbn = document.getElementById("isbn").value.trim();

  let tbody = document.getElementById("book-list");
  if (!tbody) return;

  let newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td class="delete" style="cursor:pointer;">❌</td>
  `;

  tbody.appendChild(newRow);

  // Attach click listener to the ❌ after adding to DOM
  newRow.querySelector(".delete").addEventListener("click", function () {
    newRow.remove();
  });
});
