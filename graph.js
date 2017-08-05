// https://github.com/kuychaco/algoClass/blob/master/data-structures/graph.js

// Abstract data type

// Basic Graph:
// Stores nodes (represented by any primitive value) and the neighbors for
// each node. This implementation represents a graph as an adjacency list.

// Constraints:
// This graph implementation is undirected and can have unconnected nodes.
// The nodes are represented by unique primitive values.

// Constructor already provided:

function Graph () {
  this._nodes = {};
}

// EXERCISE: Implement these methods

Graph.prototype.addNode = function(value) {
  this._nodes[value] = this._nodes[value] || [];
};
// Time complexity for addNode: constant ... O(1)

Graph.prototype.addEdge = function(value1, value2) {
  if (this._nodes[value1] && this._nodes[value2]) {
    this._nodes[value1].push(value2);
    this._nodes[value2].push(value1);
  }

};
// Time complexity for addEdge: constant ... O(1)

Graph.prototype.removeNode = function(value) {
  delete this._nodes[value];
  for (let key in this._nodes){
    this._nodes[key] = this._nodes[key].filter(x=>x!==value);
  }
};
// Time complexity for removeNode: quadratic ... O(n^2)

Graph.prototype.contains = function(value) {
  return this._nodes.hasOwnProperty(value);
};
// Time complexity for contains: constant ... O(1)

Graph.prototype.removeEdge = function(value1, value2) {
  if (this._nodes[value1] && this._nodes[value2]) {
    this._nodes[value1] = this._nodes[value1].filter(x=>x!==value2);
    this._nodes[value2] = this._nodes[value2].filter(x=>x!==value1);
  }
};
// Time complexity for removeEdge: linear ... O(n)

Graph.prototype.hasEdge = function(value1, value2) {
  return this._nodes[value1].includes(value2);
};
// Time complexity for hasEdge: linear ... O(n)
