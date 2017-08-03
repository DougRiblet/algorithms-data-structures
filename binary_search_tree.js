// https://github.com/kuychaco/algoClass/blob/master/data-structures/binarySearchTree.js

// Abstract data type

// A binary search tree is a tree with the additional constraints:
// - each node has only two child nodes (node.left and node.right)
// - all the values in the left subtree of a node are
//     less than or equal to the value of the node
// - all the values in the right subtree of a node 
//     are greater than the value of the node

// Constructor function provided

function BinarySearchTree (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// EXERCISES: Implement these methods and note time complexity for each

BinarySearchTree.prototype.insert = function(value) {

  function recursiveFind(nod,val){
    if (val === nod.value) {
      return;
    } else if (val < nod.value) {
      if (nod.left === null) {
        nod.left = new BinarySearchTree(val);
        return;
      } else {
        recursiveFind(nod.left, val);
      }
    } else if (val > nod.value) {
      if (nod.right === null) {
        nod.right = new BinarySearchTree(val);
        return;
      } else {
        recursiveFind(nod.right, val);
      }

    }
  }

  recursiveFind(this, value);
  return this;

};
// Time complexity for insert: logarithmic ... O(log(n))

BinarySearchTree.prototype.contains = function(value) {
  let answer = false;

  function recursiveFind(nod,val){
    if (val === nod.value) {
      answer = true;
      return;
    } else if (val < nod.value && nod.left) {
      recursiveFind(nod.left, val); 
    } else if (val > nod.value && nod.right) {
      recursiveFind(nod.right, val);
    }
  }
  
  recursiveFind(this, value);
  return answer;
};
// Time complexity for contains: logarithmic ... O(log(n))

BinarySearchTree.prototype.traverseDepthFirst_inOrder = function(fn) {
  if (this.left === null && this.right === null){
    return fn(this);
  }
  if (this.left !== null){
    this.left.traverseDepthFirst_inOrder(fn);
  }
  fn(this);
  if (this.right !== null){
    this.right.traverseDepthFirst_inOrder(fn);
  }
};
// Time complexity for traverseDepthFirst_inOrder: linear ... O(n)

BinarySearchTree.prototype.traverseDepthFirst_preOrder = function(fn) {
  if (this.left === null && this.right === null){
    return fn(this);
  }
  fn(this);
  if (this.left !== null){
    this.left.traverseDepthFirst_preOrder(fn);
  }
  if (this.right !== null){
    this.right.traverseDepthFirst_preOrder(fn);
  }
};
// Time complexity for traverseDepthFirst_preOrder: linear ... O(n)

BinarySearchTree.prototype.traverseDepthFirst_postOrder = function(fn) {
  if (this.left === null && this.right === null){
    return fn(this);
  }
  if (this.left !== null){
    this.left.traverseDepthFirst_postOrder(fn);
  }
  if (this.right !== null){
    this.right.traverseDepthFirst_postOrder(fn);
  }
  fn(this);
};
// Time complexity for traverseDepthFirst_postOrder: linear ... O(n)

BinarySearchTree.prototype.checkIfFull = function() {
  let answer = true;
  this.traverseDepthFirst_inOrder(function(nod){
    if ((!nod.left && nod.right)||(nod.left && !nod.right)) { answer = false }
  });
  return answer;
};
// Time complexity for checkIfFull: linear ... O(n)

BinarySearchTree.prototype.checkIfBalanced = function() {
  // implement me...
};
// Time complexity:
