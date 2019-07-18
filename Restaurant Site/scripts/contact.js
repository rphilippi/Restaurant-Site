function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["contactForm"].elements.length; loopCounter++) {
        if (document.forms["contactForm"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
                document.forms["contactForm"].elements[loopCounter].parentElement.className = "form-group";
        }
    }
}

function validateItems() {
  clearErrors();

  var inputName = document.forms["contactForm"]["inputName"].value;
  var inputEmail = document.forms["contactForm"]["inputEmail"].value;
  var inputPhone = document.forms["contactForm"]["inputPhone"].value;

  if (inputName == "") {
  alert("Please enter your name.");
  document.forms["contactForm"]["inputName"].parentElement.className = "form-group has-error";
  document.forms["contactForm"]["inputName"].focus();
  return false;
  }

  if (inputEmail == "") {
  alert("Please enter your email address.");
  document.forms["contactForm"]["inputEmail"].parentElement.className = "form-group has-error"
  document.forms["contactForm"]["inputEmail"].focus();
  return false;
  }

  if (inputPhone == "") {
  alert("Please enter your phone number.");
  document.forms["contactForm"]["inputPhone"].parentElement.className = "form-group has-error"
  document.forms["contactForm"]["inputPhone"].focus();
  return false;
  }

  

  alert("Your contact info has been successfully validated.");
  // We are returning false so that the form doesn't submit
  // and so that we can see the results
  return false;
}
