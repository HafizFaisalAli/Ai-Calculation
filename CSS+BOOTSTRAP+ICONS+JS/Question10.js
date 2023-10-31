let formSubmit = document.getElementById("formSubmit");

formSubmit.addEventListener("submit", function (event) {
  event.preventDefault();

  let book = {};

  book.dayNum = document.getElementById("dayNum").value;

  myfunc(book);
});

function myfunc(book) {
  if (book.dayNum == 1) {
    let dayName = document.getElementById("dayName");
    dayName.innerHTML = "Month have 31 days";
  } else if (book.dayNum == 2) {
    dayName.innerHTML = "Month have 28 days";
  } else if (book.dayNum == 3) {
    dayName.innerHTML = "Month have 31 days";
  } else if (book.dayNum == 4) {
    dayName.innerHTML = "Month have 30 days";
  } else if (book.dayNum == 5) {
    dayName.innerHTML = "Month have 31 days";
  } else if (book.dayNum == 6) {
    dayName.innerHTML = "Month have 30 days";
  } else if (book.dayNum == 7) {
    dayName.innerHTML = "Month have 31 days";
  } else if (book.dayNum == 8) {
    dayName.innerHTML = "Month have 31 days";
  } else if (book.dayNum == 9) {
    dayName.innerHTML = "Month have 30 days";
  } else if (book.dayNum == 10) {
    dayName.innerHTML = "Month have 31 days";
  } else if (book.dayNum == 11) {
    dayName.innerHTML = "Month have 30 days";
  } else if (book.dayNum == 12) {
    dayName.innerHTML = "Month have 31 days";
  } else {
    alert("enter valid number");
  }
}
