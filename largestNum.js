

function findLargest(arr){
	var largeNum = Number.MIN_VALUE;
	for(let element of arr){
		if(element>largeNum){
			largeNum = element;
		}
	}
	return largeNum;
}
