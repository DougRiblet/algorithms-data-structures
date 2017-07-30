// https://github.com/kuychaco/algoClass/blob/master/data-structures/queue.js
// BONUS EXERCISE: Implement a queue using two stacks.

// First, set up Stack constructor and methods

function Stack() {
  this.storage = {};
  this.topmost = 0;
}

Stack.prototype.push = function(value) {
  this.storage[String(this.topmost)] = value;
  this.topmost++;
  return this.topmost;
};

Stack.prototype.pop = function() {
  if (this.topmost > 0) {
    let popItem = this.storage[String(this.topmost - 1)];
    delete this.storage[String(this.topmost - 1)];
    this.topmost--;
    return popItem;
  }
};

Stack.prototype.size = function() {
  return this.topmost;
};

// Now, set up Queue constructor using two stacks

function Queue() {
  this.inbox = new Stack();
  this.outbox = new Stack();
};

Queue.prototype.enqueue = function(value) {
  while(this.outbox.size()) {
    this.inbox.push(this.outbox.pop());
  }
  this.outbox.push(value);
  while(this.inbox.size()) {
    this.outbox.push(this.inbox.pop());
  }
};

Queue.prototype.dequeue = function(){
  return this.outbox.pop();
};

Queue.prototype.size = function(){
  return this.outbox.size();
};
