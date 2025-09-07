var money;
var texture;
var flavor;
// Gets the money input and stores it as a variable
onEvent("confirm", "click", function( ) {
 money = getNumber("moneyInput"); 
 setProperty("moneyInput", "text", "");
if ((isNaN(money))) {
  
  hideEverything();
  setProperty("errorLabel", "hidden", false);
  setProperty("errorLabel", "text", "Enter a number!");
}
else if (money<1) {
  hideEverything();
  setProperty("errorLabel", "hidden", false);
  setProperty("errorLabel", "text", "You do not have enough money!");
}
 else {
  setProperty("errorLabel", "hidden", false);
if (money== 1) {
  setProperty("errorLabel", "text", "You have " + money + " dollar!");
  setProperty("Question2", "hidden", false);
  setProperty("textureInput", "hidden", false);
} else if (money>1) {
  setProperty("errorLabel", "text", "You have " + money + " dollars!");
  setProperty("Question2", "hidden", false);
  setProperty("textureInput", "hidden", false);
}
}
});
//Stores the inputs as a variable
onEvent("textureInput", "change", function( ) {
  setProperty("Question3", "hidden", false);
  setProperty("flavorInput", "hidden", false);
  texture = getText("textureInput");

});
onEvent("flavorInput", "change", function( ) {
  flavor = getText("flavorInput");
  result();
  setTimeout(function () { setProperty("redoButton", "hidden", false); }, 1000);

});
onEvent ("redoButton", "click", function () {
  hideEverything();

});
// Clears the Screen
function hideEverything() {
  money = "";
  texture = "";
  flavor = "";
  setProperty("candyResult", "hidden", true);
  setProperty("candyResult", "image", "");
  setProperty("redoButton", "hidden", true);
  setProperty("Question2", "hidden", true);
  setProperty("textureInput", "hidden", true);
  setProperty("Question3", "hidden", true);
  setProperty("flavorInput", "hidden", true);
  setProperty("resultTitle", "hidden", true);
  setProperty("errorLabel", "hidden", true);
  setProperty("textureInput", "text", "Select an option...");
  setProperty("flavorInput", "text", "Select an option...");

}
function result() {
  setProperty("resultTitle", "hidden", false);

if (money <=5) {
// Chewy
  if (texture == "Chewy" && flavor == "Sweet") {
    setProperty("candyResult", "image", "watermelon.png");
    setProperty("candyResult", "hidden", false);

  }
  if (texture == "Chewy" && flavor == "Sour") {
    setProperty("candyResult", "image", "sourpunchstraw-removebg-preview.png");
    setProperty("candyResult", "hidden", false);

  }
 if (texture == "Chewy" && flavor == "Fruit") {
    setProperty("candyResult", "image", "laffytaffy.png");
    setProperty("candyResult", "hidden", false);

  }
 if (texture == "Chewy" && flavor == "Chocolate") {
    setProperty("candyResult", "image", "tootsieroll.png");
    setProperty("candyResult", "hidden", false);

  }
// Hard
  if (texture == "Hard" && flavor == "Sweet") {
    setProperty("candyResult","image", "jollyrancher.png");
    setProperty("candyResult", "hidden", false);

}  
  if (texture == "Hard" && flavor == "Sour") {
    setProperty("candyResult", "image", "toxicwaste.png");
    setProperty("candyResult", "hidden", false);

}
  if (texture == "Hard" && flavor == "Fruit") {
    setProperty("candyResult", "image", "lifesavers-removebg-preview.png");
    setProperty("candyResult", "hidden", false);

}
  if (texture == "Hard" && flavor == "Chocolate") {
    setProperty("candyResult", "image", "cheapchocolate-removebg-preview.png");
    setProperty("candyResult", "hidden", false);

}
// Crunchy
  if (texture == "Crunchy" && flavor == "Sweet") {
    setProperty("candyResult", "image", "crunchnerds.png");
    setProperty("candyResult", "hidden", false);

}
  if (texture == "Crunchy" && flavor == "Sour") {
    setProperty("candyResult", "image", "crunchytrolli.png");
    setProperty("candyResult", "hidden", false);

}
  if (texture == "Crunchy" && flavor == "Fruit") {
    setProperty("candyResult", "image", "cheapnerds.png");
    setProperty("candyResult", "hidden", false);

}
  if (texture == "Crunchy" && flavor == "Chocolate") {
    setProperty("candyResult", "image", "feastables.png");
    setProperty("candyResult", "hidden", false);

}
}
// Chewy
  if (texture == "Chewy" && flavor == "Sweet" && money>5) {
    setProperty("candyResult","image", "starbursts.png");
    setProperty("candyResult", "hidden", false);

}
  if (texture == "Chewy" && flavor == "Sour"&& money>5) {
    setProperty("candyResult","image", "sourpatch.png");
    setProperty("candyResult", "hidden", false);

}
  if (texture == "Chewy" && flavor == "Fruit" && money>5) {
    setProperty("candyResult","image", "hi-chew-removebg-preview.png");
    setProperty("candyResult", "hidden", false);

}
  if (texture == "Chewy" && flavor == "Chocolate" && money>5) {
    setProperty("candyResult","image", "snickers.png");
    setProperty("candyResult", "hidden", false);

}
// Hard
  if (texture == "Hard" && flavor == "Sweet" && money>5) {
    setProperty("candyResult","image", "gobstopper-removebg-preview.png");
    setProperty("candyResult", "hidden", false);

}
  if (texture == "Hard" && flavor == "Sour" && money>5) {
    setProperty("candyResult", "image", "warhead-removebg-preview.png");
    setProperty("candyResult", "hidden", false);

}
  if (texture == "Hard" && flavor == "Fruit" && money>5) {
    setProperty("candyResult", "image", "jollyrancher2.png");
    setProperty("candyResult", "hidden", false);

}
  if (texture == "Hard" && flavor == "Chocolate" && money>5) {
    setProperty("candyResult", "image", "hardchocolate.png");
    setProperty("candyResult", "hidden", false);

}
// Crunch
  if (texture == "Crunchy" && flavor == "Sweet" && money>5) {
    setProperty("candyResult", "image", "nerds.png");
    setProperty("candyResult", "hidden", false);

}
  if (texture == "Crunchy" && flavor == "Sour" && money>5) {
    setProperty("candyResult", "image", "sournerds.png");
    setProperty("candyResult", "hidden", false);

}
  if (texture == "Crunchy" && flavor == "Fruit" && money>5) {
    setProperty("candyResult", "image", "crunchyfruit.png");
    setProperty("candyResult", "hidden", false);

}
  if (texture == "Crunchy" && flavor == "Chocolate" && money>5) {
    setProperty("candyResult", "image", "crunch.png");
    setProperty("candyResult", "hidden", false);

}
}
hideEverything();


