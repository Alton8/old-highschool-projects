//Changes the screen and clears items when buttons are pressed
onEvent("arenaButton", "click", function () {
  setScreen("arenaScreen");
});
onEvent("teamButton", "click", function () {
  setScreen("teamScreen");
});
onEvent("homeButton2", "click", function () {
  setScreen("mainScreen");
  setProperty("filteredInformationDisplay", "hidden", true);
  setProperty("Info", "text", "Learn about NBA Teams!");
  setProperty("filterOptions", "y", 335);
  setProperty("teamLogo", "image", "");
  setProperty("filterOptions", "text", "Filter by...");

});
onEvent("homeButton1", "click", function () {
  setProperty("arenaInformation", "text", "Choose a team");
  setProperty("teamIcon", "image", "");
  setProperty("teamList", "text", "Team...");
  setScreen("mainScreen");
});
//Variables
var nbaTeams = getColumn("NBA Teams", "Team");
var nbaConference = getColumn("NBA Teams", "Conference");
var nbaCity = getColumn("NBA Teams", "Location");
var nbaYear = getColumn("NBA Teams", "Year joined to the NBA");
var nbaChampionships = getColumn("NBA Teams", "Championship wins");
var nbaArena = getColumn("NBA Teams", "Arena");
var nbaArenaCapacity = getColumn("NBA Teams", "Arena capacity");
var nbaTeamLogos = getColumn("NBA Teams", "Image");
var filteredNBAYears = [];
var filteredChampionshipWins = [];
var filteredTeams = [];
// When the random team button is clicked
onEvent("mainButton", "click", function () {
  setProperty("filterOptions", "y", 360);
  setProperty("filteredInformationDisplay", "hidden", true);
  setProperty("Info", "hidden", false);
  setProperty("teamLogo", "hidden", false);
  var nbaTeamIndex = randomNumber(0, nbaTeams.length-1);
  setProperty("Info", "text", "The " + nbaTeams[nbaTeamIndex] + " joined the NBA in " + nbaYear[nbaTeamIndex] + " and are located in " + nbaCity[nbaTeamIndex]);
  setProperty("teamLogo", "image", nbaTeamLogos[nbaTeamIndex]);
  clearLists();
  setProperty("filterOptions", "text", "Filter by...");
});
//When the user selects an item from the dropdown in the team screen
onEvent("filterOptions", "change", function () {
  clearLists();
  setProperty("Info", "hidden", true);
  setProperty("teamLogo", "hidden", true);
  setProperty("filteredInformationDisplay", "hidden", false);
  var filter = getText("filterOptions");
  if (filter == "Year Team was Created") {
   for (var i=0; i<nbaYear.length; i++) {
    appendItem(filteredNBAYears, nbaYear[i] + " " + nbaTeams[i]);
    filteredNBAYears.sort();

   } 
    var nbaYears = filteredNBAYears.join("\n");
    setProperty("filteredInformationDisplay", "text", nbaYears);

  }
  if (filter == "Championship Wins") {
     for (var k=0; k<nbaChampionships.length; k++) {
      if (nbaChampionships[k] < 9) {
        appendItem(filteredChampionshipWins, " " + nbaChampionships[k] + " " + nbaTeams[k]);
      } else {
      appendItem(filteredChampionshipWins, nbaChampionships[k] + " " + nbaTeams[k]);
}
   } 
      filteredChampionshipWins.sort();

    var championships = filteredChampionshipWins.join("\n");
    setProperty("filteredInformationDisplay", "text", championships);

  }
  if (filter == "Western Conference Teams") {
    filteredTeams = [];

  for (var o=0; o<nbaConference.length; o++) {
    if (nbaConference[o] == "Western") {
      appendItem(filteredTeams, nbaTeams[o]);
      
    }
    filteredTeams.sort();

    var conferenceTeams = filteredTeams.join("\n");
    setProperty("filteredInformationDisplay", "text", conferenceTeams);

   }
} if (filter == "Eastern Conference Teams") {
      filteredTeams = [];

  for (var p=0; p<nbaConference.length; p++) {
    if (nbaConference[p] == "Eastern") {
      appendItem(filteredTeams, nbaTeams[p]);
    }
  }
  filteredTeams.sort();
    var EasternconferenceTeams = filteredTeams.join("\n");
    setProperty("filteredInformationDisplay", "text", EasternconferenceTeams);
}

       
});

//When the user selects a team from the dropdown
onEvent("teamList", "change", function () {
  var team = getText("teamList");
if (team == "Team...") {
  setProperty("arenaInformation", "text", "Choose a team");
  setProperty("teamIcon", "image", "");
  
}
  for (var u=0; u<nbaTeams.length; u++) {
    if (team == nbaTeams[u]) {
      setProperty("arenaInformation", "text", "The " + nbaTeams[u] + " play at " + nbaArena[u] + ", which has a maximum capacity of " + nbaArenaCapacity[u] + " people.");
      setProperty("teamIcon", "image", nbaTeamLogos[u]);
    }
  }
});
//Clears all the lists
function clearLists() {
  filteredNBAYears = [];
  filteredChampionshipWins = [];
  filteredTeams = [];
}


