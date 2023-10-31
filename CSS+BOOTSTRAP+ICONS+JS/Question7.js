let formSubmit = document.getElementById("formSubmit");

formSubmit.addEventListener("submit", function (event) {
  event.preventDefault();

  let book = {};

  book.temp = document.getElementById("temp").value;

  myfunc(book);
});

function myfunc(book) {
  if (book.temp <= 0) {
    let temperture = document.getElementById("temperture");
    temperture.innerHTML = "Temperture is very Cold...";
  } else if (book.temp > 0 && book.temp < 10) {
    temperture.innerHTML = "Temperture is cold...";
  } else if (book.temp > 10 && book.temp <= 30) {
    temperture.innerHTML = "Temperture is Normal...";
  } else if (book.temp > 30 && book.temp <= 40) {
    temperture.innerHTML = "Temperture is Very Hot...";
  } else alert("Enter 40 or less then tempreture");
}
