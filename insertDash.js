
function insertDash(number){
	var string = number.toString();
	var dashedString = ' ';
	var j=0;
	for(let i=0;i<string.length-1;i++){
		if(isEven(parseInt(string[i]))&& isEven(parseInt(string[i+1]))){	
        	dashedString+=string[i]+'-';
		}
		else{
			dashedString+=string[i];
		}
		if(i+1 == string.length-1){
			dashedString +=string[i+1];
		}
	}
	
	return dashedString;
}


function isEven(number){
	if(number%2 == 0){
		return true;
	}
	else 
		return false;
}