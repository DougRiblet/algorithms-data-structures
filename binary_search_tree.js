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
  // implement me...
};
// Time complexity:

BinarySearchTree.prototype.contains = function(value) {
  // implement me...
};
// Time complexity:
