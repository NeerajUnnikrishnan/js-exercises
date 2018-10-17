var obj = ['sick','dog','cat',"dfdf"];


function sortArray(obj){
	obj.sort(function(a,b){return a.localeCompare(b); });
	return obj;
}
console.log(sortArray(obj));