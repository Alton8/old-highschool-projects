// Data imported from Code.org data table "College Majors & Incomes" columns "Major_category",
// "Major", "Median", "Total", "Employed", "Men", "Women"
var collegeMajors = getColumn("College Majors & Incomes", "Major_category");
var jobs = getColumn("College Majors & Incomes", "Major");
var income = getColumn("College Majors & Incomes", "Median" );
var totalEmployed = getColumn("College Majors & Incomes", "Total");
var employed = getColumn("College Majors & Incomes", "Employed");
var employedMen = getColumn("College Majors & Incomes", "Men");
var employedWomen = getColumn("College Majors & Incomes", "Women");
var filteredMajors = [];
var filteredJobs = [];

// Loop through major categories to filter unique ones
for (var i=0; i<collegeMajors.length; i++) {
  var currentMajor = collegeMajors[i];
  var duplicate = false;
for (var p=0; p<filteredMajors.length;p++) {
  if (currentMajor == filteredMajors[p]) {
    duplicate = true;
  }
}
if (duplicate == false) {
  appendItem(filteredMajors, currentMajor);
  filteredMajors.sort();
}
}

// Insert a default option for selecting a major category
insertItem(filteredMajors, 0, "Select a Major Category ...");

// Set options for dropdown menu displaying major categories

setProperty("majorOptions", "options", filteredMajors);

// Function to filter jobs based on selected major category
function jobfinder(major) {
  for (var i=0; i<collegeMajors.length; i++) {
    if (collegeMajors[i] == major) {
      appendItem(filteredJobs, jobs[i]);
      filteredJobs.sort();
    }
  }
  // Set the text of buttons based on the filtered job titles
  for (var p=1; p<=30;p++) {
    setProperty("button" + p, "text", filteredJobs[p-1]);
  //Hide  buttons that aren't used
  if (getProperty("button" + p, "text") == "Button" || getProperty("button" + p, "text") != filteredJobs[p-1]) {
    setProperty("button" + p, "hidden", true);
  } else {
    setProperty("button" + p, "hidden", false);
  }
  }
  return filteredJobs;
}
// Event handler for next button click
onEvent("nextButton", "click", function() {
  //Displays an error message if no major is selected by the user
  if (getProperty("majorOptions", "text") == "Select a Major Category ...") {
    setProperty("errorMessage", "hidden", false);
  } else {
  setProperty("errorMessage", "hidden", true);
  var selectedMajor = getProperty("majorOptions", "text");
  //I had to google this because the original string kept keeping the 'amp;' along with '&'
  // Modify the selected major string to remove unwanted characters
  var modifiedMajor = selectedMajor.replace(/amp;/g, '');
  setProperty("screenTwoTitle", "text", "Click on a button to learn more about each job in " + modifiedMajor + "!");
  setProperty("screen4Title", "text", "Click on a button to learn more about each job in " + modifiedMajor + "!");
  setProperty("screen5Title", "text", "Click on a button to learn more about each job in " + modifiedMajor + "!");
  setScreen("screen2");
  // Displays a new next button if more jobs are available to display

  if (filteredJobs.length > 10) {
    setProperty("moreJobs", "hidden", false);
  } else {
     setProperty("moreJobs", "hidden", true);
  }
  }
});
// Event handler for dropdown menu change
onEvent("majorOptions", "change", function () {
  filteredJobs = [];
  if (getProperty("majorOptions", "text") != "Select a Major Category ...") {
    setProperty("errorMessage", "hidden", true);
  }
  var selectedMajor = getProperty("majorOptions", "text");
  //I had to google this because the original string kept keeping the 'amp;' along with '&'
  // Modify the selected major string to remove unwanted characters
  var modifiedString = selectedMajor.replace(/amp;/g, '');
  jobfinder(modifiedString);

});
// Function to display information about selected job
function informationDisplayer (job) {
setScreen("screen3");
  for (var i=0; i<jobs.length; i++) {
    if (job == jobs[i]) {
      setProperty("jobInformation", "text", "Median Income: $" + income[i] + "\n" + "Total number of US graduates with that major: " + totalEmployed[i] 
      + "\n" + "Amount of graduates with that degree who are employed: " + employed[i] + 
      "\n" + "Total number of male graduates with that major: " + employedMen[i] + "\n" + "Total number of female graduates with that major: " + employedWomen[i]);
      setProperty("screen3Title", "text", "Here are some statistics about " + jobs[i] + "!");
    }
}
}
// Event handlers for job buttons
// Each button click displays information about the corresponding job
//Attempted to use a look to complete this task, but it did not properly display the information
onEvent("button1", "click", function() {
    informationDisplayer(getProperty("button1", "text"));
});

