// https://github.com/kuychaco/algoClass/blob/master/data-structures/queue.js
// BONUS EXERCISE: Implement a queue using two stacks.

var Stack = function() {
  var storage = [];
  this.push = function(v){ storage.push(v) };
  this.pop = function(){ return storage.pop() };
  this.size = function(){ return storage.length };
};

var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();
  this.enqueue = function(v) {
    while(outbox.size()) { inbox.push(outbox.pop()) }
    outbox.push(v);
    while(inbox.size()) { outbox.push(inbox.pop()) }
  };
  this.dequeue = function(){ return outbox.pop() };
  this.size = function(){ return outbox.size() };
};
