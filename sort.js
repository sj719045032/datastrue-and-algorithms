/**
 * Created by shijin on 2016/3/23.
 */
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;
    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
    function setData() {
        for ( var i = 0; i < this.numElements; ++i ) {
         this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
         }
        /*this.dataStore = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];*/
    }

    function clear() {
        for (var i = 0; i < this.dataStore.length; ++i) {
            this.dataStore[i] = 0;
        }
    }

    function insert(element) {
        this.dataStore[this.pos++] = element;
    }

    function toString() {
        var restr = "";
        for (var i = 0; i < this.dataStore.length; ++i) {
            restr += this.dataStore[i] + " ";
            if (i > 0 & i % 10 == 0) {
                restr += "\n";
            }
        }
        return restr;
    }

    function swap(arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    function bubbleSort() {
        var numElements = this.numElements;
        for (var i = numElements; i > 1; i--) {
            /*for (var j = 0; j < i; j++) {
                if (this.dataStore[j] > this.dataStore[j + 1])
                    this.swap(this.dataStore, j, j + 1);
            }*/
           var j=0;
            while(j<i){
                if(this.dataStore[j] > this.dataStore[j + 1])
                swap(this.dataStore, j, j + 1);
                j++;
            }
        }
    }

    function selectionSort() {
        var inner;
        for (var outer = 0; outer < this.numElements - 1; outer++) {
            var min = outer;
            /*for (var inner = outer + 1; inner < this.numElements; inner++) {
                if (this.dataStore[inner] < this.dataStore[min]) {
                    min = inner;
                }
            }*/
            inner=outer+1;
            while(inner<this.numElements){
                if(this.dataStore[inner] < this.dataStore[min])
                min = inner;
                inner++;
            }
            swap(this.dataStore, outer, min);
        }
    }

    function insertionSort() {
        var temp, inner;
        for (var outer = 1; outer < this.numElements; outer++) {
            temp = this.dataStore[outer];
            inner = outer;
            while (inner > 0&&this.dataStore[inner - 1] >= temp) {
                this.dataStore[inner] = this.dataStore[inner - 1];
                --inner;
            }
            this.dataStore[inner] = temp;
        }
}
}

var myNums = new CArray(10000);

myNums.setData();
var start=new Date().getTime();
myNums.bubbleSort();
var end=new Date().getTime();
console.log("bubblesort "+(end-start)+" ms");
var start=new Date().getTime();
myNums.selectionSort();
var end=new Date().getTime();
console.log("slectionsort "+(end-start)+" ms");
var start=new Date().getTime();
myNums.insertionSort();
var end=new Date().getTime();
console.log("insertionsort "+(end-start)+" ms");
