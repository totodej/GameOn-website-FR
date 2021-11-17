function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/////////// 1 - TODO : close modal ///////////

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

/////////// 2 - Implement form inputs ///////////

function validate(){
  validationFirstName();
  validationLastName();
  validationEmail();
  validationQuantity();
}

//  Validation firstName

function validationFirstName() {
  const firstName = document.getElementById("first");
  if (firstName.value.length < 2) {
    return false;
  } else {
    return true;
  }
}

// Validation lastName

function validationLastName() {
  const lastName = document.getElementById("last");
  if (lastName.value.length < 2) {
    return false;
  } else {
    return true;
  }
}

// Validation email

function validationEmail() {
  const email = document.getElementById("email");
  if (email.value.indexOf("@") === -1) {
    return false;
  } else {
    return true;
  }
}

// Validation participation

function validationQuantity() {
  const quantity = document.getElementById("quantity");
  if (quantity.value == "") {
    return false;
  } else {
    return true;
  }
}

