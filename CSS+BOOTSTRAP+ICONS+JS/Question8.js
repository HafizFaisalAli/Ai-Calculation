let formSubmit = document.getElementById("formSubmit");

formSubmit.addEventListener("submit", function (event) {
  event.preventDefault();

  let book = {};

  book.cusId = +document.getElementById("cusId").value;
  book.Name = document.getElementById("Name").value;
  book.unitConsumed = +document.getElementById("unitConsumed").value;

  result(book);
  myfunc(book);
});

function result(book) {
  let cusidNo = document.getElementById("cusidNo");

  cusidNo.innerHTML = "Customer ID: " + book.cusId;

  let cusName = document.getElementById("cusName");
  cusName.innerHTML = "Customer Name: " + book.Name;

  let unitConsum = document.getElementById("unitConsum");
  unitConsum.innerHTML = "Unit Consumed :" + book.unitConsumed;
}

function myfunc(book) {
  let bill = "";

  if (book.unitConsumed <= 199) {
    unitPrice = 1.2;
    bill = book.unitConsumed * unitPrice;
  } else if (book.unitConsumed >= 200 && book.unitConsumed < 400) {
    unitPrice = 1.5;
    bill = book.unitConsumed * unitPrice;
  } else if (book.unitConsumed >= 400 && book.unitConsumed < 600) {
    unitPrice = 1.8;
    bill = book.unitConsumed * unitPrice;
  } else if (book.unitConsumed >= 600) {
    unitPrice = 2.0;
    bill = book.unitConsumed * unitPrice;
  }

  if (bill > 400) {
    surcharge = (bill * 15) / 100;
  } else if (bill < 100) {
    alert("minimum bill should be of Rs. 100/-");
  }

  totalBill = surcharge + bill;

  // print

  let amCharges = document.getElementById("amCharges");
  amCharges.innerHTML =
    "Amount Charges: " + unitPrice + " " + "per unit: " + bill;

  let surchargeAmount = document.getElementById("surchargeAmount");
  surchargeAmount.innerHTML = "Surcharge Amount: " + surcharge;

  let billPaid = document.getElementById("billPaid");
  billPaid.innerHTML = "Net Amount Paid by the Customer: " + totalBill;
}
