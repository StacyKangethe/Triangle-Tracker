var triangle = function() {
  var a = parseInt(prompt("Enter the first length of the triangle:"));
  var b = parseInt(prompt("Enter the second length of the triangle:"));
  var c = parseInt(prompt("Enter the third length of the triangle:"));
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
