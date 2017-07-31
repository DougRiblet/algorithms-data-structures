
// https://github.com/kuychaco/algoClass/blob/master/sorting-algorithms/quick.js




// My solution from MakerSquare daily toy problems

function quickSort(arr) {
  if (arr.length < 2) { return arr; }
  let pivot = arr[0], left = [], right = [];
  for (let i=1; i<arr.length; i++) {
    if (arr[i] < pivot) { left.push(arr[i]); }
    else { right.push(arr[i]); }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
}




