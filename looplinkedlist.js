/**
 * Created by shijin on 2016/3/21.
 */
function LinkedList() {
    function Node(element) {
        this.element = element;
        this.next = null;
    }
   this.length=0;
    this.head = new Node("head");
    this.head.next = this.head;
    this.currNode=head;
    this.back= function (n) {
        while(n>0)
        this.currNode=this.currNode.next;
    };
    this.find = function (item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    };
    this.findPrevious = function (item) {
        var currNode = this.head;
        while (currNode.next.element != item)
            currNode = currNode.next;
        return currNode;
    };
    this.insert = function (newElement, item) {
        var newNode = new Node(newElement);
        var currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
        this.length++;
    };
    this.remove = function (item) {
        var currNode = this.find(item);
        var preNode = this.findPrevious(item);
        preNode.next = currNode.next;
        this.length--;
    };
    this.display = function () {
        var currNode = this.head;
        while (currNode.next != null && currNode.next != this.head) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    };


}


