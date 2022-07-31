const animations = [];


export function getInsertionSortAnimations(array) {
    
    insertionSort(array);
    console.log(array)
    return animations;
}

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
	  let currentValue = arr[i]
	  let j
	  for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
		animations.push([j, i]);
        animations.push([j, i]);
        animations.push([j, arr[j+1]]);
        animations.push([j+1, arr[j]]);
		arr[j + 1] = arr[j]
	
	  }
	  arr[j + 1] = currentValue
	}
  }