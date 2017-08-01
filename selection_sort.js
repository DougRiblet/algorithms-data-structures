//https://github.com/kuychaco/algoClass/blob/master/sorting-algorithms/selection.js

// Iterate over array and grow a sorted array behind current element.
// For each position, find the smallest element in unsorted subarray 
// starting at that position, and swap elements so that smallest 
// element is at the beginning of unsorted subarray.

function selectionSort(arr) {
  for (let i=0; i<arr.length-1; i++){
    let lowvalue = arr[i];
    let lowindex = i;
    for (let j=i+1; j<arr.length; j++){
      if (arr[j] < lowvalue){
        lowvalue = arr[j];
        lowindex = j;
      }
    }
    if (lowindex !== i){
      let temp = arr[i];
      arr[i] = arr[lowindex];
      arr[lowindex] = temp;
    }
  }
  return arr;
}
// Time complexity for selection sort: quadratic ... O(n^2)
