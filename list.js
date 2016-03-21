/**
 * Created by shijin on 2016/3/19.
 */
function List() {
    this.dataStore = [];
    this.listSize = arguments.length;
    this.pos = 0;
    this.length = function () {
        return this.listSize;
    };
    this.clear = function () {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;

    };
    this.toString = function () {
        return this.dataStore;
    };
    this.getElement = function () {
        return this.dataStore[this.pos];
    };
    this.insert = function (element, after) {
        var afterIndex = this.dataStore.indexOf(after);
        if (afterIndex >= 0) {
            this.dataStore.splice(afterIndex + 1, 0, element);
            this.listSize++;
            return true;
        }
        return false;
    };
    this.append = function (element) {
        this.dataStore[this.listSize++] = element;
    };
    this.remove = function (element) {
        var index = this.dataStore.indexOf(element);
        if (index >= 0) {
            this.dataStore.splice(index, 1);
            this.listSize--;
            return true
        }
        return false;
    };
    this.front = function () {
        this.pos = 0;

    };
    this.end = function () {
        this.pos = this.listSize - 1;
    };
    this.prev = function () {
        if (this.pos > 0)
            this.pos--;

    };
    this.next = function () {
        if (this.pos < this.listSize - 1)
            this.pos++;
    };
    this.currPos = function () {
        return this.pos;
    };
    this.moveTo = function (position) {
       this.pos=position;
    };
    this.contain = function (element) {
        return this.dataStore.indexOf(element) >= 0

    }
}

var aList = new List();
aList.append("stone");
aList.append("orange");
console.log(aList.toString());
aList.insert("apple", "stone");
console.log(aList.toString());
aList.moveTo(1);
console.log(aList.getElement());
aList.prev();
console.log(aList.getElement());
aList.next();
console.log(aList.getElement());
aList.front();
console.log(aList.getElement());
aList.end();
console.log(aList.getElement());
