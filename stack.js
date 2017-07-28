// https://github.com/kuychaco/algoClass/blob/master/data-structures/stack.js
// DO NOT use an array and the native push/pop method in your implementation.
// Use an object as the underlying data structure.

// Constructor for stack with capacity limit

function Stack(capacity) {
  this.storage = {};
  this.capacity = capacity || Infinity;
  this.topmost = 0;
}

// Methods for stack                                                                                ; time complexity noted after each

Stack.prototype.push = function(value) {
  if (this.topmost < this.capacity) {
    this.storage[String(this.topmost)] = value;
    this.topmost++;
    return this.topmost;
  } else {
    return "Max capacity already reached. Remove element before adding a new one.";
  }
};
// Time complexity for push: constant ... O(1)

Stack.prototype.pop = function() {
  if (this.topmost > 0) {
    let popItem = this.storage[String(this.topmost - 1)];
    delete this.storage[String(this.topmost - 1)];
    this.topmost--;
    return popItem;
  }
};
// Time complexity for pop: constant ... O(1)

Stack.prototype.peek = function() {
  if (this.topmost > 0) {
    return this.storage[String(this.topmost - 1)];
  }
};
// Time complexity for peek: constant ... O(1)

Stack.prototype.count = function() {
  return this.topmost;
};
// Time complexity for count: constant ... O(1)

Stack.prototype.contains = function(value) {
  let tempstore = [];
  let answer = false;
  let curSize = this.count();
  for (let i=0; i<curSize; i++) {
    if (this.peek() === value) {
      answer = true;
      break;
    } else {
      tempstore.push(this.pop());
    }
  }
  let tempSize = tempstore.length;
  for (let j=0; j<tempSize; j++) {
    this.push(tempstore.pop());
  }
  return answer;
};
// Time complexity for contains: linear ... O(n)

Stack.prototype.until = function(value) {
  let tempstore = [];
  let answer = null;
  let curSize = this.count();
  for (let i=0; i<curSize; i++) {
    if (this.peek() === value) {
      answer = i + 1;
      break;
    } else {
      tempstore.push(this.pop());
    }
  }
  let tempSize = tempstore.length;
  for (let j=0; j<tempSize; j++) {
    this.push(tempstore.pop());
  }
  return answer;
};
// Time complexity for until: linear ... O(n)
