
var email = "spideyanantu@gmail.com";
var regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

var pattern = regExp.exec(email);

console.log(pattern);