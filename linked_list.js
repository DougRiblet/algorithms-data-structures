// https://github.com/kuychaco/algoClass/blob/master/data-structures/linkedList.js
// Comprised of nodes that represent a sequence.
// Each node is composed of data and a reference/link to the next node.

// Constructors already provided

function Node(value) {
  this.next = null;
  this.value = value;
}

function LinkedList(headValue) {
  if (headValue === undefined) console.log('Must provide value for first node');
  this.head = new Node(headValue);
}

// Exercise: implement these methods

LinkedList.prototype.forEach = function(callback) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.print = function() {
  // implement me...
};
// Time complexity:

LinkedList.prototype.insertAfter = function(node, value) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.removeAfter = function(node) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.insertHead = function(value) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.removeHead = function() {
  // implement me...
}

LinkedList.prototype.findNode = function(value) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.appendToTail = function(value) {
  // implement me...
};
// Time complexity:


// PART 2:

LinkedList.prototype.insertBefore = function(node, value) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.removeBefore = function(node) {
  // implement me...
};
// Time complexity:












