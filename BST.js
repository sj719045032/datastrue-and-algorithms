/**
 * Created by shijin on 2016/3/21.
 */
function BST() {
    function Node(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.count = 1;
        this.show = function () {
            return this.data;
        };
    }
    this.root = null;
    this.insert = function (data) {
        var newNode = new Node(data, null, null);
        if (this.root == null) {
            this.root = newNode;
        } else {
            var currNode = this.root;
            while (true) {
                if (data < currNode.data) {
                    if (currNode.left == null) {
                        currNode.left = newNode;
                        break;
                    }
                    currNode = currNode.left;
                } else if (data >= currNode.data) {
                    if (currNode.right == null) {
                        currNode.right = newNode;
                        break;
                    }
                    currNode = currNode.right;
                }
            }
        }
    };
    this.update= function(data) {
        var currNode = this.find(data);
        currNode.count++;
        return currNode;
    };
    this.inOrder = function (node) {
        if (!(node == null)) {
            arguments.callee(node.left);
            console.log(node.show());
            arguments.callee(node.right);
        }
    };
    this.getMin = function (node) {
        var currNode = node || this.root;
        while (currNode.left != null)
            currNode = currNode.left;
        return currNode.data;
    };
    this.getMax = function () {
        var currNode = this.root;
        while (currNode.right != null)
            currNode = currNode.right;
        return currNode.data;
    };
    this.find = function (data) {
        var currNode = this.root;
        while (currNode != null) {
            if (currNode.data == data) {
                return currNode;
            } else if (data < currNode.data) {
                currNode = currNode.left;
            } else if (data > currNode.data) {
                currNode = currNode.right;
            }
        }
        return null;
    };
    this.remove = function (data) {
        this.root = this.removeNode(this.root, data);
    };
   this.removeNode = function(node, data) {
        if (node.data == data) {
            if (node.left == null && node.right == null) {
                return null;
            } else if (node.left == null) {
                return node.right;
            } else if (node.right == null) {
                return node.left;
            } else {
                node.data = this.getMin(node.right);
                node.right=this.removeNode(node.right, node.data);
                return node;
            }
        }
        else if (data < node.data) {
           node.left= this.removeNode(node.left,data);
            return node;
        } else if (data > node.data) {
            node.right=this.removeNode(node.right,data);
            return node;
        }


    }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(3);
nums.insert(22);
nums.insert(37);
nums.insert(97);
nums.remove(23);
nums.inOrder(nums.root);
