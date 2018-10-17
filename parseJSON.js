var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';



function parseJSON(string){
	var Obj = JSON.parse(string);
	return Obj.jason;
}

console.log(parseJSON(jsonStr));