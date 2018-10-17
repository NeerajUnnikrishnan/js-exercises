
var Obj = {"David":77,"Divya":87,"Ishitha":97,"Thomas":47};



function average(Obj){
	const values = Object.values(Obj);
	var sum = 0;
	for(value of values ){
		sum = sum +value;
		
	}	
	var avgMarks = sum/Object.keys(Obj).length;
	if(avgMarks<60){
		return "F";
	}
	else if(avgMarks<70){
		return "D";
	}
	else if(avgMarks<80){
		return "C";
	}
	else if(avgMarks<90){
		return "B";
	}
	return "A";

}

console.log(average(Obj));