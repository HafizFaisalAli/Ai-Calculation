
let formSubmit = document.getElementById("formSubmit");

formSubmit.addEventListener("submit", function (event) {
  event.preventDefault();

  let book = {};
  book.number = +document.getElementById("number").value;

  myfunc(book);
});

function myfunc(book) {
  if (book.number % 2 == 0) {
    let para = document.getElementById("para");
    para.innerHTML = book.number + " = is Even Number ";
  } else {
    let para = document.getElementById("para");
    para.innerHTML = book.number + " = is Odd Number ";
  }
}