class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null,
        prev: null
      }
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null,
        prev: null
      }
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    }
    insert(index, value){ // 2, 99
      //Code here
      if (index >= this.length) {
        return this.append(value);
      }
      const newNode = {
        value: value,
        next: null,
        prev: null
      };
      const startPoint = this.traverseToIndex(index-1);
      const endPoint = startPoint.next;
      startPoint.next = newNode;
      newNode.prev = startPoint;
      newNode.next = endPoint;
      endPoint.prev = newNode;
      this.length++;
      console.log(this);
      return this.printList();
    }
    traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      const firstPoint = this.traverseToIndex(index - 1);
      const unwantedNode = firstPoint.next;
      firstPoint.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  myLinkedList.insert(2, 99);
  myLinkedList.insert(20, 88);
  myLinkedList.remove(2);
  myLinkedList.remove(4);
  myLinkedList.printList();