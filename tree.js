// https://github.com/kuychaco/algoClass/blob/master/data-structures/tree.js

// Abstract data type

// General Tree:
// A tree has a root node.
// The root node has 0 or more children.
// Each child node has 0 or more children.
// (each node in the tree can be seen as a subtree)

// Constraints:
// A child has only one parent and the root node has no parent.
// Note: A tree is a special type of graph. A tree is a graph without cycles.

function Tree (value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.addChild = function(value) {
  let tc = new Tree(value);
  this.children.push(tc);
  return tc;
};
// Time complexity for addChild: constant ... O(1)

Tree.prototype.contains = function(value) {
  let answer = false;
  function recursiveCheck(node,val){
    if (node.value === val) {
      answer = true;
      return;
    } else if (node.children.length === 0){
      return;
    } else {
      for (let x=0; x<node.children.length; x++){
        recursiveCheck(node.children[x], val);
      }
    }
  }
  recursiveCheck(this, value);
  return answer;
};
// Time complexity for contains: linear ... O(n);

// TESTS FOR ADDCHILD & CONTAINS:
// var tree = new Tree(1);
// var branch1 = tree.addChild(2);
// var branch2 = tree.addChild(3);
// var branch3 = tree.addChild(4);
// branch1.addChild(5);
// branch1.addChild(6);
// branch3.addChild(7).addChild(8);
// console.log(tree.contains(4), "should be true");
// console.log(tree.contains(9), "should be false");
// console.log(tree.contains(6), "should be true");
// console.log(tree.contains(7), "should be true");
// console.log(tree.contains(8), "should be true");
// console.log(tree.contains(14), "should be false");

Tree.prototype.traverseDepthFirst = function(fn) {
  // implement me...
};
// Time complexity:


Tree.prototype.traverseBreadthFirst = function(fn) {
  // implement me...
};
// Time complexity:
