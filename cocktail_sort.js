
// https://github.com/kuychaco/algoClass/blob/master/sorting-algorithms/bubble.js

// Cocktail Sort = variant of Bubble Sort
// Implement cocktail sort (for each pass find both min and max values
//   and sort in both directions). How does this impact performance?

function cocktailSort(input){
  let cLo = 0, cHi = input.length-1, pass = 1;
  while (cLo < cHi){
    // odd-numbered pass goes left to right
    // even-numbered pass goes right to left
    if (pass % 2 === 1){
      let newcHi = cLo;
      for (let x=cLo; x<cHi; x++){
        if (input[x] > input[x+1]) {
          let temp = input[x];
          input[x] = input[x+1];
          input[x+1] = temp;
          newcHi = x;
        }
      }
      cHi = newcHi;
    } else if (pass % 2 === 0){
      let newcLo = cHi;
      for (let y=cHi; y>cLo; y--){
        if (input[y] < input[y-1]){
          let temp = input[y];
          input[y] = input[y-1];
          input[y-1] = temp;
          newcLo = y;          
        }
      }
      cLo = newcLo;
    }
    pass++;
  }
  return input;
}

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
