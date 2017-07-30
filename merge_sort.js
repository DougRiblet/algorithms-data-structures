// https://github.com/kuychaco/algoClass/blob/master/sorting-algorithms/merge.js
// *** Description
// Merge sort employs a divide and conquer strategy --
// merge two sorted subarrays into one sorted array.

// Recursive top-down approach:
// Recursively break down array into two subarrays and sort them recursively. 
// Subarrays are broken down until they have only 1 element
// (implying they are sorted).

function mergeSortRec(arr){
  if (arr.length<2) { return arr; }
  let p = Math.floor(arr.length/2);
  let aa = arr.slice(0,p);
  let bb = arr.slice(p);
  return merge(mergeSortRec(aa), mergeSortRec(bb));
}
// Time complexity for merge sort recursive: logarithmic ... O(n log(n))

// Iterative bottom-up approach:
// Split array into sublists of size 1, merge adjacent sublists
// into sorted lists, repeat until no more sublists.

function mergeSortItv(arr){
  let arrOfArrs = arr.map(x=>[x]);
  while (arrOfArrs.length > 1) {
    let newArrOfArrs = [];
    for (let i=0; i<arrOfArrs.length; i+=2){
      if (arrOfArrs[i+1]) {
        newArrOfArrs.push(merge(arrOfArrs[i],arrOfArrs[i+1]));
      } else {
        newArrOfArrs.push(arrOfArrs[i]);
      }
    }
    arrOfArrs = newArrOfArrs;
  }
  return arrOfArrs[0];
}
// Time complexity for merge sort iterative: logarithmic ... O(n log(n))

// Merge (helper) function used by both recursive and iterative approaches:

function merge(cc,dd){
  let recom = [];
  while (cc.length && dd.length){
    if (cc[0] > dd[0]) {
      recom.push(dd.shift()); 
    }
    else { 
      recom.push(cc.shift()); 
    }
  }
  if (cc.length) {recom = recom.concat(cc);}
  if (dd.length) {recom = recom.concat(dd);}
  return recom;
}
