var obj ={
"One":"1",
"Two":"2",
"Three":"3",
"Four":"4"
};

var jsonObj = JSON.stringify(obj);

function getJsArray(argObj){
	var obj = JSON.parse(argObj);
	var objValues = Object.values(obj);
	return JSON.stringify(objValues)
}

console.log(getJsArray(jsonObj));