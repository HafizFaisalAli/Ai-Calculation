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
    dayName.innerHTML = "Day is Monday";
  } else if (book.dayNum == 2) {
    dayName.innerHTML = "Day is Tuesday";
  } else if (book.dayNum == 3) {
    dayName.innerHTML = "Day is Wednesday";
    dayName.style.color = "blue";
  } else if (book.dayNum == 4) {
    dayName.innerHTML = "Day is Thursday";
  } else if (book.dayNum == 5) {
    dayName.innerHTML = "Day is Friday";
  } else if (book.dayNum == 6) {
    dayName.innerHTML = "Day is Saturday";
  } else if (book.dayNum == 7) {
    dayName.innerHTML = "Day is Sunday";
  } else {
    alert("Must enter any number");
  }
}
