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
  let curnode = this.head;
  while(curnode){
    callback(curnode.value);
    curnode = curnode.next;
  }
};
// Time complexity for forEach: linear ... O(n)

LinkedList.prototype.print = function() {
  let arr = [];
  let curnode = this.head;
  while(curnode){
    arr.push(curnode.value);
    curnode = curnode.next;
  }
  return arr.map(String).join(", ");
};
// Time complexity for print: linear ... O(n)

LinkedList.prototype.insertAfter = function(node, value) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.removeAfter = function(node) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.insertHead = function(value) {
  let newHead = new Node(value);
  newHead.next = this.head;
  this.head = newHead;
};
// Time complexity for insertHead: constant ... O(1);

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












