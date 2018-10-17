var arr = [1,2	,2,3,3,5,6,4,3,6,2,4,2,2,4,5];


function removeDuplicates(arr){
	var set = new Set(arr);
	var returnArr = Array.from(set);
	return returnArr;
}

console.log(removeDuplicates(arr));