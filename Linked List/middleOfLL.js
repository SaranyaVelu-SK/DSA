//two pointer approach(slow and fast pointer)
var middleNode = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

//array approach
function middleNode(head) {
    let nodes = [];
    let curr = head;

    while (curr) {
        nodes.push(curr);
        curr = curr.next;
    }

    return nodes[Math.floor(nodes.length / 2)];
}