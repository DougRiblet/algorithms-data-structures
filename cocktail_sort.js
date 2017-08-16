
// https://github.com/kuychaco/algoClass/blob/master/sorting-algorithms/bubble.js

// Cocktail Sort = variant of Bubble Sort
// Implement cocktail sort (for each pass find both min and max values
//   and sort in both directions). How does this impact performance?



// function bubbleSort (input) {
//   let cutoff = input.length-1;
//   while (cutoff > 0) {
//     let newco = 0;
//     for (let x=0; x<cutoff; x++) {
//       if (input[x] > input[x+1]) {
//         let temp = input[x];
//         input[x] = input[x+1];
//         input[x+1] = temp;
//         newco = x;
//       }
//     }
//     cutoff = newco;
//   }
//   return input;
// }
