// Variable for getting the current time.
var currentDay = moment();
$('#currentDay').text(currentDay);
// Variable for the button.
var saveButton = document.getElementById("savBtn")
// Variable for the Text Description
var textBox = document.getElementById("descriptionID")


// Displays the text saved by the user.
function displayText() {

    var text = localStorage.getItem("descriptionID");
    textBox.textContent = text;

};
// Saves the Text into the local storage
function saveText() {

    var text = localStorage.getItem("descriptionID");
    localStorage.setItem("descriptionID", text);
    displayText();
}
//Event for when "save Button is clicked"
saveButton.addEventListener("click", displayText);