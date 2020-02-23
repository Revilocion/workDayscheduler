//Date right here
var today = new Date();

var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

document.getElementById("currentDay").textContent = date;

var clock = moment().format();
var hour = moment().hours();
var time = moment();
console.log(hour);
console.log(time);
console.log(clock);

/*for (i = 9; i <= 17; i++){
  if()
}

var divValue = ("#button-"+i).val();
if(divValue === i){
  $("#result").html(<div style="background-color:blue"/>)
}
*/
console.log("Before the test");
//saving the inputs below.

//The line below should be
var textBox1 = document.getElementById("taskEight").value;
console.log(textBox1);
var textbox2 = document.getElementById("taskNine").value;

var saveClick = document.getElementById("save");

console.log("here is the test");

function saving() {
  //var chores = $(this).val();
  var newVar = $(".description").val();
  console.log(newVar);

  localStorage.setItem("chores", newVar);



  var varStorage = localStorage.getItem("chores");
  $(".description").text(varStorage);
}

console.log("can you see me?");
