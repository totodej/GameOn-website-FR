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
  birthDateValidation();
  quantityValidation();
  locationValidation();
  conditionsValidation();
  return false;
}

//  First-name Validation 

function firstNameValidation() {
  const firstNameInput = document.getElementById("first");
  if (firstNameInput.value.length < 2) {
    firstNameInput.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    firstNameInput.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

// Last-name Validation 

function lastNameValidation() {
  const lastNameInput = document.getElementById("last");
  if (lastNameInput.value.length < 2) {
    lastNameInput.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    lastNameInput.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

// Email Validation 

function emailValidation() {
  const emailInput = document.getElementById("email");
  if (emailInput.value.indexOf("@") === -1) {
    emailInput.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    emailInput.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

// Birthdate Validation

function birthDateValidation(){
  const birthDateInput = document.getElementById("birthdate");
  let birthDate = new Date(birthDateInput.value);
  let today = new Date();
  
  if(birthDate.getFullYear() === today.getFullYear()){
    if(birthDate.getMonth() + 1 === today.getMonth() + 1){
      if(birthDate.getDate() < today.getDate()){
        birthDateInput.parentElement.setAttribute("data-error-visible", "false");
        return true;
      }else{
        birthDateInput.parentElement.setAttribute("data-error-visible", "true");
        return false;
      }
    }else if(birthDate.getMonth() + 1 < today.getMonth() + 1){
      birthDateInput.parentElement.setAttribute("data-error-visible", "false");
      return true;
    }else{
      birthDateInput.parentElement.setAttribute("data-error-visible", "true");
      return false;
    }
  }else if(birthDate.getFullYear() < today.getFullYear()){
    birthDateInput.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }else{
    birthDateInput.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
}

// Participation Validation 

function quantityValidation() {
  const quantityInput = document.getElementById("quantity");
  if (quantityInput.value === "") {
    quantityInput.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    quantityInput.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

// Location Validation 

function locationValidation() {
  const locationsInput = document.getElementsByName("location");
  let array = [];
  for (let i = 0; i < locationsInput.length; i++) {
    if (locationsInput[i].checked === true) {
      array.push(locationsInput[i].checked);
    }
  }
  if (array.indexOf(true) !== 0) {
    locationsInput[0].parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    locationsInput[0].parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

// Conditions Validation 

function conditionsValidation() {
  const conditionsInput = document.getElementById("checkbox1");
  if (conditionsInput.checked === false) {
    conditionsInput.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    conditionsInput.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
}

