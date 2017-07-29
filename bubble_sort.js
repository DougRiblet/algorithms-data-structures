
//https://github.com/kuychaco/algoClass/blob/master/sorting-algorithms/bubble.js
// *** Description
// Iterate over array, comparing adjacent items and swap if in incorrect order.
// Largest elements bubble to the end of the array
// *** Exercises
// - Implement bubble sort
// - Identify time complexity
// *** Optimizations:
// - Make algorithm adaptive (if at any point array is already sorted, 
// exit function early). After doing this, what is time complexity 
// for nearly sorted arrays?
// - For each pass through the array, are you doing 
// any unnecessary checking of elements? Minimize checking 
// and consider the effect on time complexity.

function bubbleSort (input) {
  let cutoff = input.length-1;
  while (cutoff > 0) {
    let newco = 0;
    for (let x=0; x<cutoff; x++) {
      if (input[x] > input[x+1]) {
        let temp = input[x];
        input[x] = input[x+1];
        input[x+1] = temp;
        newco = x;
      }
    }
    cutoff = newco;
  }
  return input;
}
// Time complexity for bubble sort: quadratic ... O(n^2)

// Optimizations:
// 1. Each pass stops checking at index of final swap of previous pass
// 2. If a pass registers zero swaps, while loop ends and function returns
// Time complexity for nearly sorted arrays approaches linear ... O(n)

