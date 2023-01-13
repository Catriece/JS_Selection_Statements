console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let favoriteNumber = 17;
let answer = window.prompt("I'm thinking of a number between 1 and 100...");


if (answer > favoriteNumber) {
  console.log('too high')
} else if (answer < favoriteNumber) {
  console.log('too low')
} else if (answer > 100) {
  console.log("invalid input.. try again!")
} else {
  console.log('Congratulations!!!')
}

// Exercise 2

let birthMonth = window.prompt('What is your birth month?')

switch (birthMonth.toLowerCase()) {
  case "december":
  case "january":
  case "february":
    console.log("Northern hemisphere? You were born in the winter! Southern hemisphere? You were born in the summer!");
    break;
  case "march":
  case "april":
  case "may":
    console.log("Northern hemisphere? You were born in the spring! Southern hemisphere? You were born in the fall!");
    break;
  case "june":
  case "july":
  case "august":
    console.log("Northern hemisphere? You were born in the summer! Southern hemisphere? You were born in the winter!");
    break;
  case "september":
  case "october": 
  case "november":
    console.log("Northern hemisphere? You were born in the fall! Southern hemisphere? You were born in the spring!");
    break;
  default:
    console.log("Input a valid month");
}

// Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default: 
    type = "Other";
    break;
}

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
    break;
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
    break;
}

console.log(`Product: ${size} ${color} ${type}`);