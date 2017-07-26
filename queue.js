// https://github.com/kuychaco/algoClass/blob/master/data-structures/queue.js
// DO NOT use an array and the native push/shift method in your implementation.
// Use an object as the underlying data structure.

// Constructor for queue with capacity limit

function Queue(capacity) {
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.front = 1;
  this.end = 1;
}

// Methods for queue; time complexity noted after each

Queue.prototype.enqueue = function(value) {
  if (this.end - this.front < this.capacity) {
    this.storage[String(this.end)] = value;
    this.end++
    return this.end - this.front;
  }
  return "Max capacity already reached. Remove element before adding a new one."
};
// Time complexity for enqueue: constant ... O(1)

Queue.prototype.dequeue = function() {
  if (this.storage[String(this.front)]) {
    let dqItem = this.storage[String(this.front)];
    delete this.storage[String(this.front)];
    this.front++
    return dqItem;
  }
};
// Time complexity for dequeue: constant ... O(1)

Queue.prototype.peek = function() {
  return this.storage[String(this.front)];
};
// Time complexity for peek: constant ... O(1)

Queue.prototype.count = function() {
  return this.end - this.front;
};
// Time complexity for count: constant ... O(1)

Queue.prototype.contains = function(value) {
  let answer = false;
  for (let key in this.storage) {
    if (this.storage[key] === value) {
      answer = true;
      break;
    }
  }
  return answer;
}
// Time complexity for contains: linear ... O(n)

Queue.prototype.until = function(value) {
  let spot;
  for (let k=this.front; k<=this.end; k++){
    if (this.storage[String(k)] === value) {
      spot = k;
      break;
    }
  }
  return spot ? spot + 1 - this.front : null;
}
// Time complexity for until: linear ... O(n)

