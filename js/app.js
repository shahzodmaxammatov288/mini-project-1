const formName = document.querySelector('#form-input-name');
const formAge = document.querySelector('#form-input-age');
const formMarried = document.querySelector('#form-input-married');
const inner1 = document.querySelector('#inner1');
const inner2 = document.querySelector('#inner2');
const inner3 = document.querySelector('#inner3');
const btnSubmit = document.querySelector('.btn-submit');
const btnCancel = document.querySelector('.btn-cancel');  
const formSuccess = document.querySelector('.form-success');
const formText = document.querySelector('.form-text');

// Functions
function wordFocus1() {
  const nameValue = formName.value;
  inner1.innerText = `🐱‍💻Name: ${nameValue}`;

}
function wordFocus2() {
  const ageValue = formAge.value;
  inner2.innerText = `🧐Age: ${ageValue}`;
}
function wordFocus3() {
  const marriedValue = formMarried.value;
  inner3.innerText = `😘is Married: ${marriedValue}`;
}

function successShow() {
  formSuccess.innerText = "Successful send!✅";
}

function unsuccessShow() {
  formSuccess.innerText = "Unsuccessful, try again!🤔";
  formText.innerHTML = ""
}

formName.addEventListener('keyup', wordFocus1);
formAge.addEventListener('keyup', wordFocus2);
formMarried.addEventListener('keyup', wordFocus3);
btnSubmit.addEventListener('click', successShow);
btnCancel.addEventListener('click', unsuccessShow);