onEvent("button2", "click", function() {
    informationDisplayer(getProperty("button2", "text"));
});

onEvent("button3", "click", function() {
    informationDisplayer(getProperty("button3", "text"));
});
onEvent("button4", "click", function() {
    informationDisplayer(getProperty("button4", "text"));
});
onEvent("button5", "click", function() {
    informationDisplayer(getProperty("button5", "text"));
});
onEvent("button6", "click", function() {
    informationDisplayer(getProperty("button6", "text"));
});
onEvent("button7", "click", function() {
    informationDisplayer(getProperty("button7", "text"));
});
onEvent("button8", "click", function() {
    informationDisplayer(getProperty("button8", "text"));
});
onEvent("button9", "click", function() {
    informationDisplayer(getProperty("button9", "text"));
});
onEvent("button10", "click", function() {
    informationDisplayer(getProperty("button10", "text"));
});
onEvent("button11", "click", function() {
    informationDisplayer(getProperty("button11", "text"));
});
onEvent("button12", "click", function() {
    informationDisplayer(getProperty("button12", "text"));
});
onEvent("button13", "click", function() {
    informationDisplayer(getProperty("button13", "text"));
});
onEvent("button14", "click", function() {
    informationDisplayer(getProperty("button14", "text"));
});
onEvent("button15", "click", function() {
    informationDisplayer(getProperty("button15", "text"));
});
onEvent("button16", "click", function() {
    informationDisplayer(getProperty("button16", "text"));
});
onEvent("button17", "click", function() {
    informationDisplayer(getProperty("button17", "text"));
});
onEvent("button18", "click", function() {
    informationDisplayer(getProperty("button18", "text"));
});
onEvent("button19", "click", function() {
    informationDisplayer(getProperty("button19", "text"));
});
onEvent("button20", "click", function() {
    informationDisplayer(getProperty("button20", "text"));
});
onEvent("button21", "click", function() {
    informationDisplayer(getProperty("button21", "text"));
});
onEvent("button22", "click", function() {
    informationDisplayer(getProperty("button22", "text"));
});
onEvent("button23", "click", function() {
    informationDisplayer(getProperty("button23", "text"));
});
onEvent("button24", "click", function() {
    informationDisplayer(getProperty("button24", "text"));
});
onEvent("button25", "click", function() {
    informationDisplayer(getProperty("button25", "text"));
});
onEvent("button26", "click", function() {
    informationDisplayer(getProperty("button26", "text"));
});
onEvent("button27", "click", function() {
    informationDisplayer(getProperty("button27", "text"));
});
onEvent("button28", "click", function() {
    informationDisplayer(getProperty("button28", "text"));
});
onEvent("button29", "click", function() {
    informationDisplayer(getProperty("button29", "text"));
});
onEvent("button30", "click", function() {
    informationDisplayer(getProperty("button30", "text"));
});

// Event handlers for navigation buttons
onEvent("backButton", "click", function () {
  setScreen("screen2");
});
onEvent("backButton1", "click", function () {
  setScreen("screen1");
 setProperty("majorOptions",  "text", "Select a Major Category ...");

});
onEvent("homeButton", "click", function () {
  setScreen("screen1");
 setProperty("majorOptions",  "text", "Select a Major Category ...");

});
onEvent("moreJobs", "click", function () {
  if (filteredJobs.length > 20) {
    setProperty("moreJobs2", "hidden", false);
  } else {
     setProperty("moreJobs2", "hidden", true);
  }
  setScreen("screen4");

});
onEvent("backButton2", "click", function () {
  setScreen("screen2");
});
onEvent("backButton3", "click", function () {
  setScreen("screen4");
});
 onEvent("moreJobs2", "click", function () {
  setScreen("screen5");
});   


