// function for user validation to check if all fields are filled
function validate() {
  let email = document.getElementById("email").value;
  let fname = document.getElementById("f-name").value;
  let lname = document.getElementById("l-name").value;
  let country = document.getElementById("country").value;
  let address = document.getElementById("address").value;

  if (email == "") {
    alert("Please enter your email");
    return false;
  }
  if (fname == "") {
    alert("Please enter your first name");
    return false;
  }
  if (lname == "") {
    alert("Please enter your last name");
    return false;
  }
  if (address == "") {
    alert("Please enter your address");
    return false;
  }
  // alert message displaying all personal details and information
  window.alert(
    "Email: " +
      email +
      "\nName: " +
      fname +
      lname +
      "\nCountry: " +
      country +
      "\nAddress: " +
      address +
      "\nYour order has been placed!"
  );
}
