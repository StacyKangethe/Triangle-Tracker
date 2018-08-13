var firstNumber = parseInt(prompt("Enter the first length of the triangle:"));
var secondNumber = parseInt(prompt("Enter the second length of the triangle:"));
var thirdNumber = parseInt(prompt("Enter the third length of the triangle:"));

var triangle = function(a, b, c) {
  if (a+b <=c || b+c <=a || a+c <=b) {
	alert("Its not a Triangle");
}
else  if (a===b && b===c && c===a) {
alert("Triangle is Equilateral");
}
else if (a==b || b==c || c==a) {
alert("Triangle is Isosceles");
}
else  if (a!=b || b!=c && c!=a) {
alert("Triangle is Scalene");
}
else {
	alert("Invalid Input ");
}

};

triangle(firstNumber, secondNumber, thirdNumber);
