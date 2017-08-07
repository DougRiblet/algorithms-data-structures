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
  const notRemoved = x => x!==value;
  for (let key in this._nodes){
    this._nodes[key] = this._nodes[key].filter(notRemoved);
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

Graph.prototype.forEach = function(func) {
  for (var key in this._nodes) {
    func(key, this._nodes[key], this._nodes);
  }
};
// Time complexity for forEach: linear ... O(n)

Graph.prototype.traverseDepthFirst = function(value, fn, visited={}, distance=0) {
  fn(value, distance);
  visited[value] = true;
  for (let x=0; x<this._nodes[value].length; x++){
    if (!visited[this._nodes[value][x]]){
      this.traverseDepthFirst(this._nodes[value][x], fn, visited, distance+1);
    }
  }
};
// Time complexity for traverseDepthFirst: linear ... O(n)

Graph.prototype.traverseBreadthFirst = function(value, fn) {
  let fnQueue = [value];
  let visited = {};
  visited[value] = 0;
  while(fnQueue.length > 0){
    let curValue = fnQueue.shift();
    fn(curValue, visited[curValue]);
    for (let x=0; x<this._nodes[curValue].length; x++){
      let curNext = this._nodes[curValue][x];
      if (!visited.hasOwnProperty(curNext)){
        fnQueue.push(curNext);
        visited[curNext] = visited[curValue]+1;
      }
    }
  }
};
// Time complexity for traverseBreadthFirst: linear ... O(n)


