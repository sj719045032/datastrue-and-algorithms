/**
 * Created by shijin on 2016/3/21.
 */
function LinkedList() {
    function Node(element) {
        this.element = element;
        this.next = null;
        this.previous = null;

    }
    this.head = new Node("head");
    this.find = function (item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    };
    this.findLast = function () {
        var currNode = this.head;
        while (currNode.next != null)
            currNode = currNode.next;
        return currNode;
    };
    this.insert = function (newElement, item) {
        var newNode = new Node(newElement);
        var currNode = this.find(item);
        newNode.next = currNode.next;
        newNode.previous = currNode;
        currNode.next = newNode;
    };
    this.remove = function (item) {
        var currNode = this.find(item);
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    };
    this.display = function () {
        var currNode = this.head;
        while (currNode.next != null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    };

    this.displayReverse = function () {
        var currNode = this.head;
        currNode = this.findLast();
        while (currNode.previous != null) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    }

}


var cities = new LinkedList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
cities.remove("Carlisle");
cities.display();
cities.displayReverse();