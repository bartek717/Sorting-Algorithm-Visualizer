const animations = [];


export function getSelectionSortAnimations(array) {
    
    selectionSort(array);
    return animations;
}

function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             animations.push([i, min]);
             animations.push([i, min]);
             animations.push([i, inputArr[min]]);
             animations.push([min, inputArr[i]]);
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}
