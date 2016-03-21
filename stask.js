/**
 * Created by shijin on 2016/3/20.
 */
function Stask() {
    this.dataStore = [];
    this.top=0;
    this.pop = function () {
        return this.dataStore[--this.top];
    };
    this.push = function (element) {
    this.dataStore[this.top++]=element;
    };
    this.peek= function () {
    return this.dataStore[this.top-1];
    };
    this.length= function () {
        return this.top;
    };
    this.clear= function () {
        this.top=0;
    }
}

function mulBase(num,base){
    var s=new Stask();
    do{
        s.push(num%base);
        num = Math.floor(num/base);
    }while(num>0);
    var converted="";
    while(s.length()>0)
    converted+=s.pop();
    return converted;
}
console.log(mulBase(5,2));