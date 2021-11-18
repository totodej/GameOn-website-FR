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
  firstNameValidation();
  lastNameValidation();
  emailValidation();
  quantityValidation();
  locationValidation();
  conditionsValidation();
  return false;
}

//  First-name Validation 

function firstNameValidation() {
  const firstName = document.getElementById("first");
  if (firstName.value.length < 2) {
    firstName.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    firstName.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

// Last-name Validation 

function lastNameValidation() {
  const lastName = document.getElementById("last");
  if (lastName.value.length < 2) {
    lastName.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    lastName.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

// Email Validation 

function emailValidation() {
  const email = document.getElementById("email");
  if (email.value.indexOf("@") === -1) {
    email.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    email.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

// Participation Validation 

function QuantityValidation() {
  const quantity = document.getElementById("quantity");
  if (quantity.value === "") {
    quantity.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    quantity.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

// Location Validation 

function locationValidation() {
  const locations = document.getElementsByName("location");
  let array = [];
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked === true) {
      array.push(locations[i].checked);
    }
  }
  if (array.indexOf(true) !== 0) {
    locations[0].parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    locations[0].parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

// Conditions Validation 

function conditionsValidation() {
  const conditions = document.getElementById("checkbox1");
  if (conditions.checked === false) {
    conditions.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    conditions.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

