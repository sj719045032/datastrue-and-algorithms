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
    this.gap=[];
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;
    this.setGap=setGap;
    this.shellSort=shellSort;
    this.shellSort1=shellSort1;
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
            for (var inner = outer + 1; inner < this.numElements; inner++) {
                if (this.dataStore[inner] < this.dataStore[min]) {
                    min = inner;
                }
            }
            /*inner=outer+1;
            while(inner<this.numElements){
                if(this.dataStore[inner] < this.dataStore[min])
                min = inner;
                inner++;
            }*/
            swap(this.dataStore, outer, min);
        }
    }

    function insertionSort() {
        var temp, inner;
        for (var outer = 1; outer < this.numElements; outer++) {
            temp = this.dataStore[outer];
            for(var inner=outer;inner>0&&this.dataStore[inner - 1] >= temp;inner--){
                    this.dataStore[inner] = this.dataStore[inner - 1];
            }
            this.dataStore[inner] = temp;
        }

    }
    function setGap(array){
        this.gap=array;
    }
    function shellSort(){

        for(var i=0;i<this.gap.length;i++){
            for(var outer=this.gap[i];outer<this.dataStore.length;outer++){
                var temp=this.dataStore[outer];
                for(var inner=outer;inner>0&&this.dataStore[inner-this.gap[i]]>temp;inner-=this.gap[i]){
                    this.dataStore[inner]=this.dataStore[inner-this.gap[i]];
                }
                this.dataStore[inner]=temp;
            }
        }
    }
    function shellSort1() {
        var N = this.dataStore.length;
        var h = 1;
        while (h < N/3) {
            h = 3* h + 1;
        }
        console.log(h);
        while (h >= 1) {
            for (var i = h; i < N; i++) {
                for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j-h];
                     j -= h) {
                    swap(this.dataStore, j, j-h);
                }
            }
            h = (h-1)/3;
        }

    }
}

var myNums = new CArray(1000000);

/*myNums.setData();
var start=new Date().getTime();
myNums.bubbleSort();
var end=new Date().getTime();
console.log("bubblesort "+(end-start)+" ms");
myNums.setData();
var start=new Date().getTime();
myNums.selectionSort();
var end=new Date().getTime();
console.log("slectionsort "+(end-start)+" ms");*/
/*myNums.setData();
var start=new Date().getTime();
myNums.insertionSort();
var end=new Date().getTime();
console.log("insertionsort "+(end-start)+" ms");*/
/*myNums.setData();
myNums.setGap([  701, 301, 132, 57, 23, 10, 4, 1]);
var start=new Date().getTime();
myNums.shellSort();
var end=new Date().getTime();
console.log("shellsort "+(end-start)+" ms");*/
myNums.setData();
var start=new Date().getTime();
myNums.shellSort1();
var end=new Date().getTime();
console.log("shellsort1 "+(end-start)+" ms");