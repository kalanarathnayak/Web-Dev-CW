//getting the div tag with "preview" class and storing it in a variable
let element = document.getElementById("preview");
//hiding the preview of user inputted data
element.style.display = "none";
let element1 = document.getElementById("formq");
let element2 = document.getElementById("greeting");
let element3 = document.getElementById("se-controls");

//hiding the buttons of preview
element3.style.display = "none";

//function for the onclick event in line number 85 of contact.html
function required() {
  //get the user input value and store then in variables 
  let empty_name = document.getElementById("name").value;
  let empty_email = document.getElementById("email").value;
  let empty_message = document.getElementById("message").value;
  let empty_topic = document.getElementById("topic").value;
  //store an empty string in a variable to use as the error message 
  let errorMessage = "";
  //check whether user inputs are empty 
  //if empty an error message will be amended to the earlier created error message variable 
  if (empty_name == "") {
    errorMessage += "Name Required!\n\n";
  }
  if (empty_email == "") {
    errorMessage += "Email Required!\n\n";
  }
  if (empty_message == "") {
    errorMessage += "Message Required!\n\n";
  }
  //if error message variable is not equal to a empty string it will show the alert 
  if (errorMessage != "") {
    alert(errorMessage);
  } else {
    //else show the preview
    //and hide the form
    element1.style.display = "none";
    element2.style.display = "none";
    element.style.display = "block";
    element3.style.display = "block";
    topicPreview.innerHTML = empty_topic;
    namePreview.innerHTML = empty_name;
    emailPreview.innerHTML = empty_email;
    messagePreview.innerHTML = empty_message;
    window.scrollTo({ top: 0 });
  }
}

//function for the onclick event in line number 111 of contact.html
function editField() {
  //hide the preview
  //and shows the form with the previous values
  element.style.display = "none";
  element3.style.display = "none";
  element1.style.display = "block";
  element2.style.display = "block";
  window.scrollTo({ top: 0 });
  //when clicked on message field the the page will scroll to the check button
  document.getElementById("message").addEventListener("click", () => {
    window.scrollBy(0, 100);
  }, { once: true });
}

//function for the onclick event in line number 112 of contact.html
function submitForm() {
  //submit the for on click 
  var frm = document.getElementsByName("contact-us")[0];
  frm.submit();
  element.style.display = "none";
  element3.style.display = "none";
  element1.style.display = "block";
  element2.style.display = "block";
  //reset the form 
  frm.reset();
  return false; // Prevent page refresh
}
//when clicked on message field the page will scroll to the check button
document.getElementById("message").addEventListener("click", () => {
  window.scrollBy(0, 100);
}, { once: true });


var topButton = document.getElementById("topBtn");

// When the user scrolls down 60px from the top of the document, shows the back to top button
window.onscroll = function () { scrollFunc() };

function scrollFunc() {
  if (document.documentElement.scrollTop > 60) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the back to top button the page will scroll to the top of the document
function topFunc() {
  document.documentElement.scrollTop = 0;
}