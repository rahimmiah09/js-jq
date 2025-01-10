// ex1
function showText() {
  document.getElementById("st").innerHTML = "HI I AM RAHIM";
}

// ex2
function showDate() {
  document.getElementById("dt").innerHTML = Date();
}

// ex3
function showChange() {
  document.getElementById("ct").innerHTML = "Hi how are you?";
}

// ex4

function bon() {
  document.getElementById("boo").src = "images/pic_bulbon.gif";
}

function boff() {
  document.getElementById("boo").src = "images/pic_bulboff.gif";
}

// ex5
function showChangeCss() {
  document.getElementById("css").style.fontSize = "50px";
}

// ex6

function hideCon() {
  document.getElementById("ht").style.display = "none";
}

function showCon() {
  document.getElementById("ht").style.display = "block";
}

// ex7

var number1 = 30;
var number2 = 70;

var result = number1 + number2;

function showResult() {
  document.getElementById("sr").innerHTML = result;
}

// i am doing js righ here

$(document).ready(function () {
  $("#btnbro").on("click", function () {
    alert("welcome to this page i am rahim ");
  });

  $("#btnsj").on("click", function () {
    $("h3").show();
  });

  $("#btnhj").on("click", function () {
    $("h3").hide();
  });

  $("#btntj").on("click", function () {
    $("h3").toggle();
  });

  $(".toogle").on("click", function () {
    $(".content").slideToggle(350);
  });

  $("#draggable").draggable();
  $("#accordion").accordion({
    collapsible: true,
  });

  var availableTags = ["rahim miah"];
  $("#tags").autocomplete({
    source: availableTags,
  });
});
