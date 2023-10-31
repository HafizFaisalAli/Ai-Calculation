

let checknumberForm = document.getElementById("checknumberForm");

checknumberForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let book = {};

  book.one = +document.getElementById("one").value;
  book.two = +document.getElementById("two").value;
  book.three = +document.getElementById("three").value;

  condition(book);

});

function condition(book) {
  let para = document.getElementById("para");

  if (book.one > book.two && book.one > book.three) {
    para.innerHTML = "Anwser = " + book.one + " is Greater";
  } else if (book.two > book.one && book.two > book.three) {
    para.innerHTML = "Anwser = " + book.two + " is Greater";
  } else if (book.three > book.one && book.three > book.two) {
    para.innerHTML = "Anwser = " + book.three + " is Greater";
  }
};


// question 1 end 

