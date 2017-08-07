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

// Optional helper method:
HashTable.prototype.find = function(key) {
  // implement me...
  return {
    match: match,
    bucket: bucket,
    matchIndex: matchIndex
  };
};

HashTable.prototype.set = function(key, value) {
  let index = simpleHash(key, this._size);
  let newObj = {};
  newObj[key] = value;
  if (!this._storage[index]) {
    this._storage[index] = [newObj]
  } else {
    this._storage[index].push(newObj);
  }
  this.howmany++;
};
// Time complexity for set: amortized constant ... O(1) 
// amortized = extra time if set requires hash table resizing

HashTable.prototype.get = function(key) {
  let index = simpleHash(key, this.capacity);
  if (this._storage[index] !== undefined){
    for (let x=0; x<this._storage[index].length; x++){
      if (this._storage[index][x][0] === key) {
        return this._storage[index][x][1];
      }
    }
  }
};
// Time complexity for get: constant ... O(1)

HashTable.prototype.has = function(key) {
  let index = simpleHash(key, this.capacity);
  if (this._storage[index] !== undefined){
    for (let x=0; x<this._storage[index].length; x++){
      if (this._storage[index][x][0] === key) {
        return true;
      }
    }
  }
  return false;
};
// Time complexity for has: constant ... O(1)

HashTable.prototype.delete = function(key) {
  let index = simpleHash(key, this.capacity);
  if (this._storage[index] !== undefined){
    for (let x=0; x<this._storage[index].length; x++){
      if (this._storage[index][x][0] === key) {
        this._storage[index].splice(x,1);
        if (this._storage[index].length === 0) {
          this._storage[index] = undefined;
        }
        this.howmany--;
        return true;
      }
    }
  }
  return false;
};
// Time complexity for delete: constant ... O(1)

HashTable.prototype.count = function() {
  return this.howmany;
};
// Time complexity for count: constant ... O(1)

HashTable.prototype.forEach = function(callback) {
  this._storage.forEach(function(bin){
    if (bin !== undefined){
      bin.forEach(function(tuple){
        callback(tuple);
      })
    }
  })
};
// Time complexity for forEach: linear ... O(n)

