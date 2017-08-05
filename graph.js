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
// Time complexity:

Graph.prototype.addEdge = function(value1, value2) {
  if (this._nodes[value1] && this._nodes[value2]) {
    this._nodes[value1].push(value2);
    this._nodes[value2].push(value1);
  }

};
// Time complexity:


