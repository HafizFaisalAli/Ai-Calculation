let submitForm = document.getElementById("formSubmit");

submitForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let book = {};

  book.age = +document.getElementById("age").value;

  myfunc(book);
});

function myfunc(book) {
  if (book.age >= 18) {
    let resultPlace = document.getElementById("para");
    resultPlace.innerHTML =
      "Congratulations Your age is = " +
      book.age  +
      " so you are eligible for vote casting ";
  } else {
    let resultPlace = document.getElementById("para");
    resultPlace.innerHTML =
      "Oops you are not eligible Because your age is less then 18";
  }
}
