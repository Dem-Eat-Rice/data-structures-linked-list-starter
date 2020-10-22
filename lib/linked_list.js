// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.store = [];
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let node = new Node(val);
        this.store.push(node);
        this.length++;
        if(this.tail){
            const previousTail = this.tail;
            previousTail.next = node;
        }
        this.tail = this.store[this.length - 1];
        if (this.length === 1) {
            this.head = this.store[0];
        }

        let object = {
            'head': this.head,
            'tail': this.tail,
            'length': this.length
        };

        return object;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) return undefined;
        // console.log("line 64", this.tail, this.store, this.length);
        let node = this.store.pop();
        this.length--;
        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        } else {
            this.store[this.length - 1].next = null;
            this.tail = this.store[this.length - 1];
            // this.tail.next = null;
        }
        // console.log("line 74", this.tail, this.store, this.length);
        return node;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let node = new Node(val);
        this.store.unshift(node);
        this.length++;
        if (this.head) {
            this.store[0].next = this.store[1];
        }

        this.head = this.store[0];

        if (this.length === 1) {
            this.tail = this.store[0];
        }

        let object = {
            'head': this.head,
            'tail': this.tail,
            'length': this.length
        };

        return object;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 0) return undefined;
        let node = this.store.shift();
        this.length--;

        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        } else {
            this.store[0].next = null;
            this.head = this.store[0];
        }
        return node;
    }

    // TODO: Implement the contains method here
    contains(target) {
        return this.store.some(el => {
            return el.value === target;
        })
    }

    // TODO: Implement the get method here
    get(index) {
        
    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
