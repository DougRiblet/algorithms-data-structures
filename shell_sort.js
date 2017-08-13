
function shellSort(arr){
  let sequence = generateSequence(arr.length);

  while(sequence.length > 0){
    let interval = sequence.pop();
    for (let index=0; index<interval; index++){
      let indexPool = [];
      for (let k=index; k<arr.length; k+=interval){
        indexPool.push(k);
      }
      insertionSort(arr, indexPool);
    }
  }

  return arr;

  // helper function to perform Insertion Sort on gapped subarrays
  function insertionSort(arr, indexes){
    let curr = 1
    while(curr < indexes.length){
      let c = curr;
      for (let j=curr-1; j>=0; j--){
        if (arr[indexes[j]] > arr[indexes[c]]){
          swap(arr, indexes[j], indexes[c]);
          c--;
        } else {
          break;
        }
      }
      curr++;
    }
  }

  // helper function to perform swaps
  function swap(arr, j, k){
    let temp = arr[j];
    arr[j] = arr[k];
    arr[k] = temp;
  }

  // helper function to generate sequence of intervals
  //   using formula 2^x-1 ==> [1, 3, 7, 15, 31, 63 ...]
  // https://en.wikipedia.org/wiki/Shellsort#Gap_sequences
  function generateSequence(num){
    let pool = [];
    let high = num / 2.1;
    for (let x=1; x<num; x++){
      let el = Math.pow(2,x) - 1;
      if (el < high) {
        pool.push(el);
      } else {
        break;
      }
    }
    return pool;
  }
}
// Time complexity for shell sort: quadratic ... O(n^2)
