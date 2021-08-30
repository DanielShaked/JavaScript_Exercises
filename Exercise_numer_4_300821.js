const grades = [70, 98, 82, 95, 65];

// here i slove it only by Function.
function gradeRange(grades) {
	let checkRange = grades.slice();
	checkRange.sort(function (x, y) {
		return x - y;
	});
	let lowestGrade = checkRange[0]; // first index after .sort == lowest !!
	let highestGrade = checkRange[checkRange.length - 1]; // last index after .sort == highest!!
	let gradeRangeNum = highestGrade - lowestGrade; // find the range.
	return gradeRangeNum;
}

console.log("Stats: \n" + "Range: " + gradeRange(grades));

// here i slove it only by Function.
function medianGrade(grades) {
	let checkMedian = grades.slice();
	checkMedian.sort(function (x, y) {
		return x - y;
	});
	return checkMedian[Math.floor(checkMedian.length / 2)];
}
console.log("\nMedian: " + medianGrade(grades));

// here i want to use also loop statmesnt if/else - i can do it also with only a function.
function rangeFromHalf(grades) {
	let middleTime;
	if (grades.length % 2 == 1) {
		middleTime = (grades.length - 1) / 2;
	} else {
		middleTime = grades.length / 2;
	}
	let newArray = [];
	for (let i = middleTime; i < grades.length; i++) {
		newArray.unshift(grades[i]);
	}
	return gradeRange(newArray);
}
console.log("\nHalfRange: " + rangeFromHalf(grades));
