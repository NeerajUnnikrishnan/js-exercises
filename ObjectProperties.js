var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

function getProperties(Obj){
	return Object.getOwnPropertyNames(Obj);
}


console.log(getProperties(student));