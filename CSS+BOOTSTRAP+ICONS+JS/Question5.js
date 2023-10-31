let formSubmit = document.getElementById("formSubmit");

formSubmit.addEventListener("submit", function (event) {
  event.preventDefault();

  let book = {};

  book.mathMarks = +document.getElementById("mathMarks").value;
  book.phyMarks = +document.getElementById("phyMarks").value;
  book.chemMarks = +document.getElementById("chemMarks").value;

  
    eligible(book);
});



// if eligibile

function eligible(book) {

let totalMarks = "";

totalMarks = (book.mathMarks + book.phyMarks + book.chemMarks); 

let sumResult = document.getElementById("sumResult");
sumResult.innerHTML = "Total Marks are = " + totalMarks;

let percentage = " ";

percentage = ( totalMarks *100 ) / 300;

let percentageResult = document.getElementById("percentageResult");
percentageResult.innerHTML ="Your Percentage is = " +  percentage;







  if (book.mathMarks >= 65 && book.phyMarks >= 55 && book.chemMarks >= 50) {
    let resultPlace = document.getElementById("resultPlace");
    resultPlace.innerHTML = "You are Eligible";
  } else {
    let resultPlace = document.getElementById("resultPlace");
    resultPlace.innerHTML = "You are not Eligible";
  }
}
