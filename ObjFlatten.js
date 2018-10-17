var myObj = [5, [22], [[14]], [[4]],[5,6]];

function flattenObj(myObj){
	return myObj.toString();
}

console.log(flattenObj(myObj).split(","));