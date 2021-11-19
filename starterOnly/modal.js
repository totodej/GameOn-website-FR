function editNav() {
  const x = document.getElementById("myTopnav");
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
const modalBody = document.getElementsByClassName("modal-body");
const btnCloseX = document.getElementsByClassName("close");
const modalBodyConfirmation = document.getElementsByClassName("modal-body_confirmation");
const btnClose = document.getElementsByClassName("btn-close");
const form = document.getElementsByTagName("form");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthDateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationsInput = document.getElementsByName("location");
const conditionsInput = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close Modal with the button X
btnCloseX[0].addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
}

// Close Modal with the button on the Confirmation Modal
btnClose[0].addEventListener("click", closeConfirmationModal);
function closeConfirmationModal(){
  disappearConfirmation();
  appearForm();
  closeModal();
  form[0].reset();
}

// Form Validation 
function validate(event){
  event.preventDefault();
  firstNameValidation();
  lastNameValidation();
  emailValidation();
  birthDateValidation();
  quantityValidation();
  locationValidation();
  conditionsValidation();

  if(firstNameValidation() === true && lastNameValidation() === true && emailValidation() === true && birthDateValidation() === true && quantityValidation() === true && locationValidation() === true && conditionsValidation() === true){
    disappearForm();
    appearConfirmation();
  }
}

// Functions to appear and to disappear
function appearConfirmation(){
  modalBodyConfirmation[0].style.display = "block";
}

function disappearConfirmation(){
  modalBodyConfirmation[0].style.display = "none";
}

function appearForm(){
  modalBody[0].style.display = "block";
}

function disappearForm(){
  modalBody[0].style.display = "none";
}

// isValid Function
function isValid(input){
  input.parentElement.setAttribute("data-error-visible", "false");
}

// Error Message Function
function errorMessage(input){
  input.parentElement.setAttribute("data-error-visible", "true");
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

firstNameInput.addEventListener("input", function(){
  isValid(firstNameInput);
});

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

lastNameInput.addEventListener("input", function(){
  isValid(lastNameInput);
});

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

emailInput.addEventListener("input", function(){
  isValid(emailInput);
});

// Birthdate Validation
function birthDateValidation(){
  let birthDate = new Date(birthDateInput.value);
  let today = new Date();
  
  if(birthDate.getFullYear() === today.getFullYear()){
    if(birthDate.getMonth() + 1 === today.getMonth() + 1){
      if(birthDate.getDate() < today.getDate()){
        isValid(birthDateInput);
        return true;
      }else{
        errorMessage(birthDateInput);
        return false;
      }
    }else if(birthDate.getMonth() + 1 < today.getMonth() + 1){
      isValid(birthDateInput);
      return true;
    }else{
      errorMessage(birthDateInput);
      return false;
    }
  }else if(birthDate.getFullYear() < today.getFullYear()){
    isValid(birthDateInput);
    return true;
  }else{
    errorMessage(birthDateInput);
    return false;
  }
}

birthDateInput.addEventListener("input", function(){
  isValid(birthDateInput);
});

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

quantityInput.addEventListener("input", function(){
  isValid(quantityInput);
});

// Location Validation 
function locationValidation() {
  let array = [];
  for (let i = 0; i < locationsInput.length; i++) {
    if (locationsInput[i].checked === true) {
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

for(let i = 0; i < locationsInput.length; i++){
  locationsInput[i].addEventListener("change", function(){
    isValid(locationsInput[i]);
  });
}

// Conditions Validation 
function conditionsValidation() {
  if (conditionsInput.checked === false) {
    errorMessage(conditionsInput);
    return false;
  } else {
    isValid(conditionsInput);
    return true;
  }
}

conditionsInput.addEventListener("change", function(){
  isValid(conditionsInput);
});

