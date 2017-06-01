// number 1-1
var test = 5;
var test2 = 4;
console.log("addition", test + test2);

// number 1-2
var name = "Hello";
var name2 = "World";
console.log("name:", name, name2);

// number 2
var movies = ["Star Wars", "MCU", "Gladiator"];
var food = ["Korean", "Japanese", "Italian"];
var fav = [movies, food];
console.log("I like:", fav[0][0]);
console.log("I like", fav[1][0] + " food");

// number 3
var chosenNumber = "107";
alert = "You have chose number less than 100."
alert_2 = "You have chose number more than 100."
if (chosenNumber < 100){
  console.log(alert);
} else {
  console.log(alert_2);
}

// number 6
jedi = "Obi-wan"
function hope() {
  console.log("You're our only hope,", jedi);
};
hope(jedi);

// number 7
smartPhone = "iPhone 100"
function newPhone (smartPhone) {
  console.log("I need a new phone.");
};
newPhone();

// number 8
function doorPrize(door) {
  console.log("==doorPrize==");
  var door1 = "$10"
  var door2 = "$500"
  var door3 = "$1,000"

  if (door == "door1") {
    var prize = door1;
  } else if (door == "door2") {
    var prize = door2;
  } else if (door == "door3") {
    var prize = door3;
  } else {
    var prize = "$0";
  };
  console.log("Your prize is ", prize);
};
doorPrize("door2");
