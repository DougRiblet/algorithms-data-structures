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

// METHODS: Three types of BST traversal
// (1) In-Order traversal is most common
// Visit left branch, then current node, than right branch
// For BST, this visits nodes in ascending order (hence the name)

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

// (2) Pre-Order traversal visits current node before its child nodes

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

// (3) Post-Order traversal visits the current node after its child nodes

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

// METHOD: checkIfFull
// A binary tree is full if every node has either 
// zero or two children (no nodes have only one child)

BinarySearchTree.prototype.checkIfFull = function() {
  let answer = true;
  this.traverseDepthFirst_inOrder(function(nod){
    if ((!nod.left && nod.right)||(nod.left && !nod.right)) { answer = false }
  });
  return answer;
};
// Time complexity for checkIfFull: linear ... O(n)

// METHOD: checkIfBalanced
// For this exercise, let's say that a tree is balanced if the minimum height
// and the maximum height differ by no more than 1. The height for a branch 
// is the number of levels below the root.

BinarySearchTree.prototype.checkIfBalanced = function() {
  let leafDepths = [];

  function recursiveDepthCheck(nod,dep){
    if (!nod.left && !nod.right) {
      leafDepths.push(dep);
      return;
    } else {
      if (nod.left) {
        recursiveDepthCheck(nod.left, dep+1); 
      }
      if (nod.right) {
        recursiveDepthCheck(nod.right, dep+1); 
      }
    }
  }

  recursiveDepthCheck(this, 0);

  return Math.max(...leafDepths) - Math.min(...leafDepths) <= 1;
};
// Time complexity for checkIfBalanced: linear ... O(n)
