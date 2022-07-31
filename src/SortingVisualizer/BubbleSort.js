const animations = [];


export function getBubbleSortAnimations(array) {
    
    bubbleSort(array);
    return animations;
}


function bubbleSort(arr){
   
  var i, j;
  var len = arr.length;
   
  var isSwapped = false;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
        if (arr[j] > arr[j + 1]) {
            animations.push([j, j+1]);
            animations.push([j, j+1]);
            animations.push([j, arr[j+1]]);
            animations.push([j+1, arr[j]]);
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;

        }
    }
}
console.log(arr)
return animations;


}

 
