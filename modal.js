function editNav() {
  const x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById("hero").style.marginTop = "280px";
  } else {
    x.className = "topnav";
    document.getElementById("hero").style.marginTop = "0";
  }
}

// Form Validation
function validate(event) {
  event.preventDefault();

  const firstName = firstNameValidation();
  const lastName = lastNameValidation();
  const email = emailValidation();
  const birthDate = birthDateValidation();
  const quantity = quantityValidation();
  const location = locationValidation();
  const conditions = conditionsValidation();

  if (
    firstName &&
    lastName &&
    email &&
    birthDate &&
    quantity &&
    location &&
    conditions
  ) {
    disappearForm();
    appearConfirmation();
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  header.style.position = "fixed";
}

// Functions to appear and to disappear
function appearConfirmation() {
  modalBodyConfirmation.style.display = "block";
}

function disappearConfirmation() {
  modalBodyConfirmation.style.display = "none";
}

function appearForm() {
  modalBody.style.display = "block";
}

function disappearForm() {
  modalBody.style.display = "none";
}

// isValid Function
function isValid(input) {
  input.parentElement.setAttribute("data-error-visible", "false");
}

// Error Message Function
function errorMessage(input) {
  input.parentElement.setAttribute("data-error-visible", "true");
}

// Close Modal with the button on the Confirmation Modal
function closeConfirmationModal() {
  disappearConfirmation();
  appearForm();
  closeModal();
  form.reset();
}

// Close Modal with the button X
function closeModal() {
  modalbg.style.display = "none";
  header.style.position = "initial";
}

//  First-name Validation
function firstNameValidation() {
  if (firstNameInput.value.length < 2) {
    errorMessage(firstNameInput);
    return false;
  } else {
    isValid(firstNameInput);
    return true;
  }
}

// Last-name Validation
function lastNameValidation() {
  if (lastNameInput.value.length < 2) {
    errorMessage(lastNameInput);
    return false;
  } else {
    isValid(lastNameInput);
    return true;
  }
}

// Email Validation
function emailValidation() {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (regex.test(emailInput.value)) {
    isValid(emailInput);
    return true;
  } else {
    errorMessage(emailInput);
    return false;
  }
}

// Birthdate Validation
function birthDateValidation() {
  const birthDate = new Date(birthDateInput.value);
  const today = new Date();

  if (birthDate.getFullYear() === today.getFullYear()) {
    if (birthDate.getMonth() + 1 === today.getMonth() + 1) {
      if (birthDate.getDate() < today.getDate()) {
        isValid(birthDateInput);
        return true;
      } else {
        errorMessage(birthDateInput);
        return false;
      }
    } else if (birthDate.getMonth() + 1 < today.getMonth() + 1) {
      isValid(birthDateInput);
      return true;
    } else {
      errorMessage(birthDateInput);
      return false;
    }
  } else if (birthDate.getFullYear() < today.getFullYear()) {
    isValid(birthDateInput);
    return true;
  } else {
    errorMessage(birthDateInput);
    return false;
  }
}

// Participation Validation
function quantityValidation() {
  if (quantityInput.value === "") {
    errorMessage(quantityInput);
    return false;
  } else {
    isValid(quantityInput);
    return true;
  }
}

// Location Validation
function locationValidation() {
  const array = [];

  for (let i = 0; i < locationsInput.length; i++) {
    if (locationsInput[i].checked) {
      array.push(locationsInput[i].checked);
    }
  }
  if (array.indexOf(true) !== 0) {
    errorMessage(locationsInput[0]);
    return false;
  } else {
    isValid(locationsInput[0]);
    return true;
  }
}

// Conditions Validation
function conditionsValidation() {
  if (!conditionsInput.checked) {
    errorMessage(conditionsInput);
    return false;
  } else {
    isValid(conditionsInput);
    return true;
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const header = document.querySelector("header");
const modalBody = document.getElementById("modal-body");
const btnCloseX = document.getElementById("close");
const modalBodyConfirmation = document.getElementById(
  "modal-body_confirmation"
);
const btnClose = document.getElementById("btn-close");
const form = document.getElementById("form");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthDateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationsInput = document.getElementsByName("location");
const conditionsInput = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Events
btnCloseX.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeConfirmationModal);
firstNameInput.addEventListener("input", function () {
  isValid(firstNameInput);
});
lastNameInput.addEventListener("input", function () {
  isValid(lastNameInput);
});
emailInput.addEventListener("input", function () {
  isValid(emailInput);
});
birthDateInput.addEventListener("input", function () {
  isValid(birthDateInput);
});
quantityInput.addEventListener("input", function () {
  isValid(quantityInput);
});
for (let i = 0; i < locationsInput.length; i++) {
  locationsInput[i].addEventListener("change", function () {
    isValid(locationsInput[i]);
  });
}
conditionsInput.addEventListener("change", function () {
  isValid(conditionsInput);
});
