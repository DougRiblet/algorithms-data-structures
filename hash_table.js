// https://github.com/kuychaco/algoClass/blob/master/data-structures/hashTable.js
/*
HASH TABLE
Collection of key-value pairs.
Map keys to values for efficient lookup.
Use an array as the underlying data structure.
Hash table should have a size - this will be used by the hashing function to determine what index to map the key to.
A hashing function is used to map the key to an integer, which is the index that the value is to be stored at.
Since our hashing function might map multiple keys to the same integer, we have to deal with collisions by creating buckets at each index of the _storage array. These buckets can be arrays or linked lists.
*/

// Simple hashing function to use in your implementation
// http://pmav.eu/stuff/javascript-hashing-functions/source.html
function simpleHash(str, tableSize) {
  var hash = 0;
  for (var i=0; i<str.length; i++) {
    hash += str.charCodeAt(i) * (i+1);
  }
  return hash % tableSize;
}

// EXERCISES: Implement constructor and methods

function HashTable(capacity) {
  this._size = capacity;
  this._storage = new Array(capacity);
  this._count = 0;
}

// Notes: In this implementation, _storage will be an array, each bucket will be
// an array, and items inside buckets will be objects with single key-value pair

// Optional helper method 'find':
// (a) finds hash value for this key, points to correct bucket;
// (b) determines if this key has already been stored; 
//     - if yes, points to the existing matched object and its index in bucket;
//     - if no, match and matchIndex will be undefined

HashTable.prototype.find = function(key) {
  let index = simpleHash(key, this._size);
  if (!this._storage[index]) { this._storage[index] = [] }
  let match, matchIndex, bucket = this._storage[index];

  for (let j=0; j<bucket.length; j++){
    if (bucket[j].hasOwnProperty(key)){
      match = bucket[j];
      matchIndex = j;
    }
  }

  return {match, bucket, matchIndex};
};

// Method 'set': change value for existing key, or add new key-value pair

HashTable.prototype.set = function(key, value) {
  let {match, bucket} = this.find(key);
  if (match) {
    match[key] = value;
  } else {
    let newObj = {};
    newObj[key] = value;
    bucket.push(newObj);
    this._count++;
    // call resize function here if needed
  }
  return this;
};
// Time complexity for set: amortized constant ... O(1) 
// amortized = extra time if set requires hash table resizing

HashTable.prototype.get = function(key) {
  let {match} = this.find(key);
  return match ? match[key] : undefined;
};
// Time complexity for get: constant ... O(1)

HashTable.prototype.has = function(key) {
  return Boolean(this.find(key).match);
};
// Time complexity for has: constant ... O(1)

HashTable.prototype.delete = function(key) {
  let {match, bucket, matchIndex} = this.find(key);
  if (match){
    bucket.splice(matchIndex,1);
    this._count--;
    // call resize function here if needed
  }
  return Boolean(match);
};
// Time complexity for delete: amortized constant ... O(1)
// amortized = extra time if delete requires hash table resizing

HashTable.prototype.count = function() {
  return this._count;
};
// Time complexity for count: constant ... O(1)

HashTable.prototype.forEach = function(callback) {
  this._storage.forEach(function(bucket){
    if (bucket){
      bucket.forEach(function(tuple){
        callback(tuple);
      });
    }
  });
};
// Time complexity for forEach: linear ... O(n)

HashTable.prototype.resize = function(newSize){
  let temp_storage = this._storage;

  this._size = newSize;
  this._count = 0;
  this._storage = new Array(newSize);

  let currht = this;
  temp_storage.forEach(function(bucket){
    if (bucket) {
      bucket.forEach(function(tuple){
        for (let key in tuple){
          currht.set(key, tuple[key]);
        }
      });
    }
  });
}
// Time complexity for resize: linear ... O(n)
