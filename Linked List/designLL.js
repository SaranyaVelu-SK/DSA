// Design and implement a simple singly linked list using basic building blocks like nodes and references (or pointers). The goal is to:
// Define a node with a value and a pointer to the next node.
// Create individual nodes and link them together to form a list.
// Traverse the list from the head and print each node’s value.

function Node(val){
    this.val = val;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = null;
    this.size=0;
};

MyLinkedList.prototype.get = function(index) {

    if(index < 0 || index >= this.size) return -1;
    let current = this.head;
    for(let i=0;i<index;i++){
        current = current.next;
    }
    return current.val
};

MyLinkedList.prototype.addAtHead = function(val) {
    let node1 = new Node(val);
    node1.next = this.head;
    this.head = node1;
    this.size++;
};

MyLinkedList.prototype.addAtTail = function(val) {
    let node2 = new Node(val);
    if(this.head === null){
        this.head = node2;
    }else{
    
    let curr = this.head;
    while(curr.next){
        curr = curr.next
    }
    curr.next = node2;
    }
    this.size++;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0 || index >= this.size) return;
    if(index===0){
        this.addAtHead(val);
        return;
    }else if(index === this.size){
        this.addAtTail(val);
        return;
    }else{
        let node3 = new Node(val);
        let current = this.head;
        for(let i=0;i<index-1;i++){
            current = current.next;
        }
        node3.next = current.next;
        current.next = node3;

        this.size++;
    }
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size) return;

    if(index === 0){
        this.head = this.head.next;
    }else{
        let current = this.head;
    for(let i = 0;i<index-1;i++){
        current = current.next
    }
    current.next = current.next.next;
    }
    this.size--;    
};