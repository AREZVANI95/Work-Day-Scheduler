// Variable for getting the current time.
var currentDay = moment();
$('#currentDay').text(currentDay);
// Variable for the button.
var saveButton = document.getElementById("savBtn")
// Variable for the Text Description
var textBox = document.getElementById("descriptionID")

function displayText() {

};

function saveText () {

    var text = localStorage.getItem("descriptionID");
}

saveButton.addEventListener("click", saveText);