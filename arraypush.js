/**
 * Created by shijin on 2016/3/19.
 */
function stack() {
    var a = [];
    var b = [1, 2, 3];
    a.push(b);
    b.pop();
    console.log(a);
}
main()