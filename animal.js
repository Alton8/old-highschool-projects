onEvent("coverPicture", "click", function( ) {
	console.log("coverPicture clicked!");
});

onEvent("startButton", "click", function( ) {
	console.log("startButton clicked!");
	setScreen("gameScreen");
});
onEvent("button1", "click", function( ) {
	console.log("button1 clicked!");
	setScreen("funfact1");
	setProperty("button1", "hidden", true);
});
onEvent("home", "click", function( ) {
	console.log("home clicked!");
	setScreen("homeScreen");
});
onEvent("home", "hover", function( ) {
	document.getElementById("demo").style.cursor = "";
});
onEvent("button1", "click", function( ) {
	console.log("button1 clicked!");
});
onEvent("nextScreen", "click", function( ) {
	console.log("nextScreen clicked!");
	setScreen("gameScreen");
});
onEvent("home", "click", function( ) {
	console.log("home clicked!");
});
onEvent("home", "click", function( ) {
	console.log("home clicked!");
});

onEvent("button2", "click", function( ) {
	console.log("button2 clicked!");
	setProperty("button2", "hidden",true);
	setScreen("funfact2");
});
onEvent("button4", "click", function( ) {
	console.log("button4 clicked!");
	setScreen("gameScreen");
});
onEvent("image2", "click", function( ) {
	console.log("image2 clicked!");
	setScreen("homeScreen");
});

onEvent("homeButton", "click", function( ) {
	console.log("homeButton clicked!");
	setScreen("homeScreen");
});
onEvent("button5", "click", function( ) {
	console.log("button5 clicked!");
	setProperty("button5", "hidden", true);
	setScreen("funfact3");
});
onEvent("image6", "click", function( ) {
	console.log("image6 clicked!");
	setScreen("homeScreen");
});
onEvent("nextButton", "click", function( ) {
	console.log("nextButton clicked!");
	setScreen("gameScreen");
});
onEvent("button14", "click", function( ) {
	console.log("button14 clicked!");
	setProperty("button14", "hidden", true);
	setScreen("funfact4");
});
onEvent("image6", "click", function( ) {
	console.log("image6 clicked!");
});
onEvent("gameScreenButton", "click", function( ) {
	console.log("gameScreenButton clicked!");
	setScreen("gameScreen");
});
onEvent("image8", "click", function( ) {
	console.log("image8 clicked!");
	setScreen("homeScreen");
});
onEvent("sound", "click", function( ) {
	console.log("sound clicked!");
	playSound("komodo-dragon.mp3");
});
onEvent("button11", "click", function( ) {
	console.log("button11 clicked!");
});
onEvent("button11", "click", function( ) {
	console.log("button11 clicked!");
	setScreen("funfact5");
	setProperty("button11", "hidden", true);
});
onEvent("button3", "click", function( ) {
	console.log("button3 clicked!");
	setScreen("gameScreen");
});
onEvent("sound", "click", function( ) {
	console.log("sound clicked!");
	playSound("komodo-dragon.mp3");
});
onEvent("button10", "click", function( ) {
	console.log("button10 clicked!");
	setScreen("funfact6");
	setProperty("button10","hidden",true);
});
onEvent("homeButton6", "click", function( ) {
	console.log("homescreen6 clicked!");
	setScreen("homeScreen");
});
onEvent("nextFact6", "click", function( ) {
	console.log("nextFact6 clicked!");
	setScreen("gameScreen");
});
onEvent("sound2", "click", function( ) {
	console.log("sound2 clicked!");
	playSound("ape.mp3");
});
onEvent("button12", "click", function( ) {
	console.log("button12 clicked!");
	setScreen("funfact7");
	setProperty("button12","hidden",true);
});
onEvent("nextButton7", "click", function( ) {
	console.log("nextButton7 clicked!");
	setScreen("gameScreen");
});
onEvent("homeButton7", "click", function( ) {
	console.log("homeButton7 clicked!");
	setScreen("homeScreen");
});
onEvent("reloadButton", "click", function( ) {
	console.log("reloadButton clicked!");
	setProperty("button1","hidden",false);
	setProperty("button10","hidden",false);
	setProperty("button11","hidden",false);
	setProperty("button12","hidden",false);
	setProperty("button14","hidden",false);
	setProperty("button2","hidden",false);
	setProperty("button3","hidden",false);
	setProperty("button4","hidden",false);
	setProperty("button5","hidden",false);
});

onEvent("funFact3Title", "click", function( ) {
	console.log("FunFact3Title clicked!");
});
onEvent("gameScreenHomeButton", "click", function( ) {
	console.log("gameScreenHomeButton clicked!");
	setScreen("homeScreen");
});
