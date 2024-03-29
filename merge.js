var arr = [6,5,3,1,8,7,2,4]

console.log("Original: ", arr)

//Merge sort using recursion
function mergeSortRecursion(unsortedArray) {
	//There's no need to split/merge if there's only one element
	if (unsortedArray.length <= 1)
	{
		return unsortedArray;
	}

	//Now we divide the array in half
	//we first need to find the middle point
	//We use Math.floor to avoid decimals in an odd length array
	const midPoint = Math.floor(unsortedArray.length / 2);

	//Now we get the left and right part of the array
	const leftArr = unsortedArray.slice(0, midPoint);
	const rightArr = unsortedArray.slice(midPoint);

	//Now we merge the two arrays using recursion to keep finding the left and right array.
	return mergeTwoArrays(mergeSortRecursion(leftArr), mergeSortRecursion(rightArr));
}

//Merge two arrays assuming both is already organized
function mergeTwoArrays(leftArr, rightArr) {
	console.log("Merging: ", leftArr, rightArr)
	//We first make an var where we push the values into from the both array.
	let resultArray = [];
	//We also make two more index keeping track of the position of left and right array
	//Since both arrays are organized, we'll move from the smallest number to the largest.
	let leftIndex = 0, rightIndex = 0;

	//We will keep merging as long as there's still numbers from any of the array unadded
	while (leftIndex < leftArr.length &&
			rightIndex < rightArr.length)
	{
		//If the value on the left array is lower, we add that one into the result
		if (leftArr[leftIndex] < rightArr[rightIndex])
		{
			console.log("Left is Smaller, we add ", leftArr[leftIndex], "from index", leftIndex)
			resultArray.push(leftArr[leftIndex]);
			leftIndex++; //Since we added the value from left index, lets increment it.
		} //Otherwise, we add in the value of the right array.
		else
		{
			console.log("Right is Smaller, we add ", rightArr[rightIndex], "from index", rightIndex)
			resultArray.push(rightArr[rightIndex]);
			rightIndex++; //Since we added the value from right index, lets increment it.
		}
	}

	console.log("After while, LeftIndex: ", leftIndex, " RightIndex: ", rightIndex)

	//However once one side is all finished, the other array is untouched
	//So lets start by checking if it's the left side undefined and add it to the result
	if (leftArr[leftIndex])
	{	
		//We first start by getting all the unadded elements on the left
		var unaddedElements = leftArr.slice(leftIndex)
		console.log("Left unadded: ", unaddedElements)
		//Then we push in the unadded elements using the spread operator
		resultArray.push(...unaddedElements); 
	} //If it's not left, then it's for sure the right array
	else
	{
		//We first start by getting all the unadded elements on the right
		var unaddedElements = rightArr.slice(rightIndex)
		console.log("Right unadded: ", unaddedElements)
		//Then we push in the unadded elements using the spread operator
		resultArray.push(...unaddedElements); 
	}

	console.log("Final Arr: ", resultArray);
	console.log(""); //Creating an empty Line break for easy of eye in console
	return resultArray;
}

var result = mergeSortRecursion(arr);
console.log("Result:", result);