var letter = "c";
var string = "cricket";

function countLetter(string,letter){
	var count=0;
	for(let i =0;i<string.length;i++){
		if(string[i]==letter){
			count++;
		}
	}
	return count;
}

console.log(countLetter(string,letter));