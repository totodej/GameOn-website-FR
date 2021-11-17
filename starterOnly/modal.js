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
  validationCity();
  validationConditions();
  return false;
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

// Validation City option

function validationCity() {
  const locations = document.getElementsByName("location");
  let array = [];
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked === true) {
      array.push(locations[i].checked);
    }
  }
  if (array.indexOf(true) !== 0) {
    return false;
  } else {
    return true;
  }
}

// Validation conditions

function validationConditions() {
  const conditions = document.getElementById("checkbox1");
  if (conditions.checked === false) {
    return false;
  } else {
    return true;
  }
}

