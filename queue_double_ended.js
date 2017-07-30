// https://github.com/kuychaco/algoClass/blob/master/data-structures/queue.js
// BONUS EXERCISE: Implement a double-ended queue, with the following
// methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

function Queue() {
  this.storage = {};
  this.front = 1000;
  this.end = 1000;
}

Queue.prototype.enqueueRight = function(value) {
  this.storage[String(this.end)] = value;
  this.end++;
  return this.end - this.front;
};

Queue.prototype.enqueueLeft = function(value) {
  this.storage[String(this.front-1)] = value;
  this.front--;
  return this.end - this.front;
};

Queue.prototype.dequeueLeft = function() {
  if (this.storage[String(this.front)]) {
    let dqItem = this.storage[String(this.front)];
    delete this.storage[String(this.front)];
    this.front++;
    return dqItem;
  }
};

Queue.prototype.dequeueRight = function() {
  if (this.storage[String(this.end-1)]) {
    let dqItem = this.storage[String(this.end-1)];
    delete this.storage[String(this.end-1)];
    this.end--;
    return dqItem;
  }
};

Queue.prototype.count = function() {
  return this.end - this.front;
};
