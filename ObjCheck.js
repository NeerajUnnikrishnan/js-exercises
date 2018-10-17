	var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

function findProgrammer(myObj){
	var returnObj=[];
	for(let i=0;i<myObj.length;i++){
		if(myObj[i].occupation == "Programmer"){
			returnObj.push(myObj[i]);
		}
	}
	return returnObj;
}




function uniqueValues(objectList) {
	var set = new Set();var set = new Set();
 for(let obj of objectList){
 	set.add(obj.occupation);
 }
 return Array.from(set);
}

//console.log(uniqueValues(myObj));

// function groupObjByValue(objectList,valueSet){
// 	var valueSet = uniqueValues(myObj);
// 	var groupedObj = {};

// 	for(let i =0;i<valueSet.length;i++){
// 		groupedObj.valueSet[i] = [];
// 		var valueObj = [];
// 		for(let j=0;j<objectList.length;j++){
// 			if(objectList[j].occupation == valueSet[i]){
// 				valueObj.push(objectList[j]);
// 				console.log(objectList[j]);
// 			}
// 		}
// 		groupedObj.valueSet[i].push(valueObj);
// 	}
// 	return groupedObj;
// }

newObj = myObj.reduce(function(acc, item) {  
  var key = item.occupation == 'Programmer' ? 'Programmer' : 'Team Leader';
  acc[key] = acc[key] || [];
  acc[key].push(item);
  return acc;
}, {});

console.log(newObj);

function getNames(myObj){
	var nameObj=[];
	return myObj.map(getObjName);
}

function getObjName(object){
	return object.name;
}
//console.log(getNames(myObj));