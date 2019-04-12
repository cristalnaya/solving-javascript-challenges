
// Print the Elements of a Linked List
class printLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    // to create an array of values
    printList(){
      const arr = [];
      let currentNode = this.head;
      while(currentNode !== null) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
      }
      return arr;
    }
}

const linkedList = new printLinkedList(16);
linkedList.append(13);
linkedList.printList();