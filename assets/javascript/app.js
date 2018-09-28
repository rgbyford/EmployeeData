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

function displayTrain(data) {
    const info = monthsGet(data);
    return `<tr >
                <td>${data.name}</td>
                <td>${data.role}</td>
                <td>${data.startDate}</td>
                <td>${info.months}</td>
                <td>${data.monthlyRate}</td>
                <td>${info.totalBill}</td>
            </tr>`;
 }

 function monthsGet(data){
     var date=data.startDate;
     console.log(date);
     var format="MM/DD/YYY";
     var convertedDate=moment(date, format);

     console.log(convertedDate);
     var months=moment().diff(moment(convertedDate), "months");
     var totalBill=data.monthlyRate * months;

     return {
         months,
         totalBill
 };
}


$("#submitB").on("click", function (event) {
    event.preventDefault();

    name=$("#inputName").val().trim();
    role=$("#inputRole").val().trim();
    startDate=$("#inputStartDate").val().trim();
    monthlyRate=$("#inputMonthlyRate").val().trim();

    database.ref().push({
        name:name,
        role:role,
        startDate:startDate,
        monthlyRate: monthlyRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    $("#inputName").val("");
    $("#inputRole").val("");
    $("#inputStartDate").val("");
    $("#inputMonthlyRate").val("");

});

database.ref().on("child_added", function(snapshot){

    var data=snapshot.val();


    console.log(data.name);
    console.log(data.role);
    console.log(data.startDate);
    console.log(data.dataAdded);

   // $("#tableBody").
        
   $("tbody").append(displayTrain(data));


})
