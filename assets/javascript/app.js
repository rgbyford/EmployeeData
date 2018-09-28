 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBBlG2SU8Qzuy6Z920uXu3yBbyqOEpkvBM",
    authDomain: "timesheet-929de.firebaseapp.com",
    databaseURL: "https://timesheet-929de.firebaseio.com",
    projectId: "timesheet-929de",
    storageBucket: "timesheet-929de.appspot.com",
    messagingSenderId: "951021426648"
  };
  firebase.initializeApp(config);
var database = firebase.database();

var name="";
var role="";
var startDate="";
var monthlyRate=0;

$("#submitB").on("click", function (event) {
    event.preventDefault();

    name=$("#inputName").val().trim();
    role=$("#inputRole").val().trim();
    startDate=$("#inputStartDate").val().trim();
    monhtlyRate=$("#inputMonthlyRate").val().trim();

    database.ref().push({
        name:name,
        role:role,
        startDate:startDate,
        dateAdded: firebase.databse.ServerValue.TIMESTAMP
    });

});

database.ref().on("child_added", function(snapshot){

    
})