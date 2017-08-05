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
// Worst-case: approaches linear if BST highly unbalanced

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
// Worst-case: approaches linear if BST highly unbalanced

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

// METHOD: checkIfValid
// Determine whether a binary tree is a valid binary search tree

BinarySearchTree.prototype.checkIfValid = function () {
  if (this === null) { return true }
  let answer = true;
  
  function recursiveCheck(nd, lo, hi){
    if (nd.value <= lo || nd.value >= hi){
      answer = false;
      return;
    }
    if (nd.left){
      recursiveCheck(nd.left, lo, nd.value);
    }
    if (nd.right){
      recursiveCheck(nd.right, nd.value, hi);
    }
  }
  
  recursiveCheck(this, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
  
  return answer;
};
// Time complexity for checkIfValid: linear ... O(n)

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

// METHOD: checkIfPerfect
// http://www.codewars.com/kata/fun-with-trees-is-perfect
// A perfect binary tree is a binary tree in which all interior nodes
// have two children and all leaves have the same depth or same level.

BinarySearchTree.prototype.checkIfPerfect = function(){
  if (this === null) { return true }
  let full = true;
  let depths = [];
  function traverse(nod,dep){
    if (!nod.left && !nod.right){
      depths.push(dep);
      return;
    } else if ((!nod.left && nod.right)||(nod.left && !nod.right)){
      full = false;
      return;
    } else {
      traverse(nod.left,dep+1);
      traverse(nod.right,dep+1);
    }
  }
  traverse(this,0);
  return full && (Math.max(...depths) - Math.min(...depths) === 0);
};
// Time complexity for checkIfPerfect: linear ... O(n)

// METHOD: delete

BinarySearchTree.prototype.delete = function(value){
  // edge case -- what if BST is empty, ie root is null ???
  if (this === null) { return this }
  
  // edge case -- what if node to be deleted is the root ???
  if (this.value === value){
    let rootNode = this;
    if(!this.left && !this.right){
      rootNode = null;
      return rootNode;
    } else if (this.left && !this.right){
      let oldleft = this.left;
      rootNode.value = oldleft.value;
      rootNode.left = oldleft.left;
      return rootNode;
    } else if (!this.left && this.right){
      let oldright = this.right;
      rootNode.value = oldright.value;
      rootNode.right = oldright.right;
      return rootNode;
    } else if (this.left && this.right){
      // Just going left for new root, no attempt to balance
      if (!this.left.left && !this.left.right){
        rootNode.value = this.left.value;
        rootNode.left = null;
        return rootNode;
      } else if (this.left.left && !this.left.right){
        rootNode.value = this.left.value;
        rootNode.left = this.left.left;
        return rootNode;
      } else {
        // Find highest value on left subtree
        let curParent = this.left;
        let curChild = this.left.right;
        let newRootValue;
        while (curChild){
          if (curChild.right){
            curParent = curChild;
            curChild = curChild.right;
          } else {
            newRootValue = curChild.value;
            if (!curChild.left){
              curParent.right = null;
            } else {
              curParent.right = curChild.left;
            }
            break;
          }
        }
        rootNode.value = newRootValue;
      }
      return rootNode;
    }
  }
  
  // This function won't have to deal with edge cases,
  // so 'par' and 'dir' will always be set when 'dva' found
  function recursiveDelete(nod, dva, par, dir){
    if (!nod) { return }
    if (nod.value === dva){
      if (!nod.left && !nod.right){
        par[dir] = null;
        return;
      } else if (nod.left && !nod.right){
        par[dir] = nod.left;
        return;
      } else if (!nod.left && nod.right){
        par[dir] = nod.right;
        return;
      } else if (nod.left && nod.right){
        if (!nod.left.left && !nod.left.right){
          nod.value = nod.left.value;
          nod.left = null;
          return;
        } else if (nod.left.left && !nod.left.right){
          nod.value = nod.left.value;
          nod.left = nod.left.left;
          return;
        } else if (nod.left.left && nod.left.right){
          // Find highest value on left subtree
          let curParent = nod.left;
          let curChild = nod.left.right;
          let newNodValue;
          while (curChild){
            if (curChild.right){
              curParent = curChild;
              curChild = curChild.right;
            } else {
              newNodValue = curChild.value;
              if (!curChild.left){
                curParent.right = null;
              } else {
                curParent.right = curChild.left;
              }
              break;
            }
          }
          nod.value = newNodValue;
        }
      }
    } else if (nod.value < dva){
      recursiveDelete(nod.right, dva, nod, 'right');
    } else if (nod.value > dva){
      recursiveDelete(nod.left, dva, nod, 'left');
    }
  }
  
  recursiveDelete(this, value, null, null);
  return this;
  
};
// Time complexity for delete: logarithmic ... O(log(n))
// Worst-case: approaches linear if BST highly unbalanced
