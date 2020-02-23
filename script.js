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



console.log("Before the test");
//saving the inputs below.

//The line below should be
var textBox1 = document.getElementById("taskEight").value;
console.log(textBox1);
var textbox2 = document.getElementById("taskNine").value;

var saveClick = document.getElementById("save");

console.log("here is the test");


function save1() {
  var line1 = $(".first").val();
  console.log(line1);

  localStorage.setItem("chore1", line1);

  var varStorage = localStorage.getItem("chore1");
  $(".description").text(varStorage);
}


console.log("can you see me?");

function save2() {
  var line2 = $(".second").val();
  console.log(line2);

  localStorage.setItem("chore2", line2);

  var varStorage = localStorage.getItem("chore2");
  $(".second").text(varStorage);
}

function save3() {
  var line3 = $(".third").val();
  console.log(line3);

  localStorage.setItem("chore3", line3);

  var varStorage = localStorage.getItem("chore3");
  $(".third").text(varStorage);
}

function save4() {
  var line4 = $(".fourth").val();
  console.log(line4);

  localStorage.setItem("chore4", line4);

  var varStorage = localStorage.getItem("chore4");
  $(".fourth").text(varStorage);
}

function save5() {
  var line5 = $(".fifth").val();
  console.log(line5);

  localStorage.setItem("chore5", line5);

  var varStorage = localStorage.getItem("chore5");
  $(".fifth").text(varStorage);
}

function save6() {

  var line6 = $(".sixth").val();
  console.log(line6);

  localStorage.setItem("chore6", line6);

  var varStorage = localStorage.getItem("chore6");
  $(".sixth").text(varStorage);
}

function save7() {

  var line7 = $(".seventh").val();
  console.log(line7);

  localStorage.setItem("chore7", line7);

  var varStorage = localStorage.getItem("chore7");
  $(".seventh").text(varStorage);
}

function save8() {

  var line8 = $(".eighth").val();
  console.log(line8);

  localStorage.setItem("chore8", line8);

  var varStorage = localStorage.getItem("chore8");
  $(".eighth").text(varStorage);
}

function save9() {

  var line9 = $(".ninth").val();
  console.log(line9);

  localStorage.setItem("chore9", line9);

  var varStorage = localStorage.getItem("chore9");
  $(".ninth").text(varStorage);
}

function save10() {

  var line10 = $(".tenth").val();
  console.log(line10);

  localStorage.setItem("chore10", line10);

  var varStorage = localStorage.getItem("chore10");
  $(".tenth").text(varStorage);
}

function save11() {

  var line11 = $(".eleventh").val();
  console.log(line10);

  localStorage.setItem("chore11", line11);

  var varStorage = localStorage.getItem("chore11");
  $(".eleventh").text(varStorage);
}


var div1 = $("#taskEight");
if (div1 === 8) {
  $("#taskEight").html("<div style='background-color:red' />")
} else {
  $("#taskEight").html("<div style='background-color:bisque' />")
};

var div2 = $("#taskNine");
if (div2 === 9) {
  $("#taskNine").html("<div style='background-color:red' />")
} else {
  $("#taskNine").html("<div style='background-color:bisque' />")
};

var div3 = $("#taskTen");
if (div3 === 10) {
  $("#taskTen").html("<div style='background-color:red' />")
} else {
  $("#taskTen").html("<div style='background-color:bisque' />")
};

var div4 = $("#taskEleven");
if (div4 === 11) {
  $("#taskEleven").html("<div style='background-color:red' />")
} else {
  $("#taskEleven").html("<div style='background-color:bisque' />")
};

var div5 = $("#taskTwelve");
if (div5 === 12) {
  $("#taskTwelve").html("<div style='background-color:red' />")
} else {
  $("#taskTwelve").html("<div style='background-color:bisque' />")
};

var div6 = $("#taskThirteen");
if (div6 === 1) {
  $("#taskThirteen").html("<div style='background-color:red' />")
} else {
  $("#taskThirteen").html("<div style='background-color:bisque' />")
};


var div7 = $("#taskFourteen");
if (div7 === 2) {
  $("#taskFourteen").html("<div style='background-color:red' />")
} else {
  $("#taskFourteen").html("<div style='background-color:bisque' />")
};

var div8 = $("#taskFifteen");
if (div8 === 3) {
  $("#taskFifteen").html("<div style='background-color:red' />")
} else {
  $("#taskFifteen").html("<div style='background-color:bisque' />")
};

var div9 = $("#tasksixteen");
if (div9 === 4) {
  $("#tasksixteen").html("<div style='background-color:red' />")
} else {
  $("#tasksixteen").html("<div style='background-color:bisque' />")
};

var div10 = $("#taskSeventeen");
if (div10 === 5) {
  $("#taskSeventeen").html("<div style='background-color:red' />")
} else {
  $("#taskSeventeen").html("<div style='background-color:bisque' />")
};