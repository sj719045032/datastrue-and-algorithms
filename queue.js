/**
 * Created by shijin on 2016/3/20.
 */
var fs=require("fs");
function Queue() {
    this.dataStore = [];
    this.enqueue = function (element) {
        this.dataStore.push(element);
    };
    this.dequeue = function () {
        this.dataStore.shift();
    };
    this.front = function () {
        return this.dataStore[0];
    };
    this.back = function () {
        return this.dataStore[this.dataStore.length - 1];
    };
    this.toString = function () {
        return this.dataStore.join("\n");
    };
    this.empty = function () {
       return this.dataStore.length==0;
    };
}

var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());
var array=FileReader;
console.log(array);
