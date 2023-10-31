let formSubmit = document.getElementById("formSubmit");

formSubmit.addEventListener("submit", function (event) {
  event.preventDefault();

  let book = {};

  book.A = +document.getElementById("A").value;
  book.B = +document.getElementById("B").value;
  book.C = +document.getElementById("C").value;

  calculate(book);
});




function calculate(book) {
  let total = "";

  total = book.A + book.B + book.C;
  console.log(total);

  let totalMarks = document.getElementById("totalMarks");

  totalMarks.innerHTML = " The sum of Total marks is = " + total;

  let percentages = "";
  percentages = (total * 100) / 300;
  let percentage = document.getElementById("percentage");
  percentage.innerHTML = "The Percentage is =" + percentages;

  // condition

  if (percentages == 90) {
    let grade = document.getElementById("grade");
    grade.innerHTML = "Grade A";
  } else if (percentages >= 70 && percentages < 90) {
    grade.innerHTML = "Grade B";
  } else if (percentages >= 50 && percentages < 70) {
    grade.innerHTML = "Grade C";
  } else if (percentages < 50) {
    grade.innerHTML = "You are Fail 😌";
  } else {
    grade.innerHTML = "Something went wrong";
  }
}