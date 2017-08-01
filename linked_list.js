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

// Exercise: implement these methods, note time complexity for each

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
  let moveNext = node.next;
  node.next = new Node(value);
  node.next.next = moveNext;
  return value;
};
// Time complexity for insertAfter: constant ... O(1)

LinkedList.prototype.removeAfter = function(node) {
  if (node.next !== null){
    let next2 = node.next.next;
    let removed = node.next.value;
    node.next = next2;
    return removed;
  } else {
    return "Nothing to remove";
  }
};
// Time complexity for removeAfter: constant ... O(1)

LinkedList.prototype.insertHead = function(value) {
  let newHead = new Node(value);
  newHead.next = this.head;
  this.head = newHead;
  return this.head.value;
};
// Time complexity for insertHead: constant ... O(1)

LinkedList.prototype.removeHead = function() {
  if (this.head){
    let removed = this.head.value;
    this.head = this.head.next;
    return removed;
  } else {
    return "Nothing to remove";
  }
};
// Time complexity for removeHead: constant ... O(1)

LinkedList.prototype.findNode = function(value) {
  let curnode = this.head;
  while (curnode) {
    if (curnode.value === value){
      return curnode;
    } else {
      curnode = curnode.next;
    }
  }
  return "Value not found";
};
// Time complexity for findNode: linear ... O(n)

LinkedList.prototype.appendToTail = function(value) {
  let curnode = this.head;
  while (curnode) {
    if (curnode.next === null){
      curnode.next = new Node(value);
      return curnode.next.value;
    } else {
      curnode = curnode.next;
    }
  }
};
// Time complexity for appendToTail without this.tail: linear ... O(n)

LinkedList.prototype.removeTail = function(value) {
  if (!this.head) {
    return "Nothing to remove";
  } else if (!this.head.next) {
    let removed = this.head.value;
    this.head = null;
    return removed;
  } else {
    let curnode = this.head;
    while(curnode) {
      if (curnode.next.next === null) {
        let removed = curnode.next.value;
        curnode.next = null;
        return removed;
      } else {
        curnode = curnode.next;
      }
    }
  }
};
// Time complexity for removeTail without this.tail: linear ... O(n)


// ========================================
// === OPTIMIZATION: THIS.TAIL PROPERTY ===
// ========================================

function LinkedListWithTail(headValue) {
  if (headValue === undefined) console.log('Must provide value for first node');
  this.head = this.tail = new Node(headValue);
}

LinkedListWithTail.prototype.appendToTail = function(value) {
  this.tail.next = new Node(value);
  this.tail = this.tail.next;
  return value;
};
// Time complexity for appendToTail with this.tail: constant ... O(1)

LinkedListWithTail.prototype.removeTail = function(value) {
  if (!this.head) {
    return "Nothing to remove";
  } else if (!this.head.next) {
    let removed = this.head.value;
    this.head = this.tail = null;
    return removed;
  } else {
    let curnode = this.head;
    while(curnode) {
      if (curnode.next.next === null) {
        let removed = curnode.next.value;
        curnode.next = null;
        this.tail = curnode;
        return removed;
      } else {
        curnode = curnode.next;
      }
    }
  }
};
// Time complexity for removeTail with this.tail: linear ... O(n)

LinkedListWithTail.prototype.insertAfter = function(node, value) {
  let moveNext = node.next;
  node.next = new Node(value);
  node.next.next = moveNext;
  if (this.tail === node) {
    this.tail = node.next;
  }
  return value;
};
// Time complexity for insertAfter with this.tail: constant ... O(1)

LinkedListWithTail.prototype.removeAfter = function(node) {
  if (node.next !== null){
    if (node.next === this.tail) {
      this.tail = node;
    }
    let next2 = node.next.next;
    let removed = node.next.value;
    node.next = next2;
    return removed;
  } else {
    return "Nothing to remove";
  }
};
// Time complexity for removeAfter with this.tail: constant ... O(1)
