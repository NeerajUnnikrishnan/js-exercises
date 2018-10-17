
var arr1 = [1,2,3,4,5,6];

var arr2 = [6,5,4,3,2,1];

function findDifference(arr1,arr2){
	var returnArray=[];	
	for(let i=0;i<arr1.length;i++){
		returnArray[i] = arr1[i]-arr2[i];
	}

	return returnArray;
}

console.log(findDifference(arr1,arr2));