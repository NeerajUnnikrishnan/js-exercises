
var string = "webmaster";

function sortString(string){
	var arr = Array.from(string);
	arr.sort(function(a,b){return a.localeCompare(b)});
	return arr.join(""); 
}

console.log(sortString(string));