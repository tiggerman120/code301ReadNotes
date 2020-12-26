'use strict';

class Node {
  constructor() {
    this.head = null;
    this.next = null;
  }
}

function traversal() {
  let node = new Node();
  node = this.head
  let current = this.head
  if (!node.head) {
    node.head = new Node()
  } else {
    while (node.head !== null) {
      node.head = node.next
    }
  }

}