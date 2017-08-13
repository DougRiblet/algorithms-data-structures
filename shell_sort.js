
function shellSort(arr){
  let seq = generateSequence(arr.length);

  while(seq.length > 0){
    let v = seq.pop();

    for (let i=0; i<v; i++){
      



      
    }

  }



}

function swap(arr, j, k){
  let temp = arr[j];
  arr[j] = arr[k];
  arr[k] = temp;
}

function generateSequence(num){
  let pool = [];
  let high = num / 2.5;
  for (let x=1; x<Math.sqrt(num); x++){
    let el = Math.pow(2,x) - 1;
    if (el < high) {
      pool.push(el);
    } else {
      break;
    }
  }
  return pool;
}