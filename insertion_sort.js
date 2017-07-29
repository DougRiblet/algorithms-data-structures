
// https://github.com/kuychaco/algoClass/blob/master/sorting-algorithms/insertion.js
// *** Description
// Iterate over array and grow a sorted array behind current element.
// For each position, compare value of element with previous elements
// and swap positions if previous element is larger.
// *** Exercises
// - Implement insertion sort for array of numbers
// - Identify time complexity
// - Modify function to take comparator function. specify default if not 
//   provided (check out native Array.sort comparator function for reference)
// - Use your comparator function to verify that your sort is stable by 
//   taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

// BASIC VERSION

function insertionSort (input) {
  let curr = 1;
  while(curr < input.length){
    let c = curr;
    for (let j=curr-1; j>=0; j--){
      if (input[j] > input[c]){
        let temp = input[j];
        input[j] = input[c];
        input[c] = temp;
        c--;
      } else {
        break;
      }
    }
    curr++;
  }
  return input;
}

