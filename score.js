/**
 * Created by shijin on 2016/3/19.
 */
function Score(){
    this.scores=Array.prototype.slice.call(arguments);
    this.add= function (score) {
        this.scores.push(score);
    };
    this.average= function () {
        return this.scores.reduce(function (a, b) {
            return a+b;
        })/this.scores.length;
    }
}

var stone=new Score(99,101,100);
console.log(stone.average());
stone.add(100);
console.log(stone.average());