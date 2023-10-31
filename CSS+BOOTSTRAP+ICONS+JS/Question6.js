let formSubmit = document.getElementById("formSubmit");

formSubmit.addEventListener("submit", function (event) {
  event.preventDefault();

  let book = {};

  book.mathMarks = +document.getElementById("mathMarks").value;
  book.phyMarks = +document.getElementById("phyMarks").value;
  book.chemMarks = +document.getElementById("chemMarks").value;
  book.rollNumber = +document.getElementById("rollNumber").value;
  book.studentName = document.getElementById("studentName").value;

  eligible(book);
  marks(book);
});

// if eligibile

function eligible(book) {
  let rollResult = document.getElementById("rollResult");
  rollResult.innerHTML = " Roll Number of the student : " + book.rollNumber;

  let nameResult = document.getElementById("nameResult");
  nameResult.innerHTML = "Name of the Student: " + book.studentName;

  let totalMarks = "";

  totalMarks = book.mathMarks + book.phyMarks + book.chemMarks;

  let sumResult = document.getElementById("sumResult");
  sumResult.innerHTML = "Total Marks are = " + totalMarks;

  let percentage = " ";

  percentage = (totalMarks * 100) / 300;

  let percentageResult = document.getElementById("percentageResult");
  percentageResult.innerHTML = "Your Percentage is = " + percentage;
}

function marks(book) {
  let mathMarks1 = document.getElementById("mathMarks1");
  mathMarks1.innerHTML = "Marks in Math: " + book.mathMarks;

  let phyMarks1 = document.getElementById("phyMarks1");
  phyMarks1.innerHTML = "Marks in Physics: " + book.phyMarks;

  let chemMarks1 = document.getElementById("chemMarks1");
  chemMarks1.innerHTML = "Marks in Chemistry: " + book.chemMarks;
}
