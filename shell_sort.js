
function shellSort(arr){

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