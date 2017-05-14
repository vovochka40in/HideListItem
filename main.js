var email = document.getElementById('email-input');

email.addEventListener("keyup", function(event) {
  var emailLabel = document.getElementById('email-label');
  var len = email.value.length >= 3;
  var lenNull = email.value.length !== 0;
  var isDog = email.value.indexOf("@") + 1;
  var notDot = email.value[email.value.length-1] != ".";
  var notDog = email.value[email.value.length-1] != "@";
  if(len && isDog && notDot && notDog) {
    email.classList.remove("error");
    email.classList.add("valid");
  } else {
    email.classList.remove("valid");
    email.classList.add("error");
  }
  if(lenNull) {
    emailLabel.classList.add("input_fill");
  } else {
    emailLabel.classList.remove("input_fill");
  }
});