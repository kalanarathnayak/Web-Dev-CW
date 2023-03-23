//function for background colors
function color() {
    var color = document.getElementById("colors").value;
    document.body.style.backgroundColor = color;
}
//function for text colors
function updateTextColour() {
    var updateTextColour = document.getElementById("font").value;
    document.body.style.color = updateTextColour;
}
//function to check which radio button is selected
function getRadioValue(radioArray) {
    var i;
    for (i = 0; i < radioArray.length; i++) {
        if (radioArray[i].checked) {
            return radioArray[i].value; //returns value of the index
        }
    }
    return ""; //a null string is returned if radio button is not chosen 
}
//function to display the larger image and descriptions
function display(largeArea) {
    var chosenPainting = getRadioValue(largeArea.art);
    displayPainting(chosenPainting);
}
//function to get image and relevant descriptions
function displayPainting(painting) {

    switch (painting) {
        case "Mona_Lisa":
            selected.innerHTML = document.getElementById("painting1").innerHTML;
            description.innerHTML = document.getElementById("imagetext1").innerHTML;
            break;

        case "Girl_with_Pearl_Earring":
            selected.innerHTML = document.getElementById("painting2").innerHTML;
            description.innerHTML = document.getElementById("imagetext2").innerHTML;
            break;

        case "scream":
            selected.innerHTML = document.getElementById("painting3").innerHTML;
            description.innerHTML = document.getElementById("imagetext3").innerHTML;
            break;

        case "The_son_of_man":
            selected.innerHTML = document.getElementById("painting4").innerHTML;
            description.innerHTML = document.getElementById("imagetext4").innerHTML;
            break;

        case "self_portrait":
            selected.innerHTML = document.getElementById("painting5").innerHTML;
            description.innerHTML = document.getElementById("imagetext5").innerHTML;
            break;
    }
}
